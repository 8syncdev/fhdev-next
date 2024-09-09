import React from 'react';
import Image from 'next/image';
import { BlurDeco } from '@/components/shared';
import { featureIcon1, featureIcon2, featureIcon3, featureIcon4, featureIcon5 } from '@/constants/image';
import { ClockSvg, VideoSvg, WrenchSvg, GlobeSvg, UsersSvg } from '@/components/svg';

interface FeatureIconProps {
    children: React.ReactNode;
    bgColor?: string;
    iconColor?: string;
}

const FeatureIcon: React.FC<FeatureIconProps> = ({ children, bgColor = 'bg-blue-800', iconColor = 'text-violet-60' }) => (
    <div className={`grid place-items-center w-12 h-12 rounded-full my-3 ${bgColor}`}>
        <div className={iconColor}>
            {children}
        </div>
    </div>
);

interface FeatureTextProps {
    title: string;
    subtitle: string;
    description: string;
    titleColor?: string;
}

const FeatureText: React.FC<FeatureTextProps> = ({ title, subtitle, description, titleColor = 'text-violet-60' }) => (
    <>
        <span className={`${titleColor} mb-3 inline-block font-medium md:font-semibold`}>{title}</span>
        <h2 className="text-3xl mb-3 text-white">{subtitle}</h2>
        <p>{description}</p>
    </>
);

interface FeatureImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
}

const FeatureImage: React.FC<FeatureImageProps> = ({ src, alt, width, height, className }) => (
    <div className="flex justify-center">
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
        />
    </div>
);

interface Feature {
    icon: (iconColor: string) => React.ReactNode;
    title: string;
    subtitle: string;
    description: string;
    image: {
        src: string;
        alt: string;
        width: number;
        height: number;
        className?: string;
    };
    iconBgColor?: string;
    iconColor?: string;
    titleColor?: string;
    reverse?: boolean;
}

interface FeatureItemProps {
    feature: Feature;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ feature }) => (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 my-10 items-center ${feature.reverse ? 'md:flex-row-reverse' : ''}`}>
        <div className="md:mx-4">
            <FeatureIcon bgColor={feature.iconBgColor} iconColor={feature.iconColor}>{feature.icon(feature.iconColor || '')}</FeatureIcon>
            <FeatureText title={feature.title} subtitle={feature.subtitle} description={feature.description} titleColor={feature.titleColor} />
        </div>
        <div className={feature.reverse ? 'md:order-first' : ''}>
            <FeatureImage {...feature.image} />
        </div>
    </div>
);

interface FeaturesSectionProps {
    features: Feature[];
    sectionTitle?: string;
    sectionSubtitle?: string;
}

export const features: Feature[] = [
    {
        icon: (iconColor: string) => <ClockSvg className={iconColor} />,
        title: "Đẩy nhanh quá trình học tập của bạn",
        subtitle: "Không có thông tin thừa, chỉ có những điều cần thiết!",
        description: "Khóa học của mình đi thẳng vào trọng tâm, không lan man. Bạn sẽ học những kiến thức thiết yếu, được giải thích đơn giản và dễ hiểu. Không có thuật ngữ phức tạp, chỉ có những gì bạn thực sự cần để thành công trong lập trình.",
        image: {
            src: featureIcon1.src,
            alt: "Không có thông tin thừa",
            width: 1180,
            height: 873,
            className: "w-4/5 md:w-5/6 lg:pt-4 xl:w-3/4"
        },
        iconBgColor: "bg-purple-800/20",
        iconColor: "text-purple-500",
        titleColor: "text-purple-400"
    },
    {
        icon: (iconColor: string) => <VideoSvg className={iconColor} />,
        title: "Bài học từng bước",
        subtitle: "Bài học dễ theo dõi",
        description: "Mình biết việc học lập trình có thể khó khăn. Vì vậy, mình đã cẩn thận tổ chức các khóa học của mình thành những phần nhỏ, đơn giản để giúp bạn tiến bộ một cách suôn sẻ, từng bước một. Mình sẽ hướng dẫn bạn qua từng bước để bạn không cảm thấy quá tải.",
        image: {
            src: featureIcon2.src,
            alt: "Bài học từng bước",
            width: 906,
            height: 701,
            className: "w-4/5 md:w-5/6 md:pt-20 xl:w-3/4"
        },
        iconBgColor: "bg-pink-800/20",
        iconColor: "text-pink-500",
        titleColor: "text-pink-400",
        reverse: true
    },
    {
        icon: (iconColor: string) => <WrenchSvg className={iconColor} />,
        title: "Học thực hành",
        subtitle: "Kết hợp hoàn hảo giữa lý thuyết và thực hành",
        description: "Mình tin rằng cách học tốt nhất là thông qua thực hành. Đó là lý do tại sao các khóa học của mình dạy bạn lý thuyết cần thiết và cung cấp các bài tập thực hành. Bạn sẽ có cơ hội thực hành mọi thứ bạn học và áp dụng vào các tình huống thực tế.",
        image: {
            src: featureIcon3.src,
            alt: "Học thực hành",
            width: 906,
            height: 701,
            className: "w-3/4 md:w-2/3 md:pt-16 xl:w-2/3"
        },
        iconBgColor: "bg-green-800/20",
        iconColor: "text-green-500",
        titleColor: "text-green-400"
    },
    {
        icon: (iconColor: string) => <GlobeSvg className={iconColor} />,
        title: "Chuẩn bị cho việc làm",
        subtitle: "Dự án thực tế",
        description: "Khóa học của mình được thiết kế để chuẩn bị bạn cho việc làm thực tế và phỏng vấn. Với các khóa học sâu sắc, đầy đủ và được đóng gói với các ví dụ và bài tập thực tế, bạn sẽ sẵn sàng đối mặt với bất kỳ thách thức nào.",
        image: {
            src: featureIcon4.src,
            alt: "Dự án thực tế",
            width: 906,
            height: 701,
            className: "w-3/4 md:w-2/3 md:pt-16 xl:w-2/3"
        },
        iconBgColor: "bg-yellow-800/20",
        iconColor: "text-yellow-400",
        titleColor: "text-yellow-300",
        reverse: true
    },
    {
        icon: (iconColor: string) => <UsersSvg className={iconColor} />,
        title: "Từ người mới bắt đầu đến người chuyên nghiệp",
        subtitle: "Khóa học cho mọi người",
        description: "Dù bạn là người mới bắt đầu hay đã có kinh nghiệm, mình đều có khóa học phù hợp với bạn. Mình cung cấp nhiều khóa học để bạn có thể chọn lựa những khóa học phù hợp với bạn. Hơn nữa, mình đảm bảo khóa học của mình sẽ thú vị và không khiến bạn chán ngán.",
        image: {
            src: featureIcon5.src,
            alt: "Khóa học cho mọi người",
            width: 906,
            height: 701,
            className: "w-3/4 md:w-2/3 md:pt-16 xl:w-2/3"
        },
        iconBgColor: "bg-cyan-800/20",
        iconColor: "text-cyan-400",
        titleColor: "text-cyan-300",
        reverse: false
    },
];

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features, sectionTitle = 'Đặc điểm nổi bật', sectionSubtitle = 'Tại sao học lập trình với mình?' }) => {
    return (
        <section className="flex flex-col mb-10 my-5 relative">
            <BlurDeco brightness={10} variant='gradient' />
            <div className="my-12 mb-6 text-center">
                <p className="font-medium my-4 text-violet-500 dark:text-violet-75 text-sm tracking-widest uppercase">{sectionTitle}</p>
                <h2 className="text-3xl">{sectionSubtitle}</h2>
            </div>
            <div className="container">
                {features.map((feature, index) => (
                    <FeatureItem key={index} feature={feature} />
                ))}
            </div>
        </section>
    );
};

export default FeaturesSection;
