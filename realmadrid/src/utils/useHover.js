import { useEffect, useState, useRef } from 'react';

const useHover = () => {
  const [IsHover, setIsHove] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const element = elementRef.current;
    const handleMouseEnter = () => {
      setIsHove(true);
    };
    const handleLeaveEnter = () => {
      setIsHove(false);
    };

    element.addEventListenner('mouseenter', handleMouseEnter);
    element.addEventListenner('mouseleave', handleLeaveEnter);

    return () => {
      element.removeEventListenner('mouseenter', handleMouseEnter);
      element.removeEventListenner('mouseleave', handleLeaveEnter);
    };
  }, []);

  return [elementRef, IsHover];
};

export default useHover;
