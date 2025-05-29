import { IconBrandGithub, IconBrandX, IconExchange, IconHome, IconTerminal2 } from '@tabler/icons-react'
import * as React from 'react'

import { cn } from '@/lib'

import { FloatingDock } from '../ui/floating-dock'
import { Spotlight } from '../ui/Spotlight'

export type IconProps = React.HTMLAttributes<SVGElement>

function Hero() {
  const links = [
    {
      title: 'Home',
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
    },

    {
      title: 'Products',
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
    },

    {
      title: 'Aceternity UI',
      icon: (
        <img
          src="https://assets.aceternity.com/logo-dark.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: '#',
    },
    {
      title: 'Changelog',
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
    },

    {
      title: 'Twitter',
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
    },
    {
      title: 'GitHub',
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
    },
  ]

  return (
    <div className="relative pb-25 h-full flex w-full overflow-hidden rounded-md bg-background/[0.96] antialiased">
      <div
        className={cn(
          'pointer-events-none absolute inset-0 [background-size:40px_40px] select-none',
          '[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]',
        )}
      />

      <Spotlight
        className="-top-20 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20">
        <div className="fixed md:absolute bottom-10 md:left-1/2 md:transform md:-bottom-20 md:-translate-x-1/2">
          <FloatingDock items={links} />
        </div>

        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          DevOps <br /> Hobbies
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
          Open Source Devops Community. Find your way to devops technologies from zero to hero, communicate to other devopers around the world, help each other to grow ...
        </p>
      </div>
    </div>
  )
}
export default Hero
