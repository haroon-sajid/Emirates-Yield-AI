"use client"

import * as React from "react"

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3
}

export function useDecimalCount(
  target: number,
  active: boolean,
  { duration = 1600, decimals = 1 }: { duration?: number; decimals?: number } = {}
) {
  const [value, setValue] = React.useState(0)
  const frame = React.useRef<number | null>(null)

  React.useEffect(() => {
    if (!active) return
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = easeOutCubic(t)
      const v = target * eased
      setValue(Number(v.toFixed(decimals)))
      if (t < 1) frame.current = requestAnimationFrame(tick)
    }
    frame.current = requestAnimationFrame(tick)
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current)
    }
  }, [active, target, duration, decimals])

  return value
}
