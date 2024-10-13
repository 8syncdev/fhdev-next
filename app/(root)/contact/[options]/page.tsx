import React from 'react';
import { notFound } from 'next/navigation';
import RegComboCourse from './_components/reg-combo-course';

interface ContactPageProps {
  params: {
    options: string;
  };
}

const ContactPage: React.FC<ContactPageProps> = ({ params }) => {
  const { options } = params;

  if (options === 'reg-combo-course') {
    return <RegComboCourse />;
  }

  return notFound();
};

export default ContactPage;
