"use client"

import * as React from "react"

export function useInViewOnce<T extends Element>(options?: IntersectionObserverInit) {
  const ref = React.useRef<T | null>(null)
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const el = ref.current
    if (!el || visible) return
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.2, ...options }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [visible, options])

  return { ref, visible }
}
