export const calculateSizes = (isSmall, isMobile, isTablet) => {
    
    return {
      deskScale: isSmall ? 0.5 : isMobile ? 0.6 : 0.65,
      deskPosition: isMobile ? [2, -2, 0] : [0,0, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 7, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      jsLogoPosition: isSmall ? [-2, 4, 0] : isMobile ? [-5, 10, 0] : isTablet ? [-15, 4, 0] : [-15, 5, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };