import React from 'react'
import Image from 'next/image'
import { cookies } from 'next/headers'
import Center from '@/components/atoms/Center'
import Tag from '@/components/atoms/Tag'
import NotionPage from '@/components/NotionPage'
import { getPost, getPostMetadata } from '@/lib/notion/api'
import { relativeTime } from '@/lib/date'

export const generateMetadata = async ({ params }) => {
  const { id } = params;
  const { metadata } = await getPostMetadata(id);
  
  // 防御性编程，检查 metadata 是否存在
  if (!metadata) {
    return {
      title: "Post not found | Hal's castle",
    };
  }

  return {
    title: `${metadata.title} | Hal\'s castle`,
  }
}

export default async function Post({ params }) {
  const { id } = params;
  const { recordMap } = await getPost(id);
  const { metadata } = await getPostMetadata(id);
  
  // 防御性编程，检查是否获取到了 metadata 和 recordMap
  if (!metadata || !recordMap) {
    return <p>Loading...</p>;  // 或者显示适当的错误信息
  }

  // 获取 cookie 中的 theme 值
  const cookieStore = cookies();
  const theme = cookieStore.get('theme');
  const themeValue = theme ? theme.value : 'default';  // 防止 theme 为 undefined

  return (
    <Center className={"mt-16"}>
      <div className="p-4">
        {
          metadata.coverURL &&
          <Image
            src={metadata.coverURL}
            alt={`Cover for blog: ${metadata.title}`}
            className="w-full mb-8 aspect-16/9 object-cover rounded"
            width={160}
            height={120}
          />
        }
        <h2 className="mb-1 text-3xl font-medium">{ metadata.title }</h2>
        <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">{ relativeTime(metadata.createdAt) }</p>
        <div className="flex gap-2">
          { metadata.tags && metadata.tags.map((tag, index) => <Tag key={index}>{ tag }</Tag>) }
        </div>
      </div>
      <NotionPage
        theme={themeValue}
        recordMap={recordMap}
      />
    </Center>
  )
}