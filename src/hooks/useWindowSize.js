import { useEffect, useState, useRef } from 'react';

const useWindowSize = () => {
  const querys = useRef();
  querys.current = [1440, 1024, 768, 414, 360];

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    screen: querys.current.reduce(function (prev, curr) {
      return Math.abs(curr - window.innerWidth) <
        Math.abs(prev - window.innerWidth)
        ? curr
        : prev;
    }),
  });

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      const screen = querys.current.reduce(function (prev, curr) {
        return Math.abs(curr - window.innerWidth) <
          Math.abs(prev - window.innerWidth)
          ? curr
          : prev;
      });

      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        screen,
      });
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
};

export default useWindowSize;