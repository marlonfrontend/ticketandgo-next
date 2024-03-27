'use client'

import { useRouter } from 'next/navigation'
import { BackButtonStyle } from './BackButton.styles'
import { ChevronLeftCircleIcon } from 'lucide-react'

export const BackButton = () => {
  const router = useRouter()
  const { base } = BackButtonStyle()

  return (
    <button className={base()} onClick={() => router.back()}>
      <ChevronLeftCircleIcon width={18} height={18} />
      Voltar
    </button>
  )
}
