import { FooterStyle } from './Footer.styles'

export const Footer = () => {
  const { base, copyright } = FooterStyle()

  return (
    <footer className={base()}>
      <span className={copyright()}>Copyright 2024</span>
    </footer>
  )
}
