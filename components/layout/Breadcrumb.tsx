import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
  light?: boolean
}

export function Breadcrumb({ items, className, light = false }: BreadcrumbProps) {
  const allItems = [{ label: 'Home', href: '/' }, ...items]

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('flex items-center flex-wrap gap-1', className)}
    >
      <ol className="flex items-center flex-wrap gap-1" itemScope itemType="https://schema.org/BreadcrumbList">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1
          return (
            <li
              key={index}
              className="flex items-center gap-1"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {index === 0 && (
                <Home
                  className={cn('w-3.5 h-3.5 mr-0.5', light ? 'text-gray-400' : 'text-gray-500')}
                  aria-hidden="true"
                />
              )}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={cn(
                    'text-sm transition-colors',
                    light
                      ? 'text-gray-400 hover:text-white'
                      : 'text-gray-500 hover:text-primary-700'
                  )}
                  itemProp="item"
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
              ) : (
                <span
                  className={cn(
                    'text-sm font-medium',
                    light ? 'text-gray-200' : 'text-gray-700'
                  )}
                  itemProp="name"
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
              {!isLast && (
                <ChevronRight
                  className={cn('w-3.5 h-3.5', light ? 'text-gray-500' : 'text-gray-400')}
                  aria-hidden="true"
                />
              )}
              <meta itemProp="position" content={String(index + 1)} />
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
