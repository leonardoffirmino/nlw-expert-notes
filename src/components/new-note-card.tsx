export function NewNoteCard() {
  return (
    <div className="rounded-md bg-slate-700 p-5 space-y-3 overflow-hidden">
      <span className="text-sm font-medium text-slate-200">
        Adcionar nota
      </span>
      <p className="text-sm leading-6 text-slate-400">
        Grave uma note em áudio que será convertida para texto automaticamente.
      </p>
    </div>
  )
}