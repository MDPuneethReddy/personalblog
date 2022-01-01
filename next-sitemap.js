module.exports={
    siteUrl: process.env.NEXT_PUBLIC_SITEURL ,
    generateRobotsTxt : true,
    robotsTxtOptions: {
        additionalSitemaps: [
          `${process.env.NEXT_PUBLIC_SITEURL}/server-sitemap.xml`
        ],
      },
}