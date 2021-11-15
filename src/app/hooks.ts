import * as React from 'react';

import { DeviceState, Size } from 'models/WindowModel';

export function useWindowSize(): {
  windowSize: Size;
  deviceState: DeviceState;
} {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = React.useState<Size>({
    width: undefined,
    height: undefined,
  });

  const [deviceState, setDeviceState] = React.useState<DeviceState>({
    isMobile: undefined,
    isTablet: undefined,
    isDesktop: undefined,
  });

  React.useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      const breakpointSm = 640;
      const breakpointMd = 768;
      const breakpointLg = 1024;
      const width = window.innerWidth;
      const height = window.innerWidth;
      // Set window width/height to state
      setWindowSize({
        width: width,
        height: height,
      });

      // Set device state
      setDeviceState({
        isMobile: width <= breakpointSm,
        isTablet: width >= breakpointMd && width <= breakpointLg,
        isDesktop: width >= breakpointLg,
      });
    }
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return { windowSize, deviceState };
}
