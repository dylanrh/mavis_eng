import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

export function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <div className={cn("max-w-5xl mx-auto py-8 sm:py-12 animate-fadeIn", className)}>
      {children}
    </div>
  );
}

// Add fadeIn animation to globals.css or tailwind.config.js if not already present
// Example for tailwind.config.js:
// theme: {
//   extend: {
//     animation: {
//       fadeIn: 'fadeIn 0.5s ease-in-out',
//     },
//     keyframes: {
//       fadeIn: {
//         '0%': { opacity: '0' },
//         '100%': { opacity: '1' },
//       },
//     },
//   },
// },
