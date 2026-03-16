import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'blue' | 'multi';
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span className={cn('text-accent-warm', className)}>
      {children}
    </span>
  );
}
