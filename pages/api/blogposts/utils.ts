import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { sortByDate } from '../../../utils'
import getConfig from 'next/config'
export const getAllPosts=async()=>{
    const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)
    return {
      slug,
      frontmatter,
    }
  })

  return {
      posts: posts.sort(sortByDate)
  }
}
export const getAllPostsPaths=async()=>{
  const files = fs.readdirSync(path.join('posts'))
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))
  return paths
}

export const getPostsByCategory=async(category:string)=>{
  const temppath=path.join(getConfig().serverRuntimeConfig.PROJECT_ROOT, "posts")
  console.log(temppath)
  const files = fs.readdirSync(temppath)

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)
    return {
      slug,
      frontmatter,
    }
  }).filter(post=>post.frontmatter.tags.includes(category))

  return {
      posts: posts.sort(sortByDate)
  }
}