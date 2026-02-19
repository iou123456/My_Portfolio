import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'blue' | 'multi';
}

export function GradientText({ children, className, variant = 'default' }: GradientTextProps) {
  const gradientClasses = {
    default: 'bg-gradient-to-r from-accent-blue via-accent-magenta to-accent-amber',
    blue: 'bg-gradient-to-r from-accent-blue to-cyan-400',
    multi: 'bg-gradient-to-r from-accent-blue via-accent-magenta to-accent-amber',
  };

  return (
    <span
      className={cn(
        'bg-clip-text text-transparent',
        gradientClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
