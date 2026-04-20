export type DashboardMetric = {
  title: string
  value: string
  delta: string
  trend: "up" | "down"
}

export type HotListing = {
  id: string
  community: string
  propertyType: string
  askingPrice: string
  estYield: string
  dealScore: number
  status: "Fresh" | "Under Review" | "Hot"
}

export type PipelineStage = {
  label: string
  count: number
  value: string
}

export type AlertItem = {
  id: string
  title: string
  body: string
  time: string
  priority: "high" | "medium" | "low"
}

export type ActivityItem = {
  id: string
  message: string
  time: string
}

export const dashboardMetrics: DashboardMetric[] = [
  { title: "Qualified Deals", value: "42", delta: "+12% this week", trend: "up" },
  { title: "Avg Net Yield", value: "8.6%", delta: "+0.4 pts", trend: "up" },
  { title: "Projected Annual Cashflow", value: "AED 1.24M", delta: "+9.1%", trend: "up" },
  { title: "Alerts Triggered", value: "18", delta: "-2 vs yesterday", trend: "down" },
]

export const pipeline: PipelineStage[] = [
  { label: "Newly Scraped", count: 174, value: "AED 212M" },
  { label: "AI Qualified (7+)", count: 42, value: "AED 58M" },
  { label: "Shortlisted", count: 16, value: "AED 27M" },
  { label: "Offer Ready", count: 5, value: "AED 8.4M" },
]

export const hotListings: HotListing[] = [
  {
    id: "EY-4812",
    community: "Dubai Marina",
    propertyType: "1BR Apartment",
    askingPrice: "AED 1.18M",
    estYield: "9.1%",
    dealScore: 8.8,
    status: "Hot",
  },
  {
    id: "EY-5039",
    community: "JVC",
    propertyType: "2BR Apartment",
    askingPrice: "AED 1.05M",
    estYield: "8.4%",
    dealScore: 8.1,
    status: "Fresh",
  },
  {
    id: "EY-5273",
    community: "Business Bay",
    propertyType: "Studio",
    askingPrice: "AED 930K",
    estYield: "8.7%",
    dealScore: 8.4,
    status: "Under Review",
  },
  {
    id: "EY-5497",
    community: "Dubai Hills",
    propertyType: "1BR Apartment",
    askingPrice: "AED 1.42M",
    estYield: "7.9%",
    dealScore: 7.6,
    status: "Fresh",
  },
]

export const alerts: AlertItem[] = [
  {
    id: "a1",
    title: "Price drop detected in Dubai Marina",
    body: "2BR unit dropped by AED 95K in last 24 hours. Deal score jumped to 8.9.",
    time: "8 min ago",
    priority: "high",
  },
  {
    id: "a2",
    title: "New high-yield opportunity in JVC",
    body: "Projected yield 9.3% with strong occupancy trend over 12 months.",
    time: "31 min ago",
    priority: "medium",
  },
  {
    id: "a3",
    title: "Service charge update: Downtown",
    body: "Recalculated net yields for 12 assets based on latest DLD published fees.",
    time: "1 hr ago",
    priority: "low",
  },
]

export const activity: ActivityItem[] = [
  { id: "ac1", message: "AI finished nightly scan across Bayut + Property Finder.", time: "Today, 06:00" },
  { id: "ac2", message: "5 deals moved to Offer Ready based on target yield > 8%.", time: "Today, 07:10" },
  { id: "ac3", message: "WhatsApp digest queued for Premium watchlist.", time: "Today, 08:00" },
]

export const topAreas = [
  { name: "Dubai Marina", avgYield: "8.9%", deals: 12 },
  { name: "JVC", avgYield: "8.5%", deals: 10 },
  { name: "Business Bay", avgYield: "8.2%", deals: 8 },
  { name: "Arjan", avgYield: "8.1%", deals: 6 },
]
