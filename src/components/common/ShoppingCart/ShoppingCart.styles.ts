import { tv } from 'tailwind-variants'

export const ShoppingCartStyle = tv({
  slots: {
    base: 'text-white relative',
    badge:
      '-top-2 -right-2 absolute flex items-center justify-center bg-secondary rounded-full h-4 w-4 text-xs text-black',
  },
})
