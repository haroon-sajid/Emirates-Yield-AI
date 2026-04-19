import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SignInPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">Welcome back</h2>
      <p className="text-sm text-center text-muted-foreground mb-8">
        Enter your credentials to access your dashboard.
      </p>
      
      <form className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="email">Email</label>
          <input 
            id="email" 
            type="email" 
            className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-transparent px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-600" 
            placeholder="you@example.com" 
            required 
          />
        </div>
        <div className="space-y-2 flex flex-col">
          <div className="flex justify-between items-center">
             <label className="text-sm font-medium" htmlFor="password">Password</label>
             <Link href="#" className="text-xs text-blue-600 hover:underline">Forgot password?</Link>
          </div>
          <input 
            id="password" 
            type="password" 
            className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-transparent px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-600" 
            placeholder="••••••••" 
            required 
          />
        </div>
        
        <Button className="w-full h-12 bg-blue-600 hover:bg-blue-500 text-white rounded-lg mt-2">
          Sign In
        </Button>
      </form>
      
      <div className="mt-6 text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-blue-600 hover:underline font-medium">
          Sign Up
        </Link>
      </div>
    </div>
  )
}
