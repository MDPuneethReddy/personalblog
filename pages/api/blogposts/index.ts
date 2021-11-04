// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllPosts } from './utils'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {posts}=await getAllPosts()
  console.log("posts",posts)
  res.status(200).json({payload:posts})
}
