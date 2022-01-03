---
date: "JUNE 18,2021"
title: "JEST: MOCK FUNCTIONS OR MODULES USING TYPESCRIPT"
excerpt: "Mock Named Exports, Default Exports, Modules (Axios) Both Single, Multiple Requests In TypeScript and es6 With Examples Using Jest."
tags:  ["NODEJS","JEST"]
slug: "jest-mock-functions-or-modules-using-typescript"
---
Jest is one of the popular unit testing frameworks. Mocking the functions and modules is one of the main important things to consider in unit testing. When you are working with more developers to test the functionality of your code, you need to mock the functions which are not yet developed. So, we will look at how to mock the modules, functions, and default exported modules with code and explanation.

### PREREQUISITES:
\* Install Node<br />
\* Setup Jest<br />

you can checkout jest setup and unit testing with supertest, jest<a style="color: blue" href="https://mdpuneethreddy.com/jest-supertest-unit-testing-with-nodejs-typescript-sqlite3/">https://mdpuneethreddy.com/jest-supertest-unit-testing-with-nodejs-typescript-sqlite3/</a> here

you can check nodejs, expressjs app <a style="color: blue" href=" https://mdpuneethreddy.com/expressjs-how-to-start-with-nodejs-and-expressjs/"> https://mdpuneethreddy.com/expressjs-how-to-start-with-nodejs-and-expressjs/</a>
 here.

### OBJECTIVES:
\* Difference between named export and default export<br />
\* How to mock named exports<br />
\* Mock modules(Axios)<br />
\* Mock Axios multiple requests<br />
\* How to mock default export<br />

### DIFFERENCE BETWEEN NAMED EXPORT AND DEFAULT EXPORT:
Named Export example:
```
export const printNumber=()=>{
    return getNumber()
}
export const getNumber=()=>{
    return 2
}
//Another way
const printNumber=()=>{
    return getNumber()
}
const getNumber=()=>{
    return 2
}
export {printNumber,getNumber}
```
Default Export example:

```
const defaultexport=()=>{
    return 1
}
export default defaultexport
```

### MOCK NAMED EXPORTS USING JEST:
For example, we will consider there are two named export functions inside “utils.ts” file.

```
// utils.ts
export const printNumber=()=>{
    return getNumber()
}
export const getNumber=()=>{
    return 2
}
```

Next, we will need to mock the “getNumber” function in the test file. So, we will make the mock function to return the value “1” and check the response in the tests.

Here we will use “spyon“. First, we need to import the file. Check the below code for how I imported the “utils.ts” file. Next, we need to mock the “getNumber” function. Jest has an inbuilt “spyon” so no need to import. Next, it accepts two arguments imported file and function name. Check the syntax below.

```
jest.spyon(imported filename, "named function")
```

Next, we mock the function to return some mock value and write the tests and check the output value.

```
import * as utils from "../utils"
describe("mock tests",()=>{ 
    jest.spyOn(utils,"getNumber").mockReturnValueOnce(1)
    it("mock function inside another function",()=>{
        expect(utils.printNumber()).toBe(1)
    })
})
```

### MOCK AXIOS AND GET REQUEST USING JEST:
For example, now we will have a getData function, please check below. Now we need to mock the get request of Axios.

```
//utils.ts
export const getData=async()=>{
    const data=await axios.get("https://jsonplaceholder.typicode.com/users")
    return data
}
```

First, we will install Axios if you didn’t install “yarn add axios”. Next, import Axios and at the top of test files mock Axios. After mocking the module, create an instance of the mocked Axios. In the example, we will name as “mockedaxios“.

```
jest.mock("axios")
const mockedaxios=axios as jest.Mocked<typeof axios>
```

Create mock response data, Now you had already mocked the get request of the Axios. Now, we need to send this mock response data as actual data.

```
(mockedaxios.get as jest.Mock).mockReturnValueOnce(resdata)
```

Now we will write the unit tests to check the response by mocking the Axios get requests.

```
import {getData} from "../utils"
describe("mock axios", ()=>{
    const resdata=[{

    }];
    (mockedaxios.get as jest.Mock).mockReturnValueOnce(resdata)
    it("test get axios call",async ()=>{
        expect(await getData()).toEqual([{}])
    })
})
```

### MOCK MULTIPLE AXIOS REQUESTS:
For example, we will consider the below function, which needs to get data from different endpoints. Now, we need to mock both requests.

```
export const getData2=async()=>{
    const data1=await axios.get("https://jsonplaceholder.typicode.com/users")
    const data2=await axios.get("https://jsonplaceholder.typicode.com/users?id=1")
    return {
        data1,data2
    }
}
```
First, to differentiate the response data for the URLs, we need to create a switch or return the data based on a specific URL. please check out the below code. You can also add promises for the return data.

Similarly, you can create like the below for different CRUD operations.

```
(mockedaxios.get as jest.Mock).mockReturnValue((url) => {
        switch (url) {
          case 'https://jsonplaceholder.typicode.com/users':
            return ({data: {"name":"user1"}})
          case 'https://jsonplaceholder.typicode.com/users?id=1':
            return ({data: {"name":"user1"}})
          default:
            return new Error('not found')
        }
      })
```
After creating the switch to send the mocked response for the endpoints. You can test the function and check the expected results.

```
describe("mock multiple axios requests",()=>{
    (mockedaxios.get as jest.Mock).mockReturnValue((url) => {
        switch (url) {
          case 'https://jsonplaceholder.typicode.com/users':
            return ({data: {"name":"user1"}})
          case 'https://jsonplaceholder.typicode.com/users?id=1':
            return ({data: {"name":"user1"}})
          default:
            return new Error('not found')
        }
      })
      it("get multiple get",async()=>{
        expect(await auth.getData2()).toEqual("expected values")
      })
})
```

### MOCK DEFAULT EXPORT USING JEST:
For example, we will consider the below code. we will create a “defaultexport” module and export as default and name as “defaultexport.ts“.

```
//defaultexport.ts
const defaultexport=()=>{
    return 1
}
export default defaultexport
```
Now we will mock the complete module. So, check the syntax below for “jest.mock“

```
jest.mock("filepath",factory)
```

First, we will mock the module from the file path and write the factory. Check the official jest page <a style="color: blue" href="https://jestjs.io/docs/mock-function-api" target="_blank"> https://jestjs.io/docs/mock-function-api</a>
 for a clear understanding of mocks.

In this example we will mock complete module and return the mocked response.

```
jest.mock("./defaultexport",()=>{
    return jest.fn().mockReturnValueOnce(3)
})
```
Next, we will test the “defaultexport” by calling it in another function. Please check below how the function calls.

```
export const getdefaultModule=()=>{
    return defaultexport()
}
describe("mock default module",()=>{
    it("tests default module",()=>{
        expect(auth.getdefaultModule()).toBe(3)
    })
})
```

### CONCLUSION:
In this Blog, we have a look into the difference between named export and default exports. How to mock named functions, modules. We check how to mock Axios with single, multiple requests and check how to mock default imports with complete code and explanation.

If you like the article, please share it with your friends. You can check out articles on different technologies <a style="color: blue" href=" https://mdpuneethreddy.com/"> https://mdpuneethreddy.com/</a>
 here.