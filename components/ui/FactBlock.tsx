// Structured fact panel for AI/LLM extraction and featured snippet targeting.
// Use on service and city pages to provide dense, parseable factual context.

export interface Fact {
  label: string
  value: string
}

interface FactBlockProps {
  title: string
  facts: Fact[]
  variant?: 'default' | 'emergency'
}

export function FactBlock({ title, facts, variant = 'default' }: FactBlockProps) {
  const accent = variant === 'emergency'
    ? 'border-red-500 bg-red-50'
    : 'border-primary-500 bg-primary-50'
  const labelColor = variant === 'emergency' ? 'text-red-700' : 'text-primary-700'

  return (
    <aside className={`border-l-4 ${accent} rounded-r-xl p-5 my-6`} aria-label={title}>
      <p className={`text-xs font-bold uppercase tracking-wider ${labelColor} mb-3`}>{title}</p>
      <dl className="grid grid-cols-2 gap-x-6 gap-y-3">
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt className="text-xs text-gray-500 font-semibold uppercase tracking-wide">{fact.label}</dt>
            <dd className="text-sm font-bold text-gray-900 mt-0.5">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  )
}
