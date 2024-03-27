import Image from 'next/image'
import { Container } from '@/components'

export const Header = () => {
  return (
    <header className="bg-primary py-4">
      <Container>
        <Image src="/img/logo.svg" width="200" height="40" alt="" />
      </Container>
    </header>
  )
}
