import React from 'react';
import Image from 'next/image';
import { CheckIcon, LearningSvg } from '@/components/svg';

interface PriceTagProps {
  price: string;
  description: string;
}

const PriceTag: React.FC<PriceTagProps> = ({ price, description }) => (
  <div className="flex flex-col items-center" data-testid="price-tag">
    <div>
      <span className="font-bold text-4xl text-primary">{price}</span>
    </div>
    <div className="uppercase text-sm font-medium tracking-wider dark:text-white">{description}</div>
  </div>
);

interface FeatureListProps {
  features: string[];
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => (
  <ul className="mb-8 space-y-4 text-left">
    {features.map((item, index) => (
      <li key={index} className="flex flex-row items-start space-x-3">
        <div>
          <CheckIcon className="w-5 h-5 inline flex-shrink-0 text-white stroke-2" />
        </div>
        <span className="font-medium md:font-semibold text-white">{item}</span>
      </li>
    ))}
  </ul>
);

interface SubscribeButtonProps {
  text: string;
  href: string;
}

const SubscribeButton: React.FC<SubscribeButtonProps> = ({ text, href }) => (
  <a
    className="group inline-block px-6 py-3 text-sm no-underline uppercase text-center text-white tracking-wider font-medium md:font-semibold rounded-full bg-gradient-to-r from-pink-500 to-violet-600 transition-all duration-200 ease-out hover:text-white hover:no-underline undefined"
    role="button"
    href={href}
  >
    {text}
  </a>
);

interface SavingSectionProps {
  price?: string;
  description?: string;
  features?: string[];
  buttonText?: string;
  buttonHref?: string;
}

const SavingSection: React.FC<SavingSectionProps> = ({
  price = "799.000đ",
  description = "mỗi tháng",
  features = [
    "Truy cập toàn bộ khóa học",
    "Tài liệu biên soạn mới",
    "Sách tiếng Anh chuyên ngành song ngữ",
    "Hỗ trợ 24/7",
    "Đảm bảo hoàn tiền trong 30 ngày"
  ],
  buttonText = "Đăng Ký Ngay",
  buttonHref = "#"
}) => {
  return (
    <section className="container flex justify-center my-32">
      <div className="relative w-full md:max-w-[450px]" role="enrollment-card">
        <div className="absolute -top-10 -left-3 md:-top-8 md:-left-3 lg:-left-10 lg:-top-12 w-24 z-10">
          <LearningSvg className='w-full h-full text-violet-500' />
        </div>
        <div className="border-blue-950 border-x border-b transition-colors duration-200 ease-in-out overflow-hidden rounded-lg relative">
          <div className="w-full flex justify-center">
            <div className="w-3/4">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full"></div>
            </div>
            <div className="absolute top-0 -translate-y-1/3 w-3/4">
              <div
                style={{
                  width: '100%',
                  maxWidth: '100%',
                  aspectRatio: '1',
                  opacity: '0.2'
                }}
                className="bg-violet-100 rounded-full filter blur-3xl"
              ></div>
            </div>
          </div>
          <div className="px-6 md:px-8 lg:px-12 py-12 flex flex-col items-center">
            <PriceTag price={price} description={description} />
            <div className="mt-10 w-full">
              <FeatureList features={features} />
            </div>
            <SubscribeButton text={buttonText} href={buttonHref} />
            <p className="my-2 text-sm font-semibold">Tư vấn miễn phí!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingSection;
