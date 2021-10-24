// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as nodemailer from "nodemailer"
require('dotenv').config()
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
         user: process.env.EMAIL_USERNAME,
         pass: process.env.EMAIL_PASSWORD
     }
 });
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const ClientDetails=req.body.user
  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to:  process.env.EMAIL_TO_USERNAME, 
    subject: 'Blog Client mail', 
    html: `
    <h2>name:${ClientDetails.name}</h2><br />
    <h2>email:${ClientDetails.email}</h2><br />
    <h2>subject:${ClientDetails.subject}</h2><br />
    <h4>message:${ClientDetails.message}</h4><br />
    ` 
  };
  transporter.sendMail(mailOptions,  (err, info)=> {
    if(err){
      res.status(400).json({error:"Message not sent"})
    }
    else{
    res.status(200).json({message:"sent successfully"})
    }
  })
}
