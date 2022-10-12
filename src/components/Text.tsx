import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface TextProps {
  size?: 'sm' | 'md' | 'lg',
  children: ReactNode,
  asChild?: boolean,
  styles?: string, 
}

export function Text({ size = 'md', children, asChild, styles }: TextProps) {
  const Component = asChild ? Slot : 'span'
  const Style = styles != null ? styles : 'text-gray-100 font-sans';

  return (
    <Component className={clsx(Style,
      {
        'text-xs': size ==='sm',
        'text-sm': size ==='md',
        'text-md': size === 'lg',
      }
    )}
    >
      { children }
    </Component>
  )
}