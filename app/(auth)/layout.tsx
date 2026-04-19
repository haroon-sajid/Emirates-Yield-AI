import { ReactNode } from "react"
import Link from "next/link"
import { Sparkles, ArrowLeft } from "lucide-react"

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 relative">
      <Link 
        href="/" 
        className="absolute top-6 left-6 sm:top-8 sm:left-8 flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
      >
        <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
        Back to Home
      </Link>
      
      <Link href="/" className="flex items-center gap-2.5 font-extrabold text-2xl tracking-tight mb-8">
        <span className="flex size-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-500/25">
          <Sparkles className="size-5" />
        </span>
        <span>
          Emirates <span className="gradient-text">Yield</span>
        </span>
      </Link>
      <div className="w-full max-w-md bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-white/10 rounded-2xl p-8">
        {children}
      </div>
    </div>
  )
}
