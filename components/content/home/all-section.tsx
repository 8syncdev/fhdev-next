import React from 'react';
import {
  IntroSection,
  HelloSection,
  FeaturesSection,
  TopSellingSection,
  ReviewSection,
  SavingSection
} from './index';
import { features } from './features-section';

const AllSection: React.FC = () => {
  return (
    <>
      <SavingSection />
      <IntroSection />
      <HelloSection />
      <FeaturesSection features={features} />
      <TopSellingSection />
      <ReviewSection />
    </>
  );
};

export default AllSection;

