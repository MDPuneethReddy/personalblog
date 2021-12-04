import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
interface BlogPostFolder {
    fullPath: string;
    folderName: string;
}
  
const blogPostFolder: BlogPostFolder = {
    fullPath: "public/posts",
    folderName: "posts",
};
export const postsDirectory = path.join(process.cwd(), blogPostFolder.fullPath);
export const sortByDate = (a:any, b:any) => {
    return new Date(b.frontmatter.date).getDate() - new Date(a.frontmatter.date).getDate()
  }
  export const getReadTime=(content:any)=> {
    const WPS = 275 / 60
  
    var images = 0
    const regex = /\w/
  
    let words = content.split(' ').filter((word:any) => {
      if (word.includes('<img')) {
        images += 1
      }
      return regex.test(word)
    }).length
  
    var imageAdjust = images * 4
    var imageSecs = 0
    var imageFactor = 12
  
    while (images) {
      imageSecs += imageFactor
      if (imageFactor > 3) {
        imageFactor -= 1
      }
      images -= 1
    }
  
    const minutes = Math.ceil(((words - imageAdjust) / WPS + imageSecs) / 60)
  
    return minutes
  }

export const getAllPosts=async()=>{
    const files = fs.readdirSync(postsDirectory)

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join(postsDirectory, filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)
    return {
      slug,
      frontmatter,
    }
  })

  return {
      posts: posts.sort(sortByDate)
  }
}
export const getAllPostsPaths=async()=>{
  const files = fs.readdirSync(postsDirectory)
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))
  return paths
}

export const getPostsByCategory=async(category:string)=>{
  const files = fs.readdirSync(postsDirectory)

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join(postsDirectory, filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)
    return {
      slug,
      frontmatter,
    }
  }).filter(post=>post.frontmatter.tags.includes(category))

  return {
      posts: posts.sort(sortByDate)
  }
}