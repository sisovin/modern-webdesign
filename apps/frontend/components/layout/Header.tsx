"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import AnimationWrapper from '../animations/AnimationWrapper';
import { AvatarDropdown } from '@/components/ui/avatar-dropdown';
import { 
  SunIcon, 
  MoonIcon, 
  UserIcon, 
  CreditCardIcon, 
  User2Icon, 
  PackageIcon, 
  SettingsIcon, 
  LogOutIcon 
} from '@/components/ui/icons';

// Menu items from the original template
const menuItems = [
  { title: 'Home', href: '/', active: true },
  { title: 'About Us', href: '/about' },
  { title: 'Services', href: '/service' },
  { title: 'Projects', href: '/project' },
  { 
    title: 'Pages',
    href: '#',
    dropdown: true,
    items: [
      { title: 'Features', href: '/feature' },
      { title: 'Our Team', href: '/team' },
      { title: 'Testimonial', href: '/testimonial' },
      { title: '404 Page', href: '/404' },
    ]
  },
  { title: 'Contact Us', href: '/contact' },
];

// Avatar dropdown menu items
const avatarMenuItems = [
  { Icon: <UserIcon className="h-4 w-4" />, label: 'Profile', href: '/profile' },
  { Icon: <CreditCardIcon className="h-4 w-4" />, label: 'Billing', href: '/billing' },
  { Icon: <User2Icon className="h-4 w-4" />, label: 'Team', href: '/team' },
  { Icon: <PackageIcon className="h-4 w-4" />, label: 'Subscription', href: '/subscription' },
  { Icon: <SettingsIcon className="h-4 w-4" />, label: 'Settings', href: '/settings' },
  { Icon: <LogOutIcon className="h-4 w-4" />, label: 'Logout', href: '/logout' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Make sure the component is mounted to prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (title: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <AnimationWrapper animation="fadeIn" delay={100}>      <nav className={cn(
        "sticky top-0 z-50 bg-primary dark:bg-gray-900 py-lg-0 px-lg-5 wow fadeIn",
        isScrolled 
          ? "py-2 shadow-md" 
          : "py-3 lg:py-0"
      )}>
        <div className="container-fluid bg-primary dark:bg-gray-900 px-4 lg:px-5 mx-auto flex items-center justify-between">
          {/* Mobile Brand - shown only on mobile */}
          <a href="/" className="text-xl font-semibold text-white ms-3 md:hidden">
            MENU
          </a>
          
          {/* Mobile Toggle Button */}
          <button 
            type="button" 
            className="text-white bg-transparent border-0 md:hidden me-3"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
          
          {/* Navigation Links */}
          <div className={cn(
            "w-full flex-grow lg:flex lg:items-center lg:w-auto",
            isOpen ? "block" : "hidden md:block"
          )}>            
            {/* Main Nav Items */}
            <div className="me-auto p-3 lg:p-0">
              <ul className="flex flex-col md:flex-row">
                {menuItems.map((item) => (
                  <li key={item.title} className="relative">
                    {item.dropdown ? (
                      <div className="dropdown-container relative">
                        <button 
                          onClick={(e) => toggleDropdown(item.title, e)}
                          className="flex items-center text-white font-medium py-2 lg:py-[25px] px-3 lg:px-4 hover:opacity-80 focus:outline-none"
                        >
                          {item.title}
                          <span className={cn(
                            "ml-1 transition-transform duration-200",
                            activeDropdown === item.title ? "rotate-180" : "rotate-0"
                          )}>▼</span>
                        </button>
                        
                        {activeDropdown === item.title && (
                          <div className="absolute top-full left-0 bg-white min-w-[10rem] shadow-md z-10 rounded-md overflow-hidden animate-in fade-in duration-200">
                            {item.items?.map((subItem) => (
                              <a 
                                key={subItem.title}
                                href={subItem.href}
                                className="block py-2.5 px-4 text-sm no-underline text-gray-700 hover:bg-gray-100 border-b border-gray-100 last:border-none"
                              >
                                {subItem.title}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <a 
                        href={item.href}
                        className={cn(
                          "block text-white font-medium py-2 lg:py-[25px] px-3 lg:px-4 hover:opacity-80 transition-all",
                          item.active && "text-white font-bold"
                        )}
                      >
                        {item.title}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Theme Switcher and Avatar with Dropdown-menu */}
            <div className="flex items-center gap-4 p-3 lg:p-0">            {/* Theme Switcher */}
              <button 
                className="text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-primary-dark focus:outline-none"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {mounted && (
                  theme === 'dark' ? 
                    <SunIcon className="h-5 w-5" /> : 
                    <MoonIcon className="h-5 w-5" />
                )}
              </button>
              {/* Avatar Dropdown */}
              <AvatarDropdown 
                menuItems={avatarMenuItems}
                imageUrl="https://avatars.githubusercontent.com/u/9347735?s=400&u=5ea95262dbfe0d02f5a9c199039c2872583e9514&v=4" 
                fallback="U"
              />
            </div>
          </div>
        </div>
      </nav>
    </AnimationWrapper>
  );
};

export default Header;

