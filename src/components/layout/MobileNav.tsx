"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { TrendingUp, Calculator, Building2, Truck, User } from "lucide-react"
import { cn } from "@/lib/utils"

interface MobileTabItem {
  label: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

const defaultMobileTabs: MobileTabItem[] = [
  { label: "Markets", href: "/dashboard/markets", icon: TrendingUp },
  { label: "Discovery", href: "/dashboard/discovery", icon: Calculator },
  { label: "Buyers", href: "/dashboard/buyers", icon: Building2 },
  { label: "Logistics", href: "/dashboard/logistics", icon: Truck },
  { label: "Profile", href: "/dashboard/profile", icon: User },
]

export function MobileNav({ tabs = defaultMobileTabs }: { tabs?: MobileTabItem[] }) {
  const pathname = usePathname() || ""

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-border px-2 py-1.5 flex items-center justify-around shadow-lg safe-area-inset-bottom">
      {tabs.map((tab) => {
        const Icon = tab.icon
        const isActive = pathname === tab.href

        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={cn(
              "flex flex-col items-center justify-center py-1 px-3 rounded-lg min-w-[56px] transition-colors",
              isActive ? "text-brand-primary font-semibold" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Icon className={cn("size-5 mb-0.5", isActive && "text-brand-primary")} />
            <span className="text-[10px] tracking-tight">{tab.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
