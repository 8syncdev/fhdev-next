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
      <IntroSection />
      <HelloSection />
      <FeaturesSection features={features} />
      <TopSellingSection />
      <ReviewSection />
      <SavingSection />
    </>
  );
};

export default AllSection;

