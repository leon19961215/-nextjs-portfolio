import React from 'react'
import Head from 'next/head'
import Center from '@/components/atoms/Center'
import Project from '@/components/Project'

export const metadata = {
  title: 'About me | leon',
}

export default async function About () {
  return (
    <>
      <Head>
        <title>关于我</title>
      </Head>
      <Center className="mt-16">
        <div className="p-4 mt-16 mb-6">
          <h2 className="text-xl font-bold">关于我</h2>
          <p>我热爱世界的缤纷多彩，更喜欢自己无尽的可能性，除了设计优秀的产品，我也在学习如何创造一款优秀的产品。</p>
          <br/>
          <p>下面是我的一些项目，请欣赏。</p>
        </div>
        <div>
          <Project
            year="2023"
            name="Markdown 文字转化"
            description="将文本图层转化为特定的 autolayout 的插件"
            href="https://www.figma.com/community/plugin/1258435261121234573/markdown"
          />
          <Project
            year="2021"
            name="青桔城市探索"
            description="知群 x 青桔 中国产品设计大赛"
            href="https://www.zcool.com.cn/work/ZNTE2NzQxMjQ=.html"
          />
        </div>
      </Center>
    </>
  )
}
