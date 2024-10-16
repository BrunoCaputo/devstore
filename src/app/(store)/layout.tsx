import { PropsWithChildren } from 'react'

import { Header } from '@/components/header'

export default function StoreLayout({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-[min-content_max-content]">
      <Header />
      {children}
    </div>
  )
}
