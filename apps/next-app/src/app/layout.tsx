import { cn } from 'lib/utils/util'
import { Work_Sans } from 'next/font/google'
import '../../styles/globals.css'
import { Metadata } from 'next'
import { SuperTokensProvider } from './ui/supertokensProvider'

const fontSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  weight: '400',
})

export async function generateMetadata() {
  const metadata: Metadata = {
    title: {
      default: `Welcome to Next.js Native | Next.js Native`,
      template: `%s | Next.js Native`,
    },
  }

  return metadata
}

export default async function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <SuperTokensProvider>
        <body className={cn('min-h-screen antialiased', fontSans.className)}>
          <main>{children}</main>
        </body>
      </SuperTokensProvider>
    </html>
  )
}
