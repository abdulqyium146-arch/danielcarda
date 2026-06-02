import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  label?: string
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center' | 'right'
  light?: boolean
  id?: string
}

export function SectionHeader({
  label,
  title,
  subtitle,
  className,
  align = 'center',
  light = false,
  id,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12',
        align === 'center' && 'text-center',
        align === 'left' && 'text-left',
        align === 'right' && 'text-right',
        className
      )}
    >
      {label && (
        <span
          className={cn(
            'inline-block text-sm font-semibold uppercase tracking-widest mb-3',
            light ? 'text-gold-400' : 'text-gold-600'
          )}
        >
          {label}
        </span>
      )}
      <h2
        id={id}
        className={cn(
          'font-bold leading-tight',
          light ? 'text-white' : 'text-primary-950',
          'text-3xl md:text-4xl'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-lg max-w-2xl leading-relaxed',
            align === 'center' && 'mx-auto',
            light ? 'text-gray-300' : 'text-gray-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
