import {ComponentPropsWithoutRef} from 'react'
import s from './button.module.scss'
import clsx from "clsx";

export type ButtonProps = {
  variant: 'primary' | 'secondary' | 'outlined';
} & ComponentPropsWithoutRef<'button'>;

export const Button = ({ className, variant, ...rest }: ButtonProps) => {
  return <button {...rest} className={clsx(s[variant], className)}  />
}
