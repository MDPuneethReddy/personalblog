---
date: "JULY 5,2021"
title: "HOW TO MANAGE MULTIPLE REQUESTS WITH “PROMISE.ALL”"
excerpt: "When you are working on the projects, We might have often seen the components or pages needing some Data from APIs or depending on multiple..."
tags: ["JAVASCRIPT","NODEJS"]
slug: "how-to-manage-multiple-requests-with-promise-all"
---
When you are working on the projects, We might have often seen the components or pages needing some Data from APIs or depending on multiple operations. So, we need to get the data from the APIs faster to make our page render correctly. “Promise.all” helps you to get the data faster, we will see how it works, why it is faster when to use and what are its disadvantages.

So, We will get the data from two endpoints that are independent and check the time difference between Async/await and “promise.all”.

### EXAMPLE TO GET DATA FROM TWO ENDPOINTS:
we will create two functions name “getData1“, “getData2” and it will return the result from two endpoints. Here for the example, I am taking the public API.

```
export const getData1=async()=>{
    return await axios.get("https://jsonplaceholder.typicode.com/users")
}
export const getData2=async()=>{
    return await axios.get("https://jsonplaceholder.typicode.com/posts")
}
```

### CREATE FUNCTION TO GET THE RESULT OF BOTH ENDPOINTS USING ASYNC/AWAIT:
We will create a function “getDatas“, then we will call both the functions and also calculate the time taken to get the results. Here first it will call “getData1” and we used Async/wait it will wait for the result from “getData1()“, then it will call the “getData2()” function.

Here you will identify the **application will be ideal until the data received from “getData1()”**.
```
export const getDatas=async()=>{
    const startTime= new Date().getTime()
    const result=await getData1()+await getData2()
    const endTime= new Date().getTime()
    console.log("time taken with one by one ",endTime-startTime)
}
```
### CREATE FUNCTION TO GET THE RESULT OF BOTH ENDPOINTS USING “PROMISE.ALL”:
We will create a function “getDatas1” and then call both the functions and calculate the time difference.

First, we will see how “promise.all” works. we will give the API calls to the “promise.all” in an Array. Now, what promise.all will do is it will **trigger all the API calls in the order** of Array and get the results in a promise.

Here it will **trigger all the functions one by one and wait for all responses**. It will wait until to get all the responses.
```
export const getDatas1=async()=>{
    const startTime= new Date().getTime()
    const data1=getData1()
    const data2=getData2()
    let endTime
    Promise.all([data1,data2]).then(values=>{
        const result=values[0]+values[1]
        endTime= new Date().getTime()
        console.log("time taken for promise.all",endTime-startTime)
    })
}
```
**The disadvantage of “Promise.all” is if one fails all the responses will fail**. So, if one of the API calls fails to return the response, we will lose all the responses. Another **disadvantage is if you have dependency requests like based on the response of one request you need to call another one**, this won’t be suitable.

### RESULT:
So we will call both the functions and check the time difference. It may vary with the machine. You can see the significant difference between calls and if you have more than 2 calls, you can actually get the data fast.
```
time taken for promise.all 288
time taken with one by one  513
```
you can check out articles on different technologies and tools here <a style="color: blue" href="/"> https://mdpuneethreddy.com</a>


### CONCLUSION:
In this article, we saw how “promise.all” helps to manage multiple calls faster. We also saw the advantages and also disadvantages, when to use and when not to use with complete examples and results.

If you like this article, please share it with your friends and check articles on different technologies and tools here <a style="color: blue" href="/"> https://mdpuneethreddy.com</a>.