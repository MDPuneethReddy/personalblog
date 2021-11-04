import type { NextApiRequest, NextApiResponse } from 'next'
import {getAllPostsPaths} from "../utils"
export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  const paths=await getAllPostsPaths()
  res.status(200).json({payload:paths})
}
