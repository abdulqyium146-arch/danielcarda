import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'emergency' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  asChild?: boolean
}

const variants = {
  primary: 'bg-gold-500 hover:bg-gold-400 text-primary-950 font-bold shadow-md hover:shadow-glow-gold',
  secondary: 'bg-primary-900 hover:bg-primary-800 text-white font-bold',
  emergency: 'bg-emergency-600 hover:bg-emergency-700 text-white font-bold shadow-emergency',
  outline: 'border-2 border-primary-900 text-primary-900 hover:bg-primary-50 font-bold',
  ghost: 'text-primary-900 hover:bg-gray-100 font-medium',
}

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-lg gap-1.5',
  md: 'px-5 py-2.5 text-base rounded-lg gap-2',
  lg: 'px-6 py-3 text-base rounded-xl gap-2',
  xl: 'px-8 py-4 text-lg rounded-xl gap-2.5',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center transition-all duration-200 whitespace-nowrap active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
