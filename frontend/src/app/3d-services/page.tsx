import React from 'react';
import OurExpertise from '@/components/OurExpertise';

export const metadata = {
  title: '3D Services | VEKTOR3D SYSTEMS',
  description: 'Comprehensive 3D printing, scanning, repair and modelling services.', // SEO Best Practice
};

export default function ThreeDServices() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <OurExpertise />
    </div>
  );
}
