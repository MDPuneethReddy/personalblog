import type { NextPage } from 'next'
import Head from 'next/head'
import Post from "../components/Post"
import { getAllPosts, sortByDate } from '../lib/posts'
interface Iprops{
  posts:any
}
const Home: NextPage<Iprops> = (props:Iprops) => {
  return (
    <div>
      <Head>
        <title>Crypto Tips</title>
      </Head>
      <h1 style={{textAlign:"center",fontSize:"xx-large"}}>CRYPTO TIPS </h1>
      <h2 style={{textAlign:"center",fontSize:"medium"}}>Beginner tips to learn and grow</h2>
      <div className='posts'>
        {props.posts.map((post:any, index:number) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  )
}

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
