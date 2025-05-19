// Font loading monitor
export const monitorFontLoading = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return; // Skip on server-side rendering
  }

  // Wait for document to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFontMonitor);
  } else {
    initFontMonitor();
  }
};

function initFontMonitor() {
  // List of fonts to monitor
  const fontsToCheck = [
    { family: 'Inter', weight: 400 },
    { family: 'Inter', weight: 500 },
    { family: 'Inter', weight: 600 },
    { family: 'Inter', weight: 700 },
    { family: 'Poppins', weight: 400 },
    { family: 'Poppins', weight: 500 },
    { family: 'Poppins', weight: 600 },
    { family: 'Poppins', weight: 700 },
  ];

  // Debug mode - set to true to see console output
  const DEBUG = true;

  // Check when fonts are loaded
  document.fonts.ready.then(() => {
    if (DEBUG) console.log('All document fonts loaded!');
    
    // Check each font individually
    fontsToCheck.forEach(font => {
      const { family, weight } = font;
      const isLoaded = document.fonts.check(`${weight} 1em "${family}"`);
      
      if (DEBUG) {
        console.log(`Font ${family} (weight: ${weight}): ${isLoaded ? 'Loaded ✅' : 'Failed to load ❌'}`);
      }
    });
  });

  // Listen for font loading events
  document.fonts.addEventListener('loading', () => {
    if (DEBUG) console.log('Font loading started');
  });

  document.fonts.addEventListener('loadingdone', () => {
    if (DEBUG) console.log('Font loading completed');
  });

  document.fonts.addEventListener('loadingerror', (event) => {
    if (DEBUG) console.error('Font loading error:', event);
  });
}

export default monitorFontLoading;
