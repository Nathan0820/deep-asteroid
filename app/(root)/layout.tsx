import React from 'react'
import Header from '@/components/ui/Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
        <Header />
        <div className='min-h-screen text-gray-400'>
            {children}
        </div>
    </main>
  )
}

export default Layout