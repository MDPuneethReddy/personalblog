---
date: "APRIL 4,2021"
title: "SWAGGER DOCUMENTATION TO TEST NODEJS RESTAPIS"
excerpt: " Prerequisites: Nodejs express initial setup. If you want to know how to setup Nodejs RestAPI with expressjs you can see here. There are so many ..."
tags:  ["NODEJS","SWAGGER"]
slug: "swagger-documentation-to-test-nodejs-restapis"
---
We need to test our APIs without frontend, In this blog we are going to see how to test Restful APIs with swagger.

### PREREQUISITES:

Nodejs express initial setup<br />
If you want to know how to setup Nodejs RestAPI with expressjs you can see https://mdpuneethreddy.com/expressjs-how-to-start-with-nodejs-and-expressjs/

There are so many different ways to test APIs:
\* Swagger<br />
\* postman<br />
We can test with https://www.postman.com/, it is a very good tool to test the APIs without frontend, the other hand swagger helps us to document and test by creating a interface for the APIs and also we can test with that, its an important asset in the company’s to document the APIs and also to test the API along with it.

### HOW CAN WE ADD SWAGGER DOCUMENTATION TO THE APIS
we can document swagger in 2 different ways,

\*JSON<br />
\*YAML<br />
we can use any one formats to add documentation for the APIs, Here we will discuss both the format of writing documentation, first we will setup the swagger and give example for the both styles.

you can get complete code from my <a style="color: blue" href="https://github.com/MDPuneethReddy/swagger_node" target="_blank">https://github.com/MDPuneethReddy/swagger_node</a> , you can check out here.

## Swagger documentaion with JSON format:

### STEP1: INSTALL THE DEPENDENCIES
first we need to add the packages required to generate the swagger documenation they are swagger, swagger-jsdoc, swagger-ui-express

```
Yarn add swagger swagger-jsdoc swagger-ui-express
```

After installing the dependencies you can see in the package.json like this in the dependencies


<Image src="/images/posts/swagger-documentation-to-test-nodejs-restapis_img1.png">

if you are using typescript for the backend Nodejs RestAPI, you need to install types for your project, the types for swagger-jsdoc and swagger-ui-express
```
Yarn add @types/swagger-jsdoc @types/swagger-ui-express
```
![swagger-documentation-to-test-nodejs-restapis_img2.png](/images/posts/swagger-documentation-to-test-nodejs-restapis_img2.png)

### STEP 2: ADD CONFIGURATION TO JSON FILE
We need to configure the documentation how it should look, we will go set by step.
![swagger-documentation-to-test-nodejs-restapis_img3.png](/images/posts/swagger-documentation-to-test-nodejs-restapis_img3.png)

1.here first openapi is the swagger documentaion version , you can check the official documentation for that<br />
2.Next is the info about the API that need to have about the API, here the swagger is more about the documentation of the API, so we need to make sure that none missing in the documentation to look into code,<br />
3.In components section we add the securityschemas here we can add security to the documenation, in companys it is must, there are different types of securities given to the swagger you can choose based on the usecase
Next we can also add the servers that need to setup and reponse, we can add as many responses as we need, below you can see the url , you can add as many urls as you need

![swagger-documentation-to-test-nodejs-restapis_img4.png](/images/posts/swagger-documentation-to-test-nodejs-restapis_img4.png)

### STEP 3: SETUP THE DEPENDENCIES
1.import the json file into the main root file<br />
2.next setup the document to swaggerUI<br />
3.Here you can see below the line where the path “/api” refers we can see the documentation at that url, you can give your own path as you want.
![swagger-documentation-to-test-nodejs-restapis_img5.png](/images/posts/swagger-documentation-to-test-nodejs-restapis_img5.png)

So when you run the application and check the path, you can see like the below image, here you can add routes and schemas as you want

![swagger-documentation-to-test-nodejs-restapis_img6.png](/images/posts/swagger-documentation-to-test-nodejs-restapis_img6.png)

### SWAGGER DOCUMENTATION WITH YAML FORMAT:
The difference between the json and Yaml format is the file format and another package to support Yaml format,

The basic setup is the same we will convert the same json file into yaml file and configure with the setup

### STEP 1: MAKE A YAML FILE FOR THE CONFIGURATION
We rewrite the config file above in json file to yaml file so you can get good understanding of this,

![swagger-documentation-to-test-nodejs-restapis_img6.png](/images/posts/swagger-documentation-to-test-nodejs-restapis_img6.png)

### STEP 2: INSTALL YAMLJS :
we need to install yamljs package to help integrating the yaml file with swagger setup

```
Yarn add yamljs
```

if you are using typescript you need to add the scripts for yamljs
```
yarn add @types/yamljs
```

### STEP 3: ADD THE SETUP TO MAIN ROOT FILE
![swagger-documentation-to-test-nodejs-restapis_img7.png](/images/posts/swagger-documentation-to-test-nodejs-restapis_img7.png)

I just commented out the json file to show the difference, here the difference is to load the YAML file we need to use yamljs package and thats it the rest is same and after this when you run the application you can see the same output as of json.

### CONCLUSION:
Here we have discussed how to install and setup the dependencies for the swagger documentation along with both formats with JSON and YAML for both typescript and javascript.

If you like this article please share with your friends, if you want to see more technology blogs and projects please checkout the Blog .
<a style="color: blue" href="/">https://mdpuneethreddy.com/</a>