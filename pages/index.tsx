import type { NextPage } from 'next'
import Head from 'next/head'
import { sortByDate } from '../utils'
import Post from "../components/Post"
import { getAllPosts } from './api/blogposts/utils'
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
// const getData=async()=>{
//   let posts:Array<any>=[]
//   await axios.get("/api/blogposts").then((response:any)=>{
//     posts=response.data.payload
//   })
//   .catch(error=>{
//     console.log(error)
//   })
//   return posts
// }
export const getStaticProps=async()=> {
  // Get files from the posts dir
  const {posts}=await getAllPosts()
  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}
export default Home
