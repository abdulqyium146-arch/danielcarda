import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StarRatingProps {
  rating: number
  maxRating?: number
  size?: 'sm' | 'md' | 'lg'
  showValue?: boolean
  className?: string
}

const sizes = {
  sm: 'w-3.5 h-3.5',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
}

export function StarRating({
  rating,
  maxRating = 5,
  size = 'md',
  showValue = false,
  className,
}: StarRatingProps) {
  return (
    <div className={cn('flex items-center gap-0.5', className)} aria-label={`${rating} out of ${maxRating} stars`}>
      {Array.from({ length: maxRating }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            sizes[size],
            i < Math.floor(rating) ? 'text-gold-400 fill-gold-400' : 'text-gray-300 fill-gray-200'
          )}
          aria-hidden="true"
        />
      ))}
      {showValue && (
        <span className="ml-1.5 text-sm font-semibold text-gray-700">{rating}</span>
      )}
    </div>
  )
}
