import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import { getReadTime } from '../../utils'
import axios from 'axios'
interface Iprops{
    frontmatter:{
        title:string,
        date:string,
        coverImage:string
    },
    slug:string,
    content:any,
    readtime:any
}
export const PostPage:React.FC<Iprops>=(props:Iprops)=> {
  return (
    <>
      <div className='card card-page'>
        <h1 className='post-title'>{props.frontmatter.title}</h1>
        <div className='post-date'>Posted on {props.frontmatter.date}</div>
        <img src={props.frontmatter.coverImage} alt='' />
        <div className='post-body'>
          <div dangerouslySetInnerHTML={{ __html: marked(props.content) }}></div>
        </div>
      </div>
    </>
  )
}
const getPathsData=async()=>{
  let paths:Array<any>=[]
  await axios.get("http://localhost:3000/api/blogposts/paths").then(response=>{
    paths=response.data.payload
  }).catch(error=>{
    console.log(error)
  })
  return paths
}
export async function getStaticPaths() {
  const paths=await getPathsData()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps=( slug:any  )=> {
    const actualslug=slug.params.slug
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', actualslug + '.md'),
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