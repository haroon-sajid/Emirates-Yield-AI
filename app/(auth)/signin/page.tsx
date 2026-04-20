"use client"

import { FormEvent, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/useAuth"

export default function SignInPage() {
  const router = useRouter()
  const { signIn, loading } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setErrorMessage(null)

    const { error } = await signIn(email, password)

    if (error) {
      setErrorMessage(error.message)
      return
    }

    router.push("/dashboard")
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">Welcome back</h2>
      <p className="text-sm text-center text-muted-foreground mb-8">
        Enter your credentials to access your dashboard.
      </p>
      
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="email">Email</label>
          <input 
            id="email" 
            type="email" 
            className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-transparent px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-600" 
            placeholder="you@example.com" 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={loading.signIn}
            required 
          />
        </div>
        <div className="space-y-2 flex flex-col">
          <div className="flex justify-between items-center">
             <label className="text-sm font-medium" htmlFor="password">Password</label>
             <Link href="#" className="text-xs text-blue-600 hover:underline">Forgot password?</Link>
          </div>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-transparent px-4 py-3 pr-12 text-sm outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="••••••••"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              disabled={loading.signIn}
              required
            />
            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword((prev) => !prev)}
              disabled={loading.signIn}
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
        
        <Button
          type="submit"
          className="w-full h-12 bg-blue-600 hover:bg-blue-500 text-white rounded-lg mt-2"
          disabled={loading.signIn}
        >
          {loading.signIn ? "Signing In..." : "Sign In"}
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
