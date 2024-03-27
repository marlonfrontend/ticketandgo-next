import { Container, Brand } from '@/components'
import { HeaderStyle } from './Header.styles'

export const Header = () => {
  const { base } = HeaderStyle()

  return (
    <header className={base()}>
      <Container>
        <Brand />
      </Container>
    </header>
  )
}
