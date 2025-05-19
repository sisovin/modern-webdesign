export const PlaceholderSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <rect width="800" height="600" fill="#f5f5f5"/>
  <text x="400" y="300" font-family="Arial" font-size="30" fill="#aaa" text-anchor="middle">Image Placeholder</text>
  <path d="M300,250 L500,250 L500,350 L300,350 Z" fill="none" stroke="#ccc" stroke-width="2"/>
  <circle cx="400" cy="200" r="30" fill="#ddd"/>
  <path d="M370,290 L430,290 L400,330 Z" fill="#ddd"/>
</svg>
`;

export function createPlaceholderDataURL() {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(PlaceholderSVG)}`;
}

export default createPlaceholderDataURL;
