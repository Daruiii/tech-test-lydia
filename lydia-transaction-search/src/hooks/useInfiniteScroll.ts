import { useEffect, useState } from "react";

export const useInfiniteScroll = <T,>(
  items: T[],
  step = 10
) => {
  const [visibleCount, setVisibleCount] = useState(step);
  const [isLoading, setIsLoading] = useState(false);

  const visibleItems = items.slice(-visibleCount);

  useEffect(() => {
    const handleScroll = () => {
      const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;
      if (bottom && visibleCount < items.length && !isLoading) {
        setIsLoading(true);
        const currentScrollY = window.scrollY;
        
        setTimeout(() => {
          setVisibleCount((prev) => Math.min(prev + step, items.length));
          setIsLoading(false);
          
          requestAnimationFrame(() => {
            window.scrollTo(0, currentScrollY);
          });
        }, 800);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items.length, step, visibleCount, isLoading]);

  useEffect(() => {
    setVisibleCount(step);
  }, [items, step]);

  return { 
    visibleItems, 
    hasMore: visibleCount < items.length, 
    isLoading 
  };
};