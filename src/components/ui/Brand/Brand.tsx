import Image from 'next/image'
import Link from 'next/link'

export const Brand = () => {
  return (
    <Link href="/">
      <Image src="/img/logo.svg" width="180" height="40" alt="" />
    </Link>
  )
}
