import React from 'react'
import Head from 'next/head'
import Center from '@/components/atoms/Center'
import Project from '@/components/Project'

export const metadata = {
  title: 'About me | Hal\'s castle',
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
          <p>我是一名设计师，或者前端工程师，反正和设计、代码相关的东西我都感兴趣。我喜欢设计界面，并用代码把它们实现出来。我做过很多东西，有用或者无用，大多来源于我的兴趣。</p>
          <br/>
          <p>下面是我的一些项目，请欣赏。</p>
        </div>
        <div>
          <Project
            year="2023"
            name="Designtools"
            description="发现有趣的设计工具"
            href="https://designtools.app"
          />
          <Project
            year="2022"
            name="Figmacode"
            description="像写代码一样使用 Figma"
            href="https://figmacode.com"
          />
          <Project
            year="2021"
            name="Code to design"
            description="带领设计师进入代码的世界"
            href="https://xiaozhuanlan.com/codesigner"
          />
          <Project
            year="2020"
            name="Heron handoff"
            description="Figma 离线交付工具"
            href="https://leadream.github.io/heron-handoff/?demo=true"
          />
        </div>
      </Center>
    </>
  )
}
