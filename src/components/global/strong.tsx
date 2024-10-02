import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const Strong = React.forwardRef<
  HTMLElement, // Ref para elementos nativos
  ComponentProps<'strong'>
>(({ className, ...props }, ref) => (
  <strong
    className={twMerge('text-lg, text-zinc-600', className)}
    ref={ref}
    {...props}
  />
))

Strong.displayName = 'Strong'