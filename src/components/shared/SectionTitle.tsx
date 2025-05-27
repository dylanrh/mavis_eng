import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

interface SectionTitleProps {
  icon?: LucideIcon;
  children: ReactNode;
  className?: string;
}

export function SectionTitle({ icon: Icon, children, className }: SectionTitleProps) {
  return (
    <h2 className={cn("text-3xl font-bold text-primary mb-6 flex items-center gap-3 text-center justify-center sm:text-4xl", className)}>
      {Icon && <Icon className="w-8 h-8" />}
      {children}
    </h2>
  );
}
