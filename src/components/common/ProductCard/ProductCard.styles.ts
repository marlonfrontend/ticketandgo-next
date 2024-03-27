import { tv } from 'tailwind-variants'

export const ProductCardStyle = tv({
  slots: {
    thumbStyle: 'h-[220px] flex items-center justify-center mb-5',
    image: 'object-contain h-[200px] p-5',
    titleText: 'text-sm line-clamp-2 h-10',
    priceText: 'text-xl font-semibold my-2',
  },
})
