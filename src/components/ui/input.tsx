import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
          "peer flex h-12 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          
          "border-input focus-visible:border-[#3b9eff] focus-visible:outline-none focus-visible:ring-0",
        className
      )}
      {...props}
    />
  )
}

export { Input }
