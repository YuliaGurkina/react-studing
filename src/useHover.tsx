import { useState, useEffect, useRef, RefObject, useCallback } from 'react';

type UseHoverReturn<T extends HTMLElement = HTMLElement> = {
  hovered: boolean;
  ref: RefObject<T | null>;
};

export const useHover = <T extends HTMLElement = HTMLElement>(): UseHoverReturn<T> => {
  const [hovered, setHovered] = useState(false);
  
  const ref = useRef<T | null>(null);

  const handleMouseEnter = useCallback(() => setHovered(true), []);
  const handleMouseLeave = useCallback(() => setHovered(false), []);


  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('mouseenter', handleMouseEnter);
      ref.current.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        ref.current?.removeEventListener('mouseenter', handleMouseEnter);
        ref.current?.removeEventListener('mouseleave', handleMouseLeave);
      };
    }

    return undefined;
  }, []);

  return {
    hovered,
    ref
  };
};
