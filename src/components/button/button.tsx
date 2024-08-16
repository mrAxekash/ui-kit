import { ComponentPropsWithoutRef, ElementType } from 'react'
import s from './button.module.scss'
import clsx from 'clsx'

export type ButtonProps<T extends ElementType = 'button'> = {
  variant: 'primary' | 'secondary' | 'outlined' | 'text' | 'link'
  fullWidth?: boolean
  as?: T
} & ComponentPropsWithoutRef<T>

export function Button<T extends ElementType = 'button'>({
  className,
  fullWidth = false,
  variant = 'primary',
  as,
  ...rest
}: ButtonProps<T>) {
  const Component = as ?? 'button'

  return (
    <Component {...rest} className={clsx(s[variant], className ?? '', fullWidth && s.fullWidth)} />
  )
}
