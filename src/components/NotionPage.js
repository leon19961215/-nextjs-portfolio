'use client'

import React from 'react'
import { NotionRenderer } from 'react-notion-x'
import { useTheme } from 'next-themes'

export default function NotionPage ({ theme, recordMap }) {
  const { theme: localTheme } = useTheme()

  return (
    <div className="leading-6">
      <NotionRenderer
        recordMap={recordMap}
        darkMode={(localTheme||theme)==='dark'}
        fullPage={false}
        components={{
          Collection: () => null
        }}
      />
    </div>
  )
}
