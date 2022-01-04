---
date: "APRIL 6,2021"
title: "REDIS NODEJS: EXAMPLE WITH TYPESCRIPT"
excerpt: " Redis node to use cached data to reduce the response time and when to use , when you shouldnt use with examples with typescript, ..."
tags:  ["REDIS","NODEJS"]
slug: "redis-how-to-use-in-nodejs-to-fast-the-response.md"
---
In this blog , we are going to show how redis is useful in nodejs backend applications where it helps in reduces the time taken to get the processed data, when to use redis should we use all the time or only in some cases, we will check it out with API calls with detailed explanation.

PREREQUSITES:
Install nodejs and expressjs application and make sure it working locally, if you didn’t install check out <a style="color: blue" href="/blog/expressjs-how-to-start-with-nodejs-and-expressjs/">https://mdpuneethreddy.com/blog/expressjs-how-to-start-with-nodejs-and-expressjs/</a>

Install redis and have some idea, if you are not familiar with redis check out <a style="color: blue" href="/blog/redis-what-is-redis-when-to-use-with-example/">https://mdpuneethreddy.com/blog/redis-what-is-redis-when-to-use-with-example/</a>

You can get complete code from my github repo <a style="color: blue" href="https://github.com/MDPuneethReddy/redis_nodejs" target="_blank">https://github.com/MDPuneethReddy/redis_nodejs</a>
 

After having your nodejs API running locally

basically your expressjs app looks like this

```
import * as express from "express"
import * as cors from "cors"
const app=express()
app.use(cors())
app.get("/",(req:express.Request,res:express.Response)=>{
    res.send("welcome to API")
})
app.listen(3000,()=>{
    console.log("running")
})
```
and when you start your application, it works locally.

### INSTALL REDIS
```
yarn add redis
```

```
import redis from "redis"
```

After installing check that redis is installed in package.json, next import redis at main file of expressjs app

next import axios in the main file and start your redis server, which you installed before, if not install from <a style="color: blue" href=" https://github.com/dmajkic/redis/downloads" target="_blank"> https://github.com/dmajkic/redis/downloads</a>.
```
Yarn add axios
```

### CREATE REDIS CLIENT:
Now we have our server running, so for our expressjs application we need to create a client to connect to server
```
const redisClient=redis.createClient({
    host:"127.0.0.1",
    port:6379
})
```
Above we have created a redis client with options to connect to server.

Now we will create a route where it needs data from external API
```
app.get("/users",async (req:express.Request,res:express.Response)=>{
    try{

        const response= await axios.get("https://jsonplaceholder.typicode.com/users")
        redisClient.setex("users",10000,JSON.stringify(response.data))
        res.send({payload:response.data})
    }catch(err){
        console.log(err)
    }
})
```
we will do step by step what we have done

\* Here we are trying to get users from external API
\* Next we are storing the users in redis server, here setex means setting with expiry
\* You can see above we set key name “users” ,expiry of 10000 and value i.e object, as redis doesn’t support to store object, we stringify before storing
\* next we sent the response out
\* All the code is wrapped with try block so any error you can catch or send that catched error as response
\* So call localhost/users to get the response, the response will look something like this
![redis-how-to-use-in-nodejs-to-fast-the-response_img_1.png](/images/posts/redis-how-to-use-in-nodejs-to-fast-the-response_img_1.png)

So we just stores the data, now we need to use this stored data so no need to call the external API again

We will create a middleware to check in redis server, if it has the value send the reponse else do the normal process as above

### WRAP PROMISE WITH REDISNODE
Here while getting and setting the data upto now with this current version of redis, it wont give promise for setting and getting the data, so we need to create a promise, so we need to wrap with promise
```
import * as util from "util"
.
.
const getAsync = util.promisify(redisClient.get).bind(redisClient);
```
Above we wrapped redisclient get method with promise, So now we need to create a middleware to check the data present in redis server before executing usual code.

### CREATE A MIDDLEWARE:
```
export const catchedData=async (req:express.Request,res:express.Response,next:express.NextFunction)=>{
    try{
        const cacheddata=await getAsync("users")
        if(cacheddata!==null){
        console.log("cacheddata")
        res.send({payload:JSON.parse(cacheddata)})
        }
        else{
            next()
        }
        
    }
    catch(error){
        res.send(error)
    }
    
}
```
So now we created a middleware named cachedData now we get the key with name “users”, if the catchdata is not null then it will send the response with the cached data, if it is null then it will go call next() is a next function to carry on the request to go to next.

So the complete code looks like this
```
import * as express from "express"
import * as cors from "cors"
import * as redis from "redis"
import * as util from "util"
import axios from "axios"
const app=express()
app.use(cors())
//create a redisClient
const redisClient=redis.createClient({
    host:"127.0.0.1",
    port:6379
})
// add promises for get and set requests of redisclient
const getAsync = util.promisify(redisClient.get).bind(redisClient);

app.get("/",(req:express.Request,res:express.Response)=>{
    res.send("welcome to API")
})
//add middlware
export const catchedData=async (req:express.Request,res:express.Response,next:express.NextFunction)=>{
    try{
        const cacheddata=await getAsync("users")
        if(cacheddata!==null){
        console.log("cacheddata")
        res.send({payload:JSON.parse(cacheddata)})
        }
        else{
            next()
        }
        
    }
    catch(error){
        res.send(error)
    }
    
}
app.get("/users",catchedData,async (req:express.Request,res:express.Response)=>{
    try{
        console.log("getting catched")
        const response= await axios.get("https://jsonplaceholder.typicode.com/users")
        redisClient.setex("users",10000,JSON.stringify(response.data))
        res.send({payload:response.data})
    }catch(err){
        console.log(err)
    }
})
app.listen(3000,()=>{
    console.log("running")
})
```
Before if it takes more than 1 sec, now it takes nearly 10ms to get the response, you can check the response time in network tab in dev tools,

So now we need to know , when to use and when not to use, you can see we will set expiry for the key value so if the value changes frequently then we cant use redis , we cant use cached data. So we need to use this node-redis if the data wont change frequently and you can make changes easily with the commands, I have a blog written on commands and with example screenshots with explanation, if you want you can check out here.

### CONCLUSION:
Here in this blog we installed redis server and created a redis client in the express App and wrap the promises and created a small example, how to use redis to reduce the time taken for the responses and saw when to use and when no to use.

If you like this, please share with your friends, if any suggestion to improve or any comments , please write down in the comments.

If you are interested in more blogs like this, please check out my blogs <a style="color: blue" href="/">https://mdpuneethreddy.com/</a>.