import { createClient, type SupabaseClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

let cachedClient: SupabaseClient | null = null

function hasValidSupabaseUrl(url: string): boolean {
  try {
    const parsedUrl = new URL(url)
    return parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:"
  } catch {
    return false
  }
}

export function getSupabaseClient(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseAnonKey) return null
  if (!hasValidSupabaseUrl(supabaseUrl)) return null
  if (cachedClient) return cachedClient

  cachedClient = createClient(supabaseUrl, supabaseAnonKey)
  return cachedClient
}
