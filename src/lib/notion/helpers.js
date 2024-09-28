import { NotionAPI } from 'notion-client'

export const getList = async function (pageId) {
  const notion = new NotionAPI()
  const recordMap = await notion.getPage(pageId)
  const blocks = Object
    .values(recordMap.block)
    .map(({value}) => value)
  const collection = Object.values(recordMap.collection)[0].value
  const items = blocks.filter(({type, parent_id}) => type==='page'&&parent_id===collection.id)
  return {
    collection,
    items
  }
}

export const getImageURL = function (url, blockId) {
  return 'https://www.notion.so/image/'+encodeURIComponent(url)+'?table=block&id='+blockId+'&cache=v2'
}

export const formatPost = function (block, collection) {
  const { schema } = collection
  const { id, created_time, format, properties } = block
  const tagsIndex = Object.values(schema).findIndex(({name}) => name==='Tags')
  const schemaKeys = Object.keys(schema)
  const tagsKey = schemaKeys[tagsIndex]
  const coverURL = format?.page_cover ? getImageURL(format?.page_cover, id) : null
  return {
    id,
    createdAt: created_time,
    coverURL,
    title: properties?.title[0][0],
    tags: properties[tagsKey][0][0].split(',')
  }
}

export const formatPosts = function (items, collection) {
  const { schema } = collection
  return items.map(item => {
    const { id, created_time, format, properties } = item
    const tagsIndex = Object.values(schema).findIndex(({name}) => name==='Tags')
    const schemaKeys = Object.keys(schema)
    const tagsKey = schemaKeys[tagsIndex]
    const coverURL = format?.page_cover ? getImageURL(format?.page_cover, id) : null
    return {
      id,
      createdAt: created_time,
      coverURL,
      title: properties?.title[0][0],
      tags: properties[tagsKey][0][0].split(',')
    }
  })
}

export const formatPhotos = function (items, collection) {
  const { schema } = collection
  return items.map(item => {
    const { id, created_time, properties } = item
    const PhotoIndex = Object.values(schema).findIndex(({name}) => name==='Photo')
    const schemaKeys = Object.keys(schema)
    const PhotoKey = schemaKeys[PhotoIndex]
    return {
      id,
      createdAt: created_time,
      name: properties?.title[0][0],
      photoURL: getImageURL(properties[PhotoKey][0][1][0][1], id)
    }
  })
}
