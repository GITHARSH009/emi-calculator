// components/GoogleAd.js
import React, { useEffect } from 'react';

const GoogleAd = ({ 
  adSlot, 
  adFormat = "auto", 
  fullWidthResponsive = true,
  style = { display: 'block' },
  className = ""
}) => {
  useEffect(() => {
    try {
      // Push ad to AdSense
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <div className={`ad-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive}
      />
    </div>
  );
};

export default GoogleAd;

// Different ad sizes components
export const BannerAd = ({ adSlot, className = "" }) => (
  <GoogleAd
    adSlot={adSlot}
    adFormat="horizontal"
    style={{ display: 'block', width: '100%', height: '90px' }}
    className={className}
  />
);

export const RectangleAd = ({ adSlot, className = "" }) => (
  <GoogleAd
    adSlot={adSlot}
    adFormat="rectangle"
    style={{ display: 'block', width: '300px', height: '250px' }}
    className={className}
  />
);

export const ResponsiveAd = ({ adSlot, className = "" }) => (
  <GoogleAd
    adSlot={adSlot}
    adFormat="auto"
    style={{ display: 'block' }}
    className={className}
  />
);

// Hook for lazy loading ads
export const useLazyAd = () => {
  useEffect(() => {
    const loadAds = () => {
      if (window.adsbygoogle && window.adsbygoogle.loaded) {
        return;
      }
      
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
    };

    // Load ads when component mounts
    loadAds();
  }, []);
};