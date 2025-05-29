'use client'
import type { ReactNode } from 'react'

import { cn } from '@/lib'

import { DotPattern } from '../magicui/dot-pattern'
import AppFooter from './footer'
import Hero from './hero'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col mx-auto max-w-[1920px] min-h-screen overflow-hidden">
      <div className="flex flex-col lg:flex-row flex-1">
        <div id="hero" className="lg:w-4/12 w-full p-4 border-r border-gray-900">
          <Hero />
        </div>

        <div id="context" className="relative lg:w-8/12 w-full overflow-y-auto no-scrollbar p-4 border-r border-gray-900">
          <DotPattern
            className={cn(
              '[mask-image:radial-gradient(300px_circle_at_center,orange,transparent)]',
            )}
          />
          {children}
          <AppFooter />
        </div>
      </div>
    </div>
  )
}
