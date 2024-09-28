import React from 'react'
import Photo from '@/components/Photo'
import { getPhotos } from '@/lib/notion/api'

export const metadata = {
  title: 'Photography | Hal\'s castle',
}

export default async function Photography() {
  const { photos } = await getPhotos()
  return (
    <div className="flex justify-center mt-16">
      <div className="w-full max-w-5xl">
        <div className="grid grid-cols-3 gap-x-4 gap-y-20 px-4 py-10 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-y-4">
          {
            photos.map(photo =>
              <Photo photo={photo} key={photo.id}/>
            )
          }
        </div>
      </div>
    </div>
  )
}
