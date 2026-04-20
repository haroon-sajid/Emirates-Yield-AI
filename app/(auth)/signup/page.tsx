"use client"

import { FormEvent, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/useAuth"

export default function SignUpPage() {
  const router = useRouter()
  const { signUp, loading } = useAuth()
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setErrorMessage(null)
    setSuccessMessage(null)

    const { error } = await signUp(email, password)

    if (error) {
      setErrorMessage(error.message)
      return
    }

    setSuccessMessage("Account created successfully. Redirecting to your dashboard...")
    router.push("/dashboard")
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">Create an account</h2>
      <p className="text-sm text-center text-muted-foreground mb-8">
        Start your 7-day free trial. No credit card required.
      </p>
      
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="name">Full Name</label>
          <input 
            id="name" 
            type="text" 
            className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-transparent px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-600" 
            placeholder="John Doe" 
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            disabled={loading.signUp}
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
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={loading.signUp}
            required 
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="password">Password</label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-transparent px-4 py-3 pr-12 text-sm outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="••••••••"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              disabled={loading.signUp}
              required
            />
            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword((prev) => !prev)}
              disabled={loading.signUp}
              className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"
            >
              {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </button>
          </div>
        </div>

        {errorMessage ? (
          <p className="text-sm text-red-500" role="alert">
            {errorMessage}
          </p>
        ) : null}

        {successMessage ? (
          <p className="text-sm text-emerald-600" role="status">
            {successMessage}
          </p>
        ) : null}
        
        <Button
          type="submit"
          className="w-full h-12 bg-blue-600 hover:bg-blue-500 text-white rounded-lg mt-2"
          disabled={loading.signUp}
        >
          {loading.signUp ? "Creating Account..." : "Create Account"}
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
