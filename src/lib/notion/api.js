import { NotionAPI } from 'notion-client'
import { getList, formatPost, formatPosts, formatPhotos } from './helpers'
const postsPageId = process.env.POSTS_PAGE_ID
const photosPageId = process.env.PHOTOS_PAGE_ID

export async function getPosts () {
  const { items, collection } = await getList(postsPageId)
  return {
    status: 200,
    posts: formatPosts(items, collection)
  }
}

export async function getPhotos () {
  const { items, collection } = await getList(photosPageId)
  return {
    status: 200,
    photos: formatPhotos(items, collection)
  }
}

export async function getPostMetadata (pageId) {
  const notion = new NotionAPI()
  const recordMap = await notion.getPage(pageId)
  const collection = Object.values(recordMap.collection)[0].value
  const block = Object.values(recordMap.block)[0].value
  return {
    status: 200,
    metadata: formatPost(block, collection)
  }
}

export async function getPost (id) {
  const notion = new NotionAPI()
  const recordMap = await notion.getPage(id)
  return {
    status: 200,
    recordMap
  }
}
