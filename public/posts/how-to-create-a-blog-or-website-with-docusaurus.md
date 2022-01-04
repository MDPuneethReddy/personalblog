---
date: "JUNE 20,2021"
title: "HOW TO CREATE A BLOG OR WEBSITE WITH DOCUSAURUS"
excerpt: "How To Create Own Blog or Website Using Docusaurus, Add React Components & Deploy the Website in Netlify With Complete code & Explanation."
tags:  ["DOCUSAURUS","REACTJS"]
slug: "how-to-create-a-blog-or-website-with-docusaurus"
---
To create your own pages, the personal website mainly for blogs and documentation of your applications or product “Docusaurus” is one of the open-source technology which helps to build with minimal effort. We can create our own pages or documentation for the projects and deploy them in Netlify which keeps your documentation live.

### PREREQUISITES:
1.Install Node<br />
2.Yarn or npm<br />

### OBJECTIVES:
1.Install Docusaurus and create a Website<br />
2.Get started with Docusaurus<br />
3.Add your components<br />
4.Deploy the website in Netlify<br />

you can check out complete code <a style="color: blue" href=" https://github.com/MDPuneethReddy/docusaurus_tutuorial" target="_blank">  https://github.com/MDPuneethReddy/docusaurus_tutuorial</a>.

you can check out the live website <a style="color: blue" href="  https://docusaurus-tutorials-mdpuneethreddy.netlify.app/" target="_blank">  https://docusaurus-tutorials-mdpuneethreddy.netlify.app/</a>  .

### INSTALL DOCUSAURUS AND CREATE A WEBSITE:
First open your command prompt, next we will create a new website name “docusaurus-tutuorials” using the below command.
```
 npx @docusaurus/init@latest init docusaurus-tutorials classic
```
Next, enter into the project folder and start the server.
```
cd docusaurus-tutorials
yarn start
```

### GET STARTED WITH DOCUSAURUS:
Now, we have our server running at “http://localhost:3000“. Open your browser and check the website running. So, we will see how to change things to get started.

The project structure will look like this.
<Image src="/images/posts/how-to-create-a-blog-or-website-with-docusaurus_img1.png">

Open “docusaurus.config.js”, this file contains all the settings of your website. You can change the site name, description, logos, etc., You can change the navbar and footer for your website in the same file under “themeConfig“.

Now, we will see how to add multiple topics in Navbar. Docusaurus by default support only the blog section. If you want to create different sections like “react blogs” and “personal blogs”, you need to add a plugin for that.
```
yarn add @docusaurus/plugin-content-blog
```

Next, define the plugin inside “docusaurus.config.js” file. Add the plugin and give the “id”, “routeBasePath”, “path” for separate content blogs. Check the below code.
```
 plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'topic',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'topic',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './topic',
      },
    ],
  ],
  ```
Next, we need to define that in NavBar. So, go to “themeConfig” under “docusaurus.config.js“. Next, go to “items” under “navbar” in “themeConfig“. You can add multiple items here.

So, I will create a “Topic1” header and the folder at the top-level named “topic” and add one file markdown file inside the “topic” folder. please check out the below code on how to label the name, position, and path to the pages.
```
items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'About Me',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/topic', label: 'Topic1', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
```

If you are struggling to write with markdown, to make it easy you can check out the tool “readme.so“. you can check this article, how the tool works <a style="color: blue" href="/blog/a-quick-way-to-create-readme-using-readme-so/">  https://mdpuneethreddy.com/blog/a-quick-way-to-create-readme-using-readme-so/
</a>

### ADD REACT COMPONENTS IN DOCUSAURUS:
Docusaurus supports “jsx” code. So, we can create our own components and add them in Markdown. You can also create your own CSS files.

To add React components Inside markdown, First, create a component
```
import React from "react"
export const reactComponent=()=>{
return(
<div>
I am react component
</div>
)
}
```

After creating a component, we can import in markdown and call the component.
```
import {reactComponent} from "../path"
<reactComponent />
```

## DEPLOY WEBSITE IN NETLIFY:
### WHAT IS NETLIFY?
Netlify will help you to host your website without much effort. It gives so many of its features for free. So if you are creating your own personal blog or company’s documentation because basically, it is free of cost.

You can create your personal projects or portfolios and deploy them in Netlify to share live. According to the Netlify team, Our websites won’t go to sleep, always up and running. To deploy your website it won’t even take several minutes and you can use your own domain, etc.,

### DEPLOY WEBSITE:
Let’s deploy our website to go live. First, build the website in your root directory.
```
yarn run build 
```
you can see a “build” folder inside your project repository. Next push this code to your GitHub repository. If you don’t have an account, create a new GitHub account.

Create a new project and GitHub shows a set of instructions to follow to push the code inside the Git repository.

Next we need to deploy this website into Netlify. If you don’t have an account, create a new account. Then create a project.

While creating a project, Netlify asks you to connect to GitHub account and link the project, like below.

<Image src="/images/posts/how-to-create-a-blog-or-website-with-docusaurus_img2.png">

After giving access to Netlify, It shows the repositories or there is an option down below to choose the project if you don’t find it here.

<Image src="/images/posts/how-to-create-a-blog-or-website-with-docusaurus_img3.png">

After selecting the project, you need to say the Netlify where it can find the build folder and what are the commands to run the build folder. It will show like below
<Image src="/images/posts/how-to-create-a-blog-or-website-with-docusaurus_img4.png">

If the Build command is missing give “yarn build” and click on deploy site. After clicking just within a minute your website goes live. If you make changes Netlify automatically triggers deploy with new changes.

If you want to change the name of your website then you can change the site name in “site settings” or you can provide your custom domain to your website.

You can check out the tutorial website <a style="color: blue" href="  https://docusaurus-tutorials-mdpuneethreddy.netlify.app/ " target="_blank">  https://docusaurus-tutorials-mdpuneethreddy.netlify.app/ </a> .

You can check out the complete code for the above steps in my GitHub repository <a style="color: blue" href="https://github.com/MDPuneethReddy/docusaurus_tutuorial" target="_blank"> https://github.com/MDPuneethReddy/docusaurus_tutuorial</a>  .

### CONCLUSION:
In this article, we have seen how to create a new website with docusaurus, how to make changes to the website, how to add plugins, and how to add multiple categories for the blog pages.

Next, we also saw how to add react components inside markdown and the guide for how to deploy the website to Netlify.

If you like this article, please share it with your friends. You can check out articles on different technologies <a style="color: blue" href="/"> https://mdpuneethreddy.com</a> 