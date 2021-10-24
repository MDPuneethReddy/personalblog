import type { NextPage } from 'next'
import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { sortByDate } from '../utils'
import Post from "../components/Post"
interface Iprops{
  posts:any
}
const Home: NextPage<Iprops> = (props:Iprops) => {
  return (
    <div>
      <Head>
        <title>My Blog</title>
      </Head>
      <h1 style={{textAlign:"center",fontSize:"xx-large"}}>M D PUNEETH REDDY </h1>
      <h2 style={{textAlign:"center",fontSize:"medium"}}>LEARN , GAIN AND TEACH</h2>
      <div className='posts'>
        {props.posts.map((post:any, index:number) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  )
}
export async function getStaticProps() {
  // Get files from the posts dir
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
    console.log(frontmatter)
    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}
export default Home
