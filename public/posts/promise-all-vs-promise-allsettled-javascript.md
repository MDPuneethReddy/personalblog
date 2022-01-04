---
date: "JULY 10,2021"
title: "PROMISE.ALL VS PROMISE.ALLSETTLED JAVASCRIPT"
excerpt: "When We Are Working With Promises Which Needs to Be considered between Promise.all & Promise.allSettled With Pros & Cons."
tags:  ["JAVASCRIPT","NODEJS"]
slug: "promise-all-vs-promise-allsettled-javascript"
---
When we are working with promises in Javascript, They are different approaches to do the promises. A most popular way to use Async/await. But there will be some times where we want to get the data or responses parallelly. We already know that javascript is “single-threaded”. So we will see how to make the responses fast by using “Promise.all” and “Promise.allSettled”.

Please follow the link to know the differences between “Async/await” & “Promise.all” <a style="color: blue" href="/blog/how-to-manage-multiple-requests-with-promise-all/">https://mdpuneethreddy.com/blog/how-to-manage-multiple-requests-with-promise-all/</a>
 . We saw when to use “Promise.all” and how it works with detailed explanation with pros and cons.

So in this article, we will create a function that will get the response from the open API. We will see how both will work with pros and cons.

### CREATE TWO FUNCTIONS TO GET THE RESPONSE:

we will get the data from the open API and return the response. please check the below code how we are getting the data.

```
import axios from "axios"
export const getData1=async()=>{
    return await axios.get("https://jsonplaceholder.typicode.com/users")
}
export const getData2=async()=>{
    return await axios.get("https://jsonplaceholder.typicode.com/posts")
}
```
### PROMISE.ALL:
“Promise.all” takes an array of promises and returns a single promise. It will give the responses in an array and exactly in the same order.

**If one of the promises fails or throws an error then it rejects the promises and throws the error**. This is one of the main cons of “Promise.all”.

First, we will see how “Promise.all” works. we will create a function getData() which will call both functions and return the values.
```
export const getData=async()=>{
    const data1=getData1()
    const data2=getData2()
    Promise.all([data1,data2]).then(values=>{
        console.log(values)
})
}
```
After running the above code, we will see the response in an array of values with a single promise. It will trigger the functions one by one but it will wait for the promise to return all the values.

Now, we will reject the promise and add to the array of promises.
```
export const getDatas1=async()=>{
    const data1=getData1()
    const data2=getData2()
    const data3=Promise.reject(new Error("Some Error"))
    Promise.all([data1,data2,data3]).then(values=>{
        console.log(values)
})
}
```
After Running the above code it will throw an error and all the promises were rejected and you won’t get the other responses that are actually completed.

So, we can use “Promise.all” if we are sure that the responses never fail or if the responses are independent, but we need both the responses for the further flow of code.

So, to get rid of the above disadvantage we can use “Promise.allSettled”. Actually, the syntax is the same as “Promise.all, ” but the response and behavior are different.

### PROMISE.ALLSETTLED:
“Promise.allSettled” also takes an array of promises and returns a single promise. But It will wait until all promises are rejected or succeeded. So, we don’t lose successfully returned responses.

So, we will get the data from both the functions using “Promise.allSettled” and return the responses with a single promise.

```
export const getDatas1=async()=>{
    const data1=getData1()
    const data2=getData2()
    const data3=Promise.reject("Some Error")
    Promise.allSettled([data1,data2]).then(values=>{
        console.log(values)
})
}
```
The response structure will be as below. It will give the status of each response and in the value parameter, you will get the actual response.
```
[
{
status: 'fulfilled',
value: {
status: 200,
statusText: 'OK',
headers: [Object],
config: [Object],
request: [ClientRequest],
data: [Array]
}
},
{
status: 'fulfilled',
value: {
status: 200,
statusText: 'OK',
headers: [Object],
config: [Object],
request: [ClientRequest],
data: [Array]
}
}
]
```
Now we will reject the response and check how it will return the response.
```
export const getDatas1=async()=>{
    const data1=getData1()
    const data2=getData2()
    const data3=Promise.reject(new Error("Some Error"))
    Promise.allSettled([data1,data2,data3]).then(values=>{
        console.log(values)
})
}
```
So when I run the above code we will see the below response. It will show the status as rejected and gives the reason for that Error.
```
[
  {
    status: 'fulfilled',
    value: {
      status: 200,
      statusText: 'OK',
      headers: [Object],
      config: [Object],
      request: [ClientRequest],
      data: [Array]
    }
  },
  {
    status: 'fulfilled',
    value: {
      status: 200,
      statusText: 'OK',
      headers: [Object],
      config: [Object],
      request: [ClientRequest],
      data: [Array]
    }
  },
  {
    status: 'rejected',
    reason: Error: Some Error
        at getDatas1 (file:///F:/docusaurus/reactjs/index.js:19:32)
        at file:///F:/docusaurus/reactjs/index.js:36:1
        at ModuleJob.run (internal/modules/esm/module_job.js:139:37)
        at async Loader.import (internal/modules/esm/loader.js:179:24)
  }
]
```
This is the main difference between “Promise.all” & “Promise.allSettled”.

You can check about “Promise.all” and “Promise.allSettled”
<a style="color: blue" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all" target="_blank">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all</a>


### CONCLUSION:
In this article, we saw how “Promise.all” & “Promise.allSettled” works and differences between them with complete code. We also saw how the response will be when the promise is rejected.

If you like this article, please share it with others. If you are interested in different technologies please check out here
<a style="color: blue" href="/">https://mdpuneethreddy.com</a>

