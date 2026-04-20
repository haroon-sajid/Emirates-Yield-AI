"use client"

import { ReactNode, useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  BarChart3,
  Calculator,
  ChevronsUpDown,
  Home,
  LifeBuoy,
  LogOut,
  Menu,
  MessageCircle,
  Megaphone,
  Sparkles,
  UserCircle2,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/useAuth"
import { cn } from "@/lib/utils"

type DashboardShellProps = {
  children: ReactNode
}

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: Home, count: "" },
  { label: "ROI Campaigns", href: "/dashboard/roi-campaigns", icon: Megaphone, count: "8" },
  { label: "Analytics", href: "/dashboard/analytics", icon: BarChart3, count: "" },
  { label: "Lead Forms", href: "/dashboard/lead-forms", icon: UserCircle2, count: "16" },
  { label: "Calculator", href: "/dashboard/calculator", icon: Calculator, count: "" },
  { label: "Community", href: "/dashboard/community", icon: MessageCircle, count: "" },
]

export function DashboardShell({ children }: DashboardShellProps) {
  const pathname = usePathname()
  const router = useRouter()
  const { getUser, signOut, loading } = useAuth()

  const [userEmail, setUserEmail] = useState<string | null>(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)

  useEffect(() => {
    const loadUser = async () => {
      const { data } = await getUser()
      setUserEmail(data?.email ?? null)
    }

    void loadUser()
  }, [getUser])

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)")
    const updateLayout = () => {
      const desktop = mediaQuery.matches
      setIsDesktop(desktop)
      setIsSidebarOpen(desktop)
    }

    updateLayout()
    mediaQuery.addEventListener("change", updateLayout)
    return () => mediaQuery.removeEventListener("change", updateLayout)
  }, [])

  useEffect(() => {
    if (!isDesktop) {
      setIsSidebarOpen(false)
      setIsProfileMenuOpen(false)
    }
  }, [pathname, isDesktop])

  const firstName = useMemo(() => {
    if (!userEmail) return "Investor"
    return userEmail.split("@")[0]
  }, [userEmail])

  const handleSignOut = async () => {
    const { error } = await signOut()
    if (!error) router.push("/signin")
  }

  return (
    <div className="min-h-screen bg-[#f4f6fb] text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto min-h-screen max-w-[1500px] lg:pl-[280px]">
        {isSidebarOpen && !isDesktop ? (
          <button
            type="button"
            className="fixed inset-0 z-30 bg-black/40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close sidebar overlay"
          />
        ) : null}

        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-40 flex w-[280px] flex-col border-r border-white/10 bg-[#171a32] px-4 py-5 text-slate-100 transition-transform dark:bg-[#111428]",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          )}
        >
          <div className="mb-5 flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 text-white">
              <Sparkles className="size-4" />
            </span>
            <div>
              <p className="text-2xl font-extrabold tracking-tight">Emirates</p>
              <p className="-mt-1 text-sm font-semibold text-blue-200">Yield Platform</p>
            </div>
          </div>

          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm transition-colors",
                    isActive ? "bg-white/12 text-white" : "text-slate-300 hover:bg-white/8 hover:text-white"
                  )}
                >
                  <span className="inline-flex items-center gap-2.5">
                    <item.icon className="size-4" />
                    {item.label}
                  </span>
                  {item.count ? <span className="text-xs text-slate-400">{item.count}</span> : null}
                </Link>
              )
            })}
          </nav>

          <div className="mt-auto pt-6">
            <Button
              type="button"
              className="h-10 w-full bg-emerald-600 text-white hover:bg-emerald-500"
            >
              <MessageCircle className="size-4" />
              Join WhatsApp Community
            </Button>

            <div className="relative mt-3">
              <button
                type="button"
                onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                className="flex w-full items-center justify-between rounded-xl border border-white/15 bg-white/5 px-3 py-2.5 hover:bg-white/10"
              >
                <span className="inline-flex items-center gap-2.5">
                  <span className="flex size-8 items-center justify-center rounded-full bg-blue-500/30 text-blue-100">
                    <UserCircle2 className="size-4" />
                  </span>
                  <span className="text-left">
                    <span className="block text-sm font-semibold leading-tight">{firstName}</span>
                    <span className="block text-xs text-slate-300">Premium Investor</span>
                  </span>
                </span>
                <ChevronsUpDown className="size-4 text-slate-300" />
              </button>

              {isProfileMenuOpen ? (
                <div className="absolute bottom-14 left-0 right-0 rounded-xl border border-white/15 bg-[#141829] p-1.5 shadow-xl">
                  <div className="mb-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-2">
                    <p className="text-sm font-semibold text-slate-100">{firstName}</p>
                    <p className="truncate text-xs text-slate-300">{userEmail ?? "demo@emiratesyield.ai"}</p>
                  </div>
                  <Link
                    href="/dashboard/profile"
                    onClick={() => setIsProfileMenuOpen(false)}
                    className="flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-slate-100 hover:bg-white/10"
                  >
                    <UserCircle2 className="size-4" />
                    Profile
                  </Link>
                  <Link
                    href="/dashboard/support"
                    onClick={() => setIsProfileMenuOpen(false)}
                    className="flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-slate-100 hover:bg-white/10"
                  >
                    <LifeBuoy className="size-4" />
                    Support
                  </Link>
                  <div className="my-1 border-t border-white/10" />
                  <button
                    type="button"
                    onClick={handleSignOut}
                    disabled={loading.signOut}
                    className="flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-rose-300 hover:bg-rose-500/10 disabled:opacity-60"
                  >
                    <LogOut className="size-4" />
                    {loading.signOut ? "Signing Out..." : "Sign Out"}
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </aside>

        <main className="px-4 py-5 sm:px-6">
          <div className="mb-4 flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm dark:border-white/10 dark:bg-slate-900 lg:hidden">
            <span className="inline-flex items-center gap-2 text-sm font-semibold">
              <Sparkles className="size-4 text-blue-500" />
              Emirates Yield
            </span>
            <button
              type="button"
              onClick={() => setIsSidebarOpen((prev) => !prev)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 dark:border-white/15 dark:bg-slate-950 dark:text-slate-100"
              aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
            >
              {isSidebarOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
          {children}
        </main>
      </div>
    </div>
  )
}
