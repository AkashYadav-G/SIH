import * as React from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center font-medium whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-brand-primary text-white hover:bg-brand-primary-hover shadow-sm",
        primary:
          "bg-brand-primary text-white hover:bg-brand-primary-hover shadow-sm",
        accent:
          "bg-brand-accent text-white hover:bg-brand-accent-hover font-semibold shadow-sm",
        outline:
          "border border-border bg-surface text-foreground hover:bg-muted hover:border-border-strong",
        secondary:
          "bg-brand-secondary-light text-brand-primary hover:bg-brand-secondary/20",
        ghost:
          "text-foreground hover:bg-muted hover:text-foreground",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",
        link: "text-brand-primary underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-10 px-4 py-2 text-sm rounded-lg gap-2",
        xs: "h-7 px-2.5 text-xs rounded-md gap-1.5 [&_svg]:size-3.5",
        sm: "h-8 px-3 text-xs rounded-md gap-1.5 [&_svg]:size-4",
        lg: "h-12 px-6 text-base rounded-xl gap-2.5 [&_svg]:size-5",
        xl: "h-14 px-8 text-lg rounded-xl gap-3 [&_svg]:size-6",
        icon: "size-10 rounded-lg p-0",
        "icon-sm": "size-8 rounded-md p-0 [&_svg]:size-4",
        "icon-lg": "size-12 rounded-xl p-0 [&_svg]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
