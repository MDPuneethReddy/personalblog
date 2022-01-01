import { getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import { getDocs} from "@firebase/firestore";
import { postsCollectionRef } from '../../components/firebase/tablesCollectionRef';
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const posts=await getDocs(postsCollectionRef) 
const AllLinks:Array<any>=posts.docs.map((doc)=>({
    url: `${process.env.NEXT_PUBLIC_SITEURL}/blog/${doc.data().name}`,
    changefreq: "daily",
    priority: 0.9
}))
  return getServerSideSitemap(ctx, [...AllLinks,{
    url: `${process.env.NEXT_PUBLIC_SITEURL}`,
    changefreq: "daily",
    priority: 0.9
  }])
}

// Default export to prevent next.js errors
export default () => {}