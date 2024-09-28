import React from 'react'
import Center from '@/components/atoms/Center'
import PostCard from '@/components/PostCard'
import { getPosts } from '@/lib/notion/api'

export const metadata = {
  title: 'All posts | Hal\'s castle',
}

export default async function Posts () {
  const { posts } = await getPosts()
  return (
    <Center className="mt-16 py-4">
      {
        posts.map(post =>
          <PostCard
            key={post.id}
            {...post}
          />
        )
      }
    </Center>
  )
}
