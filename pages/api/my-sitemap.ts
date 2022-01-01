import type { NextApiRequest, NextApiResponse } from 'next'
import { getDocs} from "@firebase/firestore";
import { postsCollectionRef } from '../../components/firebase/tablesCollectionRef';
const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
export default async (req: NextApiRequest,
    res: NextApiResponse) => {
  try {
    let AllLinks:Array<any>=[]
    const posts=await getDocs(postsCollectionRef) 
  posts.docs.map((doc)=>{
    AllLinks.push({
      url: `/blog/${doc.data().name}`,
      changefreq: "daily",
      priority: 0.9,
    });
  })
    // Add other pages
    const pages = [ "/contact", "/blog"];
    pages.map((url) => {
      AllLinks.push({
        url,
        changefreq: "daily",
        priority: 0.9,
      });
    });

    // Create a stream to write to
    const stream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
    });

    res.writeHead(200, {
      "Content-Type": "application/xml",
    });

    const xmlString = await streamToPromise(
      Readable.from(AllLinks).pipe(stream)
    ).then((data:any) => data.toString());

    res.end(xmlString);
  } catch (e) {
    console.log(e);
    res.send(JSON.stringify(e));
  }
};