'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Logo from '@/components/Logo'
import ThemeSwitcher from './ThemeSwitcher'
import Link from '@/components/atoms/Link'

const Header = function () {
  const pathname = usePathname()
  return (
    <header className="fixed top-0 left-0 flex justify-center w-full h-16 backdrop-blur-lg z-50 bg-[--header-bg]">
      <div className="flex items-center justify-between w-full max-w-2xl p-4">
        <nav className="flex gap-6 items-center">
          <Link to="/">
            <Logo/>
          </Link>
          <Link to="/posts" isActive={pathname==='/posts'}>文章</Link>
          <Link to="/photography" isActive={pathname==='/photography'}>摄影</Link>
          <Link to="/about" isActive={pathname==='/about'}>关于</Link>
        </nav>
        <ThemeSwitcher/>
      </div>
    </header>
  )
}

export default Header
