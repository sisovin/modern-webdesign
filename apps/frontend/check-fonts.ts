// Start the server and check the font loading
// Run this with: npx tsx check-fonts.ts

import fs from 'fs';
import path from 'path';

// Function to check if all required font files exist
function checkFontFiles() {
  const fontsDir = path.join(process.cwd(), 'public', 'fonts');
  
  // List of required font files
  const requiredFonts = [
    'Inter-Regular.woff2',
    'Inter-Medium.woff2',
    'Inter-SemiBold.woff2',
    'Inter-Bold.woff2',
    'Poppins-Regular.woff2',
    'Poppins-Medium.woff2',
    'Poppins-SemiBold.woff2',
    'Poppins-Bold.woff2',
    'Poppins-Regular.woff',
    'Poppins-Medium.woff',
    'Poppins-SemiBold.woff',
    'Poppins-Bold.woff'
  ];
  
  // Check if directory exists
  if (!fs.existsSync(fontsDir)) {
    console.error('❌ Fonts directory does not exist!');
    return false;
  }
  
  let allFontsExist = true;
  
  // Check each required font
  for (const font of requiredFonts) {
    const fontPath = path.join(fontsDir, font);
    if (!fs.existsSync(fontPath)) {
      console.error(`❌ Missing font file: ${font}`);
      allFontsExist = false;
    } else {
      const stats = fs.statSync(fontPath);
      if (stats.size === 0) {
        console.error(`❌ Font file exists but is empty: ${font}`);
        allFontsExist = false;
      } else {
        console.log(`✅ Font file found: ${font} (${stats.size} bytes)`);
      }
    }
  }
  
  return allFontsExist;
}

// Run the check
const result = checkFontFiles();
console.log(result 
  ? '✅ All font files are present and valid!' 
  : '❌ Some font files are missing or invalid. See errors above.'
);

// Print instructions
console.log('\n--- NEXT STEPS ---');
console.log('1. Run the development server: pnpm dev');
console.log('2. Open http://localhost:3000 in your browser');
console.log('3. Check the browser console for font loading messages');
console.log('4. You can also test with the font-test.html page at http://localhost:3000/font-test.html');
