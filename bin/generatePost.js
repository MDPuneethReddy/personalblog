/*
  First parameter is the slug
  Example: node generate-blog-post.js my-first-awesome-blog-post
*/
const fs = require("fs");
const path = require("path");
// Get paramas
const params = process.argv.slice(2);
// First param is the slug
const slug = params[0];
if (!slug) throw new Error("Please provide a slug as a first parameter");

const blogPostFolder = {
  fullPath: "public/posts",
  folderName: "posts",
};

const postDirectory = path.join(
  process.cwd(),
  blogPostFolder.fullPath,
  `${slug}`
);

const mdTemplate = `---
date: "2050-01-01"
title: ""
excerpt: ""
tags:  ["tag1","tag2"]
slug: "${slug}"
---
`;

if (!fs.existsSync(postDirectory)) {
  fs.writeFile(postDirectory , mdTemplate, (err) => {
    if (err) throw err;
    console.log("Blog post folder created");
  });
} else {
  console.log("Blog post folder with that name already exists.");
}