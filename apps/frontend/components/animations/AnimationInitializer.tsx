"use client"

import { useWowAnimation } from '@/hooks/useWowAnimation';

export default function AnimationInitializer() {
  // Initialize the WOW animation effect
  useWowAnimation();
  
  // This component doesn't render anything
  return null;
}
