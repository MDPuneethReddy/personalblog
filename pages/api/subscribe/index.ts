// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {name,email}=req.body
  if(typeof name==="undefined" || typeof email==="undefined"){
      res.status(400).json({error:"name and email are required"})
  }
  res.status(200).send({success:"subscribed successfully"})
}
