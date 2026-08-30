import * as React from "react"
import { Button, type buttonVariants } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { type VariantProps } from "class-variance-authority"

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  label: string
  icon: React.ReactNode
  tooltip?: string
  side?: "top" | "right" | "bottom" | "left"
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, icon, label, tooltip, side = "top", variant = "ghost", size = "icon", ...props }, ref) => {
    const buttonElement = (
      <Button
        ref={ref}
        aria-label={label}
        variant={variant}
        size={size}
        className={cn("shrink-0", className)}
        {...props}
      >
        {icon}
      </Button>
    )

    if (tooltip) {
      return (
        <Tooltip>
          <TooltipTrigger render={buttonElement} />
          <TooltipContent side={side}>
            <p className="text-xs">{tooltip}</p>
          </TooltipContent>
        </Tooltip>
      )
    }

    return buttonElement
  }
)
IconButton.displayName = "IconButton"
