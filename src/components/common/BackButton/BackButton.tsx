'use client'

import { useRouter } from 'next/navigation'
import { BackButtonStyle } from './BackButton.styles'

export const BackButton = () => {
  const router = useRouter()
  const { base } = BackButtonStyle()

  return (
    <button className={base()} onClick={() => router.back()}>
      Voltar
    </button>
  )
}
