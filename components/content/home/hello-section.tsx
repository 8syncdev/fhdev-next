import { brand } from '@/constants';
import React from 'react';

interface StatBlockProps {
  color: string;
  number: string;
  text: string;
}

interface VideoProps {
  src: string;
  poster: string;
}

const StatBlock: React.FC<StatBlockProps> = ({ color, number, text }) => {
  const getColorClass = (color: string): string => {
    switch (color) {
      case 'violet': return 'text-violet-500 dark:text-violet-60';
      case 'green': return 'text-green-600';
      case 'pink': return 'text-pink-500 dark:text-pink-540';
      case 'orange': return 'text-orange-400';
      default: return '';
    }
  };

  const getBgColorClass = (color: string): string => {
    switch (color) {
      case 'violet': return 'bg-violet-500';
      case 'green': return 'bg-green-600';
      case 'pink': return 'bg-pink-550';
      case 'orange': return 'bg-orange-400';
      default: return '';
    }
  };

  return (
    <div className="shadow-none border-[0.5px] border-blue-950 bg-blue-750 rounded-md relative">
      <div className="flex justify-center -translate-y-[0.5px]">
        <div className="w-3/4">
          <div className={`h-[0.5px] bg-gradient-to-r from-transparent via-${getBgColorClass(color)} to-transparent w-full`}></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center p-8">
        <p className={`font-bold mb-2 ${getColorClass(color)} text-2xl md:text-3xl lg:text-4xl`}>
          {number}
        </p>
        <p className="mb-0 leading-5 text-sm lg:text-base">{text}</p>
      </div>
    </div>
  );
};

const Video: React.FC<VideoProps> = ({ src, poster }) => {
  return (
    <div className="max-w-[725px] mx-auto px-3 w-full">
      <video 
        controls 
        src={src}
        poster={poster}
      />
    </div>
  );
};

const HelloSection: React.FC = () => {
  const stats: StatBlockProps[] = [
    { color: 'violet', number: '10M+', text: 'Học viên đã đào tạo' },
    { color: 'green', number: '4M', text: 'Người theo dõi trên YouTube' },
    { color: 'pink', number: '20+', text: 'Năm kinh nghiệm' },
    { color: 'orange', number: '51', text: 'Khóa học lập trình' },
  ];

  const videoProps: VideoProps = {
    src: "https://res.cloudinary.com/codewithmosh/video/upload/v1685377456/promo-videos/website-intro.mp4",
    poster: "https://res.cloudinary.com/codewithmosh/image/upload/v1684540564/promo-videos/poster-mosh.webp"
  };

  return (
    <section className="flex flex-col mb-10 my-5">
      <header className="my-12 mb-6 text-center">
        <p className="font-medium my-4 text-violet-500 dark:text-violet-75 text-sm tracking-widest uppercase">Chào bạn nhé,</p>
        <h2 className="text-3xl">Mình là {brand.author.name} (Founder of {brand.name})</h2>
      </header>
      <div className="flex flex-col items-center">
        <p className="mb-10 text-center max-w-[50ch] text-lg lg:text-xl lg:leading-8">
          Bạn đang cảm thấy bế tắc hoặc quá tải trong hành trình lập trình của mình? Đừng lo lắng, mình sẽ hỗ trợ bạn! Cùng nhau, chúng ta sẽ nâng cao kỹ năng, tăng tiềm năng thu nhập và xây dựng một tương lai tươi sáng hơn.
        </p>
        {/* <Video {...videoProps} /> */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 justify-center mx-auto my-20">
          {stats.map((stat, index) => (
            <StatBlock key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelloSection;
