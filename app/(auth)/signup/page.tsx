import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SignUpPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">Create an account</h2>
      <p className="text-sm text-center text-muted-foreground mb-8">
        Start your 7-day free trial. No credit card required.
      </p>
      
      <form className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="name">Full Name</label>
          <input 
            id="name" 
            type="text" 
            className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-transparent px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-600" 
            placeholder="John Doe" 
            required 
          />
        </div>
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
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-transparent px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-600" 
            placeholder="••••••••" 
            required 
          />
        </div>
        
        <Button className="w-full h-12 bg-blue-600 hover:bg-blue-500 text-white rounded-lg mt-2">
          Create Account
        </Button>
      </form>
      
      <div className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/signin" className="text-blue-600 hover:underline font-medium">
          Sign In
        </Link>
      </div>
    </div>
  )
}
