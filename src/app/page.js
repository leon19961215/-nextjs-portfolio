import React from 'react'
import Image from 'next/image'
import { Figma, GitHub, Twitter } from 'react-feather'
import cn from 'classnames'
import { getPosts, getPhotos } from '@/lib/notion/api'
import Center from '@/components/atoms/Center'
import PostCard from '@/components/PostCard'
import Link from '@/components/atoms/Link'
import GroupTitle from '@/components/GroupTitle'

export default async function Home() {
  const { photos } = await getPhotos(5)
  const { posts } = await getPosts()

  return (
    <Center>
      <Hero/>
      <Posts posts={posts}/>
      <Photos photos={photos.slice(0, 5)}/>
    </Center>
  )
}

function Hero () {
  return (
    <div className="flex gap-6 mt-16 px-4 py-12 max-sm:flex-col">
      <Image src="/images/avatar.jpeg" alt="Avatar" width={96} height={96} className="w-24 h-24 rounded-full"/>
      <div>
        <h1 className="mb-1 text-2xl font-bold">嗨，我是刘小白 👋</h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">一名产品设计师和独立开发者，曾就职于美团、Moka。日常的工作主要是与产品、设计和用户体验相关，业务时间投入在独立开发中。</p>
        <div className="flex gap-3">
          <Link to="https://www.figma.com/@leon1996" target="_blank">
            <Figma size={20}/>
          </Link>
          <Link to="https://github.com/leon19961215" target="_blank">
            <GitHub size={20}/>
          </Link>
        </div>
      </div>
    </div>
  )
}

function Posts ({ posts }) {
  return (
    <div className="py-12 max-sm:py-4">
      <GroupTitle moreLink="/posts">最近文章</GroupTitle>
      {
        posts.map((post, index) => <PostCard key={post.id} {...post}/> )
      }
    </div>
  )
}

function Photos ({ photos }) {
  return (
    <div className="py-12 max-sm:py-4">
      <GroupTitle moreLink="/photography">摄影</GroupTitle>
      <div className="grid grid-cols-6 gap-4 p-4 max-sm:grid-cols-2">
        {
          photos.map((photo, index) => 
          <Image
            key={index}
            src={photo.photoURL}
            alt={photo.name}
            className={
              cn(
                'object-cover',
                'rounded-lg max-sm:col-span-1 max-sm:aspect-square',
                { 'col-span-3 aspect-16/10': index<2 },
                { 'col-span-2 aspect-square': index>=2 },
              )
            }
            width={1600}
            height={1000}
          />
        )
        }
      </div>
    </div>
  )
}
