"use client"

import { useCallback, useState } from "react"
import type { Session, User } from "@supabase/supabase-js"

import { getSupabaseClient } from "@/lib/supabaseClient"

type AuthError = Error | null

export type AuthResult<T> = {
  data: T | null
  error: AuthError
}

type AuthSessionData = {
  user: User | null
  session: Session | null
}

export type AuthLoadingState = {
  signUp: boolean
  signIn: boolean
  signOut: boolean
  getUser: boolean
}

const initialLoadingState: AuthLoadingState = {
  signUp: false,
  signIn: false,
  signOut: false,
  getUser: false,
}

const MISSING_SUPABASE_CONFIG_ERROR =
  "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local, then restart the dev server."

/**
 * Reusable authentication hook for Supabase auth actions.
 */
export function useAuth() {
  const [loading, setLoading] = useState<AuthLoadingState>(initialLoadingState)

  const setActionLoading = (action: keyof AuthLoadingState, isLoading: boolean) => {
    setLoading((prev) => ({ ...prev, [action]: isLoading }))
  }

  /**
   * Creates a new user account with email and password.
   */
  const signUp = useCallback(async (email: string, password: string): Promise<AuthResult<AuthSessionData>> => {
    setActionLoading("signUp", true)
    try {
      const supabase = getSupabaseClient()
      if (!supabase) return { data: null, error: new Error(MISSING_SUPABASE_CONFIG_ERROR) }

      const { data, error } = await supabase.auth.signUp({ email, password })
      return { data, error: error ?? null }
    } catch (error) {
      return { data: null, error: error instanceof Error ? error : new Error("Failed to sign up.") }
    } finally {
      setActionLoading("signUp", false)
    }
  }, [])

  /**
   * Signs in an existing user using email and password.
   */
  const signIn = useCallback(async (email: string, password: string): Promise<AuthResult<AuthSessionData>> => {
    setActionLoading("signIn", true)
    try {
      const supabase = getSupabaseClient()
      if (!supabase) return { data: null, error: new Error(MISSING_SUPABASE_CONFIG_ERROR) }

      const { data, error } = await supabase.auth.signInWithPassword({ email, password })
      return { data, error: error ?? null }
    } catch (error) {
      return { data: null, error: error instanceof Error ? error : new Error("Failed to sign in.") }
    } finally {
      setActionLoading("signIn", false)
    }
  }, [])

  /**
   * Signs out the currently authenticated user.
   */
  const signOut = useCallback(async (): Promise<AuthResult<null>> => {
    setActionLoading("signOut", true)
    try {
      const supabase = getSupabaseClient()
      if (!supabase) return { data: null, error: new Error(MISSING_SUPABASE_CONFIG_ERROR) }

      const { error } = await supabase.auth.signOut()
      return { data: null, error: error ?? null }
    } catch (error) {
      return { data: null, error: error instanceof Error ? error : new Error("Failed to sign out.") }
    } finally {
      setActionLoading("signOut", false)
    }
  }, [])

  /**
   * Retrieves the current authenticated session user.
   */
  const getUser = useCallback(async (): Promise<AuthResult<User>> => {
    setActionLoading("getUser", true)
    try {
      const supabase = getSupabaseClient()
      if (!supabase) return { data: null, error: new Error(MISSING_SUPABASE_CONFIG_ERROR) }

      const { data, error } = await supabase.auth.getUser()
      return { data: data.user ?? null, error: error ?? null }
    } catch (error) {
      return { data: null, error: error instanceof Error ? error : new Error("Failed to fetch user.") }
    } finally {
      setActionLoading("getUser", false)
    }
  }, [])

  return {
    loading,
    signUp,
    signIn,
    signOut,
    getUser,
  }
}
