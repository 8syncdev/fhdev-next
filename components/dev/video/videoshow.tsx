'use client'
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Copy, Youtube, Pause, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { brand } from '@/constants/brand';

const VideoShow: React.FC<{ url: string; title: string }> = React.memo(({ url, title }) => {
    const getYoutubeEmbedId = useCallback((url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    }, []);

    const embedId = useMemo(() => getYoutubeEmbedId(url), [url, getYoutubeEmbedId]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const videoRef = useRef<HTMLIFrameElement>(null);

    const handleCopyUrl = useCallback(() => {
        navigator.clipboard.writeText(url);
        // You might want to add some visual feedback here
    }, [url]);

    const handlePlay = useCallback(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsPlaying(true);
            if (videoRef.current?.contentWindow) {
                videoRef.current.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
            }
        }, 1500); // 1.5 seconds loading effect
    }, []);

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
                    case "onReady":
                        setDuration(data.info.duration);
                        break;
                    case "onStateChange":
                        setIsPlaying(data.info === 1);
                        break;
                    case "onCurrentTime":
                        setCurrentTime(data.info);
                        break;
                }
            } catch (error) {
                console.error("Error parsing message from YouTube player:", error);
            }
        };

        window.addEventListener("message", handleMessage);
        return () => window.removeEventListener("message", handleMessage);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            videoRef.current?.contentWindow?.postMessage('{"event":"command","func":"getCurrentTime","args":""}', '*');
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = useCallback((time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }, []);

    const handleSeek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const seekTime = parseFloat(e.target.value);
        videoRef.current?.contentWindow?.postMessage(`{"event":"command","func":"seekTo","args":[${seekTime},true]}`, '*');
    }, []);

    if (!embedId) {
        return <p>Không thể tải video. Vui lòng thử lại sau.</p>;
    }

    return (
        <div className="w-full mx-auto max-w-3xl">
            <div className="relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-12 bg-background flex items-center px-4 z-30 transition-all duration-300 -translate-y-full group-hover:translate-y-0">
                    <h3 className="text-white text-sm font-medium truncate">{title}</h3>
                </div>
                <div className="pt-[56.25%] relative">
                    <iframe
                        ref={videoRef}
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${embedId}?enablejsapi=1&origin=${window.location.origin}&controls=0&modestbranding=1&rel=0&showinfo=0`}
                        title={title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    {!isPlaying && !isLoading && (
                        <div className="absolute top-0 left-0 w-full h-full bg-primary/10 flex items-center justify-center z-20">
                            <button
                                onClick={handlePlay}
                                className="w-20 h-20 bg-primary rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 focus:outline-none"
                            >
                                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                </svg>
                            </button>
                        </div>
                    )}
                    {isLoading && (
                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-20">
                            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
                        </div>
                    )}
                    {isPlaying && (
                        <div className="absolute top-0 left-0 w-full h-full z-10" onClick={(e) => e.preventDefault()} />
                    )}
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-background h-16 flex flex-col justify-between items-center px-2 z-30 transition-all duration-300 translate-y-full group-hover:translate-y-0">
                    <input
                        type="range"
                        min="0"
                        max={duration}
                        value={currentTime}
                        onChange={handleSeek}
                        className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="w-full flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm" onClick={isPlaying ? handlePause : handlePlay} className="p-1">
                                {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                            </Button>
                            <span className="text-xs text-white">
                                {formatTime(currentTime)} / {formatTime(duration)}
                            </span>
                        </div>
                        <div className="flex flex-row space-x-1">
                            <Button variant="outline" size="sm" onClick={handleCopyUrl} className="p-1">
                                <Copy className="w-3 h-3" />
                            </Button>
                            <Link href={brand.author.youtube} target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="sm" className="p-1">
                                    <Youtube className="w-3 h-3" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default VideoShow;