import { useState, useEffect, useRef, RefObject } from 'react';

type UseHoverReturn<T extends HTMLElement = HTMLElement> = {
  hovered: boolean;
  ref: RefObject<T>;
};

export const useHover = <T extends HTMLElement = HTMLElement>(): UseHoverReturn<T> => {
  const [hovered, setHovered] = useState(false);
  
  const ref = useRef<T>(null as unknown as T);

  const handleMouseEnter = (): void => {
    setHovered(true);
  };

  const handleMouseLeave = (): void => {
    setHovered(false);
  };


  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('mouseenter', handleMouseEnter);
      ref.current.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        ref.current?.removeEventListener('mouseenter', handleMouseEnter);
        ref.current?.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return {
    hovered,
    ref
  };
};
