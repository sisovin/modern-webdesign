"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface AvatarDropdownProps {
  imageUrl?: string;
  fallback?: string;
  menuItems: {
    Icon?: React.ReactNode;
    label: string;
    href: string;
  }[];
  className?: string;
}

const CustomAvatar: React.FC<{
  imageUrl?: string;
  fallback?: string;
  className?: string;
}> = ({ imageUrl, fallback = 'U', className }) => {
  const [imageError, setImageError] = useState(false);
  
  return (
    <div className={cn(
      "relative w-8 h-8 rounded-full overflow-hidden border-2 border-white flex items-center justify-center bg-primary text-white",
      className
    )}>
      {!imageError && imageUrl ? (
        <img 
          src={imageUrl} 
          alt="User avatar" 
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <span className="text-sm font-medium">{fallback}</span>
      )}
    </div>
  );
};

export const AvatarDropdown: React.FC<AvatarDropdownProps> = ({
  imageUrl,
  fallback = 'U',
  menuItems,
  className,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.avatar-dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className={cn("avatar-dropdown-container relative", className)}>      
      <button 
        type="button"
        onClick={toggleDropdown} 
        className="flex items-center focus:outline-none"
        aria-label="Open user menu" 
        aria-haspopup="true"
        {...(isDropdownOpen ? {'aria-expanded': true} : {'aria-expanded': false})}
      >
        <CustomAvatar imageUrl={imageUrl} fallback={fallback} />
      </button>
      
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden z-50 animate-in fade-in duration-200">
          <div className="px-4 py-2 font-medium text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-gray-700">
            My Account
          </div>
          <div className="h-[1px] bg-gray-100 dark:bg-gray-700"></div>          {menuItems.map((item, index) => (
            <a 
              key={index}
              href={item.href}
              className="flex items-center gap-2 px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-700 last:border-none"
            >
              {item.Icon && (
                <span className="flex-shrink-0 text-gray-500 dark:text-gray-400">
                  {item.Icon}
                </span>
              )}
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
