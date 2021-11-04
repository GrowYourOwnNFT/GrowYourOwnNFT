import React from 'react';
import ContentDisabled from '@/Content/Disabled';
//import ContentAbout from '@/Content/About';
import AppLayout from '@/Layouts/AppLayout';

export default function About() {
  return (
    <AppLayout
      title="About Grow Your Own NFT"
      renderHeader={() => (
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          About Grow Your Own NFT
        </h2>
      )}
    >
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
            <ContentDisabled />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
