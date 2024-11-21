import { useEffect, useState } from "react";
import { UseOnVisibleProps } from "./use-on-visible.type";

export const useOnVisible: <T extends { length: number }>(
  props: UseOnVisibleProps<T>
) => boolean = ({ callback, ref, values }): boolean => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          callback();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current && !values.length) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, callback, values.length]);

  return isVisible;
};
