'use client'

import React, { useState, useEffect } from 'react'
import { Sun, Moon } from 'react-feather'
import { useTheme } from 'next-themes'
import Cookies from 'js-cookie'

const ThemeSwitcher = function () {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  function toggleTheme () {
    // 点击图标时，切换为相反的模式
    const newTheme = theme==='light' ? 'dark' : 'light'
    Cookies.set('theme', newTheme)
    setTheme(newTheme)
  }

  // useEffect 只在客户端运行，在客户端运行时设置 mounted 为 true
  useEffect(() => {
    setMounted(true)
  }, [])

  // 如果不是客户端运行，什么也不渲染
  if (!mounted) {
    return null
  }

  return (
    // hover:bg-zinc-200 表示 hover 时的背景色
    // dark:hover:bg-zinc-600 表示 dark 模式下 hover 时的背景色
    <div className="p-1 rounded-lg transition-all hover:bg-zinc-200 cursor-pointer dark:hover:bg-zinc-600" onClick={toggleTheme}>
      {
        theme==='light' ?
        <Moon size="20px"/> :
        <Sun size="20px"/>
      }
    </div>
  )
}

export default ThemeSwitcher
