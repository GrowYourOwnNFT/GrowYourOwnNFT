import React from 'react';
import ContentSupport from '@/Content/Support';
import AppLayout from '@/Layouts/AppLayout';

export default function Support() {
  return (
    <AppLayout
      title="Support Services"
      renderHeader={() => (
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Support Services
        </h2>
      )}
    >
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
            <ContentSupport />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
