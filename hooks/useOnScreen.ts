import { useState, useEffect, useRef, MutableRefObject } from 'react';

interface UseOnScreenOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export const useOnScreen = <T extends Element,>(
  options?: UseOnScreenOptions
): [MutableRefObject<T | null>, boolean] => {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const { triggerOnce = false, ...observerOptions } = options || {};

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (triggerOnce) {
          observer.unobserve(entry.target);
        }
      } else {
        if (!triggerOnce) {
          setIsVisible(false);
        }
      }
    }, observerOptions);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return [ref, isVisible];
};
