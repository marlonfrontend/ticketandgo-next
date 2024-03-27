import { PropsWithChildren } from 'react'
import { ButtonProps } from './Button.types'

export const Button = ({
  type = 'button',
  children,
  onClick,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  )
}