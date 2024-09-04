import type { Metadata } from 'next'
import '@/styles/globals.css'
import { ProjectList } from '@/components/pages/tasks/ProjectList'

export const metadata: Metadata = {
  title: 'Task Flow App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="grid grid-cols-12 gap-2 p-2">
      <ProjectList />
      <div className="col-span-9 border h-screen">{children}</div>
    </div>
  )
}