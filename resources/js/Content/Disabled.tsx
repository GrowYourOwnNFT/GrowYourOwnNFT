import React from 'react';

export default function ContentDisabled() {
  return (
    <div>
      <div className="p-6 sm:px-20 bg-white border-b border-gray-200">
        
        <div className="mt-8 text-2xl">
        Temporarily Disabled
        </div>

        <div className="mt-6 text-gray-500">
            <p className="text-center">Were currently working on our inner content technologies, <br /> this page has been temporarily disabled.</p>
            <p className="text-center">Please contact us at <a className="route-link" href="mailto:Bud@GrowYourOwnNFT.IO">Bud@GrowYourOwnNFT.IO</a> if you have any questions.</p>         
        </div>
      </div>
    </div>
  );
}
