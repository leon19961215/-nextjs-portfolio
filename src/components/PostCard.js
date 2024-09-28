import React from 'react'
import Link from 'next/link'
import Tag from '@/components/atoms/Tag'
import { relativeTime } from '@/lib/date'
import Image from 'next/image'

const PostCard = function ({ id, coverURL, createdAt, title, tags }) {
  return (
    <Link
      href={`/posts/${id}`}
      className="
        flex gap-6 mx-1 mb-2 p-3 rounded-2xl hover:bg-zinc-100 hover:dark:bg-zinc-600 transition-all
        max-sm:flex-col max-sm:gap-4
      "
    >
      {
        coverURL &&
        <Image
          src={coverURL}
          alt={`Cover for blog: ${title}`}
          className="w-40 aspect-4/3 object-cover rounded max-sm:w-full max-sm:aspect-16/9"
          width={160}
          height={120}
        />
      }
      <div className="flex flex-col gap-3 justify-between">
        <div className="gap-1">
          <p className="text-sm text-gray-700 dark:text-gray-400">{ relativeTime(createdAt) }</p>
          <h1 className="text-xl">{ title }</h1>
        </div>
        <div className="flex gap-2">
          { tags.map((tag, index) => <Tag key={index}>{ tag }</Tag>) }
        </div>
      </div>
    </Link>
  )
}

export default PostCard
