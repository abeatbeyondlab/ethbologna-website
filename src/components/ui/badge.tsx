import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
        outline: 'text-foreground',
        success:
          'border-transparent bg-emerald-500 text-white hover:bg-emerald-600',
        warning:
          'border-transparent bg-orange-500 text-white hover:bg-orange-600',
        sky: 'border-transparent bg-sky-500 text-white hover:bg-sky-600',
        blue: 'border-transparent bg-blue-500 text-white hover:bg-blue-600',
        indigo:
          'border-transparent bg-indigo-500 text-white hover:bg-indigo-600',
        cyan: 'border-transparent bg-cyan-500 text-white hover:bg-cyan-600',
        lightBlue:
          'border-transparent bg-blue-400 text-white hover:bg-blue-500',
        slate: 'border-transparent bg-slate-500 text-white hover:bg-slate-600',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
