import { Bebas_Neue, Work_Sans } from '@next/font/google'
import { Toaster } from 'react-hot-toast'
import { ConfirmModal } from 'ui/components/ConfirmModal/ConfirmModal'
import { InitiateLayout } from '../Login/InitiateLayout'

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  weight: ['400'],
})

type Props = {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => (
  <main className={`${bebasNeue.variable} font-display`}>
    <div className={`${workSans.variable} font-sans`}>
      <InitiateLayout>
        <ConfirmModal />

        <Toaster />
        {children}
      </InitiateLayout>
    </div>
  </main>
)
