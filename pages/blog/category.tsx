 import type { NextPage } from 'next'
// import Head from 'next/head'
// import React from 'react'
// import Post from '../../components/Post'
// import { sortByDate } from '../../utils'
// import { getPostsByCategory } from '../api/blogposts/utils'
// interface Iprops{
//   posts:Array<any>,
//   category:string
// }
//  const Category: NextPage<Iprops> = (props:Iprops) => {
//   return (
//     <div>
//       <Head>
//         <title>{props.category}</title>
//       </Head>
//       <div className='posts'>
//         {props.posts.map((post:any, index:number) => (
//           <Post key={index} post={post} />
//         ))}
//       </div>
//     </div>
//   )
// }
// export const getServerSideProps=async(context:any)=> {
//   const {category} = context.query
//   const {posts}=await getPostsByCategory(category)
//   return {
//     props: {
//       posts: posts.sort(sortByDate),
//       category
//     },
//   }
// }
// export default Category