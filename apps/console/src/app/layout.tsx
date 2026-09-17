import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NizeCloud Admin Console',
  description: 'Administrative control plane for the NizeCloud cloud infrastructure platform.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
