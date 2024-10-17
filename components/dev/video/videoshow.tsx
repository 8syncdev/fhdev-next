'use client'
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Copy, Youtube, Pause, Play, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { brand } from '@/constants/brand';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const VideoShow: React.FC<{ url: string; title: string; openDialog?: boolean }> = React.memo(({ url, title, openDialog = false }) => {
    const getYoutubeEmbedId = useCallback((url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    }, []);

    const embedId = useMemo(() => getYoutubeEmbedId(url), [url, getYoutubeEmbedId]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const videoRef = useRef<HTMLIFrameElement>(null);

    const handleCopyUrl = useCallback(() => {
        navigator.clipboard.writeText(url);
        // You might want to add some visual feedback here
    }, [url]);

    const handlePlay = useCallback(() => {
        if (openDialog) {
            setIsOpen(true);
        } else {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                setIsPlaying(true);
                if (videoRef.current?.contentWindow) {
                    videoRef.current.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                }
            }, 1500); // 1.5 seconds loading effect
        }
    }, [openDialog]);

    const handlePause = useCallback(() => {
        setIsPlaying(false);
        if (videoRef.current?.contentWindow) {
            videoRef.current.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
    }, []);

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            if (event.origin !== "https://www.youtube.com") return;
            
            try {
                const data = JSON.parse(event.data);
                switch (data.event) {
                    case "onStateChange":
                        setIsPlaying(data.info === 1);
                        break;
                }
            } catch (error) {
                console.error("Error parsing message from YouTube player:", error);
            }
        };

        window.addEventListener("message", handleMessage);
        return () => window.removeEventListener("message", handleMessage);
    }, []);

    if (!embedId) {
        return <p>Không thể tải video. Vui lòng thử lại sau.</p>;
    }

    const VideoContent = ({ inDialog = false }) => (
        <div className="relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-12 bg-blue-900/80 flex items-center px-4 z-30 transition-all duration-300 -translate-y-full group-hover:translate-y-0">
                <h3 className="text-white text-sm font-medium truncate">{title}</h3>
            </div>
            <div className="pt-[56.25%] relative">
                <iframe
                    ref={videoRef}
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${embedId}?enablejsapi=1&origin=${window.location.origin}&controls=0&modestbranding=1&rel=0&showinfo=0${inDialog ? '&autoplay=1' : ''}`}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
                {!isPlaying && !isLoading && !inDialog && (
                    <div className="absolute top-0 left-0 w-full h-full bg-blue-900/20 flex items-center justify-center z-20">
                        <button
                            onClick={openDialog ? () => setIsOpen(true) : handlePlay}
                            className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 focus:outline-none"
                        >
                            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                        </button>
                    </div>
                )}
                {isLoading && (
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-20">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                )}
                {isPlaying && (
                    <div className="absolute top-0 left-0 w-full h-full z-10" onClick={(e) => e.preventDefault()} />
                )}
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-blue-900/80 h-12 flex items-center justify-between px-4 z-30 transition-all duration-300 translate-y-full group-hover:translate-y-0">
                <Button variant="outline" size="sm" onClick={isPlaying ? handlePause : handlePlay} className="p-1 text-white border-blue-500 hover:bg-blue-700">
                    {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                </Button>
                <div className="flex flex-row space-x-2">
                    <Button variant="outline" size="sm" onClick={handleCopyUrl} className="p-1 text-white border-blue-500 hover:bg-blue-700">
                        <Copy className="w-3 h-3" />
                    </Button>
                    <Link href={brand.author.youtube} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="p-1 text-white border-blue-500 hover:bg-blue-700">
                            <Youtube className="w-3 h-3" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );

    return (
        <div className="w-full mx-auto max-w-3xl">
            {openDialog ? (
                <>
                    <div onClick={() => setIsOpen(true)}>
                        <VideoContent />
                    </div>
                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                        <DialogContent className="sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] bg-blue-900/95 border-blue-500 p-0">
                            <Button
                                className="absolute right-2 top-2 rounded-full w-8 h-8 p-0 z-50 bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                onClick={() => setIsOpen(false)}
                            >
                                <X className="h-4 w-4 text-white" />
                                <span className="sr-only">Close</span>
                            </Button>
                            <div className="p-4">
                                <VideoContent inDialog={true} />
                            </div>
                        </DialogContent>
                    </Dialog>
                </>
            ) : (
                <VideoContent />
            )}
        </div>
    );
});

export default VideoShow;