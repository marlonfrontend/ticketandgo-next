import { tv } from 'tailwind-variants'

export const ProductDetailStyle = tv({
  slots: {
    thumb: 'flex justify-center items-center border py-5 h-[460px]',
    title: 'text-2xl font-semibold mb-5',
    category: 'text-sm',
    infoProduct: 'md:pl-12',
    price: 'text-2xl font-medium my-5',
    descriptionTitle: 'text-xl font-medium mb-5',
    descriptionText: 'text-sm',
  },
})
