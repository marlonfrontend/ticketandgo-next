import { tv } from 'tailwind-variants'

export const FooterStyle = tv({
  slots: {
    base: 'border-t py-5 text-center',
    copyright: 'text-xs',
  },
})
