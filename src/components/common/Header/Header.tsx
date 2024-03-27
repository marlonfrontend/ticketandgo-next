import { Container, Brand, Grid, ShoppingCart } from '@/components'
import { HeaderStyle } from './Header.styles'

export const Header = () => {
  const { base } = HeaderStyle()

  return (
    <header className={base()}>
      <Container>
        <Grid justify="between" align="center">
          <Brand />
          <ShoppingCart />
        </Grid>
      </Container>
    </header>
  )
}
