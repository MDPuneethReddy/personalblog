// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
let subscribers:Array<string>=[]
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method==="POST"){
  const {name,email}=req.body
  if(typeof name==="undefined" || typeof email==="undefined"){
      res.status(400).json({error:"name and email are required"})
  }
  subscribers.push(email)
  res.status(200).send({success:"subscribed successfully"})
}
}
