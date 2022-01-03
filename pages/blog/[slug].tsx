import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Head from "next/head";
import { useEffect } from 'react'
import * as gtag   from '../../lib/gtag'
import { getAllPostsPaths, getReadTime, postsDirectory } from '../../lib/posts';
interface Iprops{
    frontmatter:{
        title:string,
        date:string,
        coverImage:string,
        excerpt:string,
        tags:any
    },
    slug:string,
    content:any,
    readtime:any
}
export const PostPage:React.FC<Iprops>=(props:Iprops)=> {
  useEffect(() => {
    gtag.event({
      action:"Visit",
      category:"blog",
      label:props.slug,
      value:props.frontmatter.title
    })
  }, [])
  return (
    <>
      <div className='card card-page'>
      <Head>
        <title>{props.frontmatter.title}</title>
        <meta name="keywords" content={props.frontmatter.tags.toString()} />
        <meta name="author" content="M D PUNEETH REDDY" />
        <meta
          name={props.frontmatter.title}
          content={props.frontmatter.excerpt}
        />
      </Head>
        <h1 className='post-title'>{props.frontmatter.title}</h1>
        <div className='post-date'>Posted on {props.frontmatter.date}</div>
        <img src={props.frontmatter.coverImage} alt='' />
        <div className='post-body'>
          <div style={{fontSize:"20px"}} dangerouslySetInnerHTML={{ __html: marked(props.content) }}></div>
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const paths=await getAllPostsPaths()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps=( slug:any  )=> {
    const actualslug=slug.params.slug
  const markdownWithMeta = fs.readFileSync(
    path.join(postsDirectory, actualslug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)
  const readtime=getReadTime(content)
  return {
    props: {
      frontmatter,
      slug:actualslug,
      content,
      readtime
    },
  }
}
export default PostPage