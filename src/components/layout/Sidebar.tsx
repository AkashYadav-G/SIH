"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  TrendingUp,
  LayoutDashboard,
  Calculator,
  Wheat,
  Building2,
  Truck,
  Warehouse,
  ArrowLeftRight,
  Bell,
  Settings,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

interface NavItem {
  label: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  badge?: string | number
}

const defaultNavItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Market Intelligence", href: "/dashboard/markets", icon: TrendingUp },
  { label: "Price Discovery", href: "/dashboard/discovery", icon: Calculator },
  { label: "My Produce", href: "/dashboard/crops", icon: Wheat },
  { label: "Buyers & Offers", href: "/dashboard/buyers", icon: Building2, badge: "New" },
  { label: "Logistics", href: "/dashboard/logistics", icon: Truck },
  { label: "Storage Facilities", href: "/dashboard/storage", icon: Warehouse },
  { label: "Transactions", href: "/dashboard/transactions", icon: ArrowLeftRight },
]

export interface SidebarProps {
  items?: NavItem[]
  collapsed?: boolean
  onToggleCollapse?: () => void
  userRole?: "Farmer" | "FPO" | "Buyer" | "Logistics"
  userName?: string
}

export function Sidebar({
  items = defaultNavItems,
  collapsed = false,
  onToggleCollapse,
  userRole = "Farmer",
  userName = "Ramesh Patil",
}: SidebarProps) {
  const pathname = usePathname() || "/dashboard"

  return (
    <aside
      className={cn(
        "h-screen sticky top-0 bg-card border-r border-border flex flex-col transition-all duration-300 z-30",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Brand Header */}
      <div className="h-16 px-4 flex items-center justify-between border-b border-border">
        <Link href="/" className="flex items-center gap-2.5 overflow-hidden">
          <div className="size-8 rounded-lg bg-brand-primary flex items-center justify-center text-white shrink-0">
            <TrendingUp className="size-4" />
          </div>
          {!collapsed && (
            <div className="flex flex-col min-w-0">
              <span className="font-display font-bold text-base tracking-tight text-foreground truncate">
                Farmora
              </span>
              <span className="text-[10px] text-muted-foreground font-medium truncate">
                Market Intelligence
              </span>
            </div>
          )}
        </Link>
        {onToggleCollapse && (
          <button
            onClick={onToggleCollapse}
            className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <ChevronRight className="size-4" /> : <ChevronLeft className="size-4" />}
          </button>
        )}
      </div>

      {/* Navigation Items */}
      <div className="flex-1 overflow-y-auto py-4 px-2 space-y-1">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          const navButton = (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors group relative",
                isActive
                  ? "bg-brand-primary-light text-brand-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              <Icon
                className={cn(
                  "size-4 shrink-0 transition-colors",
                  isActive ? "text-brand-primary" : "text-muted-foreground group-hover:text-foreground"
                )}
              />
              {!collapsed && <span className="truncate">{item.label}</span>}
              {!collapsed && item.badge && (
                <span className="ml-auto text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-brand-accent/20 text-brand-accent-hover">
                  {item.badge}
                </span>
              )}
            </Link>
          )

          if (collapsed) {
            return (
              <Tooltip key={item.href}>
                <TooltipTrigger render={navButton} />
                <TooltipContent side="right">
                  <p className="text-xs">{item.label}</p>
                </TooltipContent>
              </Tooltip>
            )
          }

          return navButton
        })}
      </div>

      {/* User Footer Profile */}
      <div className="p-3 border-t border-border">
        <div
          className={cn(
            "flex items-center gap-3 p-2 rounded-lg bg-background border border-border/50",
            collapsed && "justify-center p-1.5"
          )}
        >
          <div className="size-8 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold text-xs shrink-0">
            {userName.charAt(0)}
          </div>
          {!collapsed && (
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-xs font-semibold text-foreground truncate">{userName}</span>
              <span className="text-[10px] text-muted-foreground truncate">{userRole} • Nashik</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}
