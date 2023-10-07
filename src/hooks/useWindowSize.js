import { useEffect, useState } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    widthWindow: 0,
    heightWindow: 0,
  });

  useEffect(() => {
    const handleSizeWindow = () => {
      setWindowSize({
        widthWindow: window.innerWidth,
        heightWindow: window.innerHeight,
      });
    };

    handleSizeWindow();
  }, []);
}
