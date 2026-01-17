import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered animations using Intersection Observer
 * @param {Object} options - Intersection Observer options
 * @returns {Array} - [ref, isVisible] - ref to attach to element and visibility state
 */
export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Once visible, stop observing (animation only happens once)
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      }
    }, {
      threshold: 0.1,
      ...options
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
};

/**
 * Hook for animating multiple children with stagger effect
 * @param {number} childCount - Number of children to animate
 * @param {Object} options - Intersection Observer options
 * @returns {Array} - [ref, visibleIndices] - ref for container and array of visible child indices
 */
export const useStaggerAnimation = (childCount, options = {}) => {
  const ref = useRef(null);
  const [visibleIndices, setVisibleIndices] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // Stagger the animations
        for (let i = 0; i < childCount; i++) {
          setTimeout(() => {
            setVisibleIndices(prev => [...prev, i]);
          }, i * 100); // 100ms delay between each item
        }
        // Stop observing once animation starts
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      }
    }, {
      threshold: 0.1,
      ...options
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [childCount]);

  return [ref, visibleIndices];
};
