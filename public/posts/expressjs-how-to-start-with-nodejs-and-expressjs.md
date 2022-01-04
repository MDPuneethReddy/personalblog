---
date: "APRIL 1,2021"
title: "HOW TO START WITH NODEJS AND EXPRESSJS TO BUILD RESTFUL APIS"
excerpt: " Expressjs and nodejs backend API beginner start to create small API and run locally to test the frontend applications."
tags:  ["NODEJS","EXPRESSJS"]
slug: "expressjs-how-to-start-with-nodejs-and-expressjs"
---
Get started with Nodejs backend with Expressjs, In this blog we are going to learn about how to start the backend server or restAPI locally. Its just a beginner blog post where we just start our server. Before reading this block check out the prerequisites below to install Node and yarn or npm package manger, after Installing them start with the blog.

### PREREQUISITES:
1.Install NODE<br />
2.Install YARN or NPM<br />
follow the steps,

## SETUP:
### STEP-1:
Now start creating a blank repository in your system and go to that repository
```
mkdir foldername
Cd foldername
```

### STEP-2:
We need to create a backend initial template in this blog I will show you with Yarn,

Enter “Yarn init” and enter, it will ask the template questions, you can just click enter for all the questions, default template will be created

```
 Yarn init
```
<Image src="/images/posts/expressjs-how-to-start-with-nodejs-and-expressjs_img1.png">

then you can see the below file will be created in the directory, it is the package.json file where we can see all the packages installed information
<Image src="/images/posts/expressjs-how-to-start-with-nodejs-and-expressjs_img2.png">

### STEP-3:
For starting the server you need to install expressjs, expressjs is a framework used for nodejs backend server
```
Yarn add expressjs
```
After installing expressjs , open your favourite code editor and open the folder, When you open the folder you can see like this.
<Image src="/images/posts/expressjs-how-to-start-with-nodejs-and-expressjs_img3.png">

Now we can write your code to create the server, Now I don’t have any file to right the code, we need to create a file ,The easy method is go to package.json and check the main
<Image src="/images/posts/expressjs-how-to-start-with-nodejs-and-expressjs_img4.png">

Here I have the file name as index.js , the initial point to the server to run the code is index.js, There are two options.

1.Here you can give your own file name and create a file in the repository<br />
2.Just create the name based on the name corresponds to main in package.json<br />

If we go with the different name change “index.js” the file name beside main to your own File name “yourname.js” and create a file in the repository.

<Image src="/images/posts/expressjs-how-to-start-with-nodejs-and-expressjs_img5.png">

### STEP-4:
For the blog we will go with “index.js”, create a file index.js in your repository
<Image src="/images/posts/expressjs-how-to-start-with-nodejs-and-expressjs_img6.png">

## SERVER CODE WITH EXPRESSJS
### STEP-5:
Just we need couple of lines of code to start your server, First “import express “, next “const app=express() ” creates new application for you, following make that app to list at port 3000 or any port
<Image src="/images/posts/expressjs-how-to-start-with-nodejs-and-expressjs_img7.png">

### STEP-6:
Run the command- “node index.js”, you can see the console
```
node index.js
```
After running above command you can see the below image running at port 3000
<Image src="/images/posts/expressjs-how-to-start-with-nodejs-and-expressjs_img8.png">
That’s it your server is running at port 3000 , go to browser and enter http://localhost:3000/ , you can see like this,

<Image src="/images/posts/expressjs-how-to-start-with-nodejs-and-expressjs_img9.png">
Here you can see your localhost is running  but there is nothing to show response from server at localhost, so we add small code

### STEP-7:
Add app.get(“/”) method , here app.get() means when ever this app is called with get method with the path “/”, here “/” indicates the initial path,
<Image src="/images/posts/expressjs-how-to-start-with-nodejs-and-expressjs_img10.png">

### STEP-9:
Next stop the server and restart again node index.js, you can see “welcome to API”
<Image src="/images/posts/expressjs-how-to-start-with-nodejs-and-expressjs_img11.png">
Now our backend server is running, you could have observe that you restarted the app again after saving changes , so it is annoying to restart every time you made changes, so will setup some package which will take care of it I,e ”Nodemon”

### STEP-10:
Add package nodemon to the application
```
Yarn add nodemon
```
### STEP-11:
While it installing go to package.json add the “start script”
<Image src="/images/posts/expressjs-how-to-start-with-nodejs-and-expressjs_img12.png">

### STEP 12:
After installing nodemon ,run yarn start in command line, you can see nodemon running automatically, you can write code if anychanges nodemon checks and restart again, ignore that warning for now
```
Yarn start
```
<Image src="/images/posts/expressjs-how-to-start-with-nodejs-and-expressjs_img13.png">
That’s it for the blog, if you have any questions write down below

### CONCLUSION:
Here in this blog, we learnt how to Start our own backend server locally using expressjs, nodejs.


If you like this article, please share it with your friends and check articles on different technologies and tools here <a style="color: blue" href="/"> https://mdpuneethreddy.com</a>.