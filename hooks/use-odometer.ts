"use client"

import * as React from "react"

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3
}

export function useOdometer(
  target: number,
  active: boolean,
  { duration = 1600 }: { duration?: number } = {}
) {
  const [value, setValue] = React.useState(0)
  const frame = React.useRef<number | null>(null)

  React.useEffect(() => {
    if (!active) return
    const start = performance.now()
    const from = 0
    const to = target
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = easeOutCubic(t)
      setValue(Math.round(from + (to - from) * eased))
      if (t < 1) frame.current = requestAnimationFrame(tick)
    }
    frame.current = requestAnimationFrame(tick)
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current)
    }
  }, [active, target, duration])

  return value
}
