// Citation-optimized Q&A block for AEO, voice search, and LLM extraction.
// Uses answer-first format with inline schema microdata.

interface QuickAnswerProps {
  question: string
  answer: string
  icon?: string
  className?: string
}

export function QuickAnswer({ question, answer, icon, className = '' }: QuickAnswerProps) {
  return (
    <div
      className={`bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-5 my-4 ${className}`}
      itemScope
      itemType="https://schema.org/Question"
    >
      <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
        {icon && <span aria-hidden="true">{icon}</span>}
        <span itemProp="name">{question}</span>
      </p>
      <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
        <p className="text-gray-800 text-sm leading-relaxed" itemProp="text">
          {answer}
        </p>
      </div>
    </div>
  )
}
