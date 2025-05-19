/**
 * Tailwind CSS utility classes that match the original template design
 * These can be imported and used in your React components
 */

// Button styles
export const buttonClasses = {
  base: "font-medium transition-all duration-500",
  primary: "bg-[#009CFF] text-white hover:bg-[#0081d5]",
  square: "w-[38px] h-[38px] p-0 flex items-center justify-center font-normal",
  smSquare: "w-[32px] h-[32px] p-0 flex items-center justify-center font-normal",
  lgSquare: "w-[48px] h-[48px] p-0 flex items-center justify-center font-normal",
};

// Navbar styles
export const navbarClasses = {
  base: "sticky top-0 z-[99] py-3 transition-all duration-500",
  link: "mr-[30px] py-5 px-0 text-white font-medium outline-none hover:text-[#252525] active:text-[#252525]",
  dropdown: "relative",
  dropdownMenu: "block invisible absolute w-[250px] top-full transform origin-top transition-all duration-500 opacity-0 bg-white shadow-lg rounded-lg py-2",
  dropdownItem: "block px-4 py-2 text-gray-800 hover:bg-gray-100",
  mobileNav: "sm:hidden",
};

// Section styles
export const sectionClasses = {
  base: "py-16",
  title: "relative inline-block uppercase after:absolute after:content-[''] after:w-[calc(100%+120px)] after:h-[2px] after:bottom-[4px] after:left-[-60px] after:bg-[#009CFF] after:-z-[1] before:absolute before:content-[''] before:w-[calc(100%+80px)] before:h-[2px] before:top-[4px] before:left-[-40px] before:bg-[#009CFF] before:-z-[1]",
  titleStart: "relative inline-block uppercase text-left after:absolute after:content-[''] after:w-[calc(100%+60px)] after:h-[2px] after:bottom-[4px] after:left-0 after:bg-[#009CFF] after:-z-[1] before:absolute before:content-[''] before:w-[calc(100%+40px)] before:h-[2px] before:top-[4px] before:left-0 before:bg-[#009CFF] before:-z-[1]",
};

// Carousel styles
export const carouselClasses = {
  base: "relative overflow-hidden",
  item: "relative w-full",
  caption: "absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center bg-black/50 z-[1]",
  control: "w-[10%] h-full absolute top-0 flex items-center justify-center text-white text-2xl transition-all duration-300 hover:bg-black/20",
  controlPrev: "left-0",
  controlNext: "right-0",
  indicators: "absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-[2]",
  indicator: "w-[60px] h-[60px] border-2 border-white rounded-[60px] overflow-hidden cursor-pointer",
};

// Service item styles
export const serviceClasses = {
  item: "shadow-[0_0_45px_rgba(0,0,0,.07)] border border-transparent transition-all duration-500 hover:-translate-y-[10px] hover:shadow-none hover:border-[#DEE2E6] bg-white rounded-lg p-6",
  icon: "text-5xl text-[#009CFF] mb-4",
  title: "text-xl font-semibold mb-3",
  description: "text-[#777777]",
};

// Project item styles
export const projectClasses = {
  item: "relative overflow-hidden rounded-md group",
  image: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
  overlay: "absolute w-full h-full top-0 left-0 flex items-center justify-center text-white bg-black/50 rounded-md opacity-0 transition-opacity duration-500 group-hover:opacity-100",
};

// Team member styles
export const teamClasses = {
  item: "shadow-[0_0_45px_rgba(0,0,0,.07)] bg-white rounded-lg overflow-hidden",
  image: "w-full",
  text: "relative h-[65px] overflow-hidden",
  title: "absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center transition-all duration-500 group-hover:-translate-y-[65px]",
  social: "absolute w-full h-full top-[65px] left-0 flex items-center justify-center bg-white transition-all duration-500 group-hover:translate-y-[-65px]",
  socialIcon: "mx-[3px] text-[#009CFF] hover:text-white hover:bg-[#009CFF]",
};

// Facts counter styles
export const factClasses = {
  item: "transition-all duration-500 hover:-translate-y-[10px] hover:bg-white hover:shadow-[0_0_45px_rgba(0,0,0,.07)] p-6 rounded-lg text-center",
  icon: "text-[#009CFF] text-4xl mb-3",
  counter: "text-3xl font-bold mb-2",
  title: "text-[#777777] uppercase",
};

// Footer styles
export const footerClasses = {
  base: "bg-[#252525] text-[#777777] pt-16 pb-0",
  title: "text-white text-lg font-semibold mb-4",
  link: "block mb-[5px] p-0 text-left text-[#777777] font-normal capitalize transition-all duration-300 hover:text-[#009CFF] hover:tracking-wider before:content-['\f105'] before:font-['Font_Awesome_5_Free'] before:font-bold before:text-[#777777] before:mr-[10px]",
  copyright: "py-[25px] text-[15px] border-t border-t-white/10 text-white",
};

// Image with border effect
export const imageBorderClasses = {
  container: "relative h-full min-h-[400px]",
  border: "absolute top-0 left-0 right-12 bottom-12 border-[5px] border-[#009CFF] rounded-md",
  image: "absolute top-12 left-12 w-[calc(100%-3rem)] h-[calc(100%-3rem)] object-cover rounded-md",
};

// Back to top button
export const backToTopClasses = "fixed hidden right-[30px] bottom-[30px] z-[99] w-[48px] h-[48px] bg-[#009CFF] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#0081d5] transition-all duration-300";
