import { Header } from '@/components/header'
import { PropsWithChildren } from 'react'

export default function StoreLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
