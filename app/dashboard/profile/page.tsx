import { BadgeCheck, Mail, Shield, UserCircle2 } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="space-y-4 pt-2">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-300">Profile</p>
        <h1 className="mt-2 text-2xl font-bold">Investor Profile & Account</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">
          Manage your account identity, communication preferences, and security settings.
        </p>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-900">
          <h2 className="text-lg font-bold">Account Information</h2>
          <div className="mt-3 space-y-2">
            <div className="rounded-lg border border-slate-200 p-3 dark:border-white/10">
              <p className="inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-300">
                <UserCircle2 className="size-4" />
                Name
              </p>
              <p className="mt-1 font-semibold">Investor Account</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-3 dark:border-white/10">
              <p className="inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-300">
                <Mail className="size-4" />
                Email
              </p>
              <p className="mt-1 font-semibold">your-email@example.com</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-3 dark:border-white/10">
              <p className="inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-300">
                <BadgeCheck className="size-4" />
                Plan
              </p>
              <p className="mt-1 font-semibold">Premium Investor</p>
            </div>
          </div>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-900">
          <h2 className="text-lg font-bold">Security</h2>
          <div className="mt-3 space-y-2">
            <div className="rounded-lg border border-slate-200 p-3 dark:border-white/10">
              <p className="inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-300">
                <Shield className="size-4" />
                Password
              </p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">Last updated 14 days ago</p>
            </div>
            <div className="rounded-lg border border-emerald-300 bg-emerald-50 p-3 text-sm text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
              Two-factor authentication support can be enabled in the next release.
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}
