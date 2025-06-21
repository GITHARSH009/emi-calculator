// hooks/useLazyAds.js
import { useEffect, useState, useRef } from 'react';

export const useLazyAds = () => {
  const [isVisible, setIsVisible] = useState(false);
  const adRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (adRef.current) {
      observer.observe(adRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return { isVisible, adRef };
};