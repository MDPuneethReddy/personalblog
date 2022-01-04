---
date: "JUNE 10,2021"
title: "JEST SUPERTEST: UNIT TESTING WITH NODEJS, TYPESCRIPT, SQLITE3"
excerpt: " Automated Unit Testing For NodeJs App With Typescript, sqlite3 Using Jest and supertest. CRUD operations for SQLite DB with complete code."
tags:  ["SQLITE3","NODEJS"]
slug: "jest-supertest-unit-testing-with-nodejs-typescript-sqlite3"
---

In this article, we will see how to add automated unit testing for Nodejs backend applications with typescript using jest and supertest. And also complete guide to adding SQLite to the backend server with CRUD operations.

### PREREQUISITES:
Nodejs-expressjs server running locally. If you don’t have, please check out <a style="color: blue" href="/blog/expressjs-how-to-start-with-nodejs-and-expressjs/">https://mdpuneethreddy.com/blog/expressjs-how-to-start-with-nodejs-and-expressjs/</a>
 

### OBJECTIVES:
\* Add SQLite database for Nodejs server<br />
\* Create router for endpoints<br />
\* CRUD operations for SQLite<br />
\* Examples of status codes and Error Handling<br />
\* Unit testing with jest and supertest and complete setup<br />
you can check out complete code<a style="color: blue" href="https://github.com/MDPuneethReddy/sqlite_nodejs_jest_supertest" target="_blank">https://github.com/MDPuneethReddy/sqlite_nodejs_jest_supertest</a>
  here.

### INITIAL NODEJS-SERVER:
```
import  express from "express"
import cors from "cors"

const app=express()
app.use(cors())
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("welcome to backend server")
})
const PORT=process.env.PORT || 3000
export const server=app.listen(PORT,()=>{
    console.log("server listening at 3000")
})
server.on("error",console.error)
```

### INSTALL SQLITE3:
```
Yarn add sqlite3 @types/sqlite3
```
### CREATE DATABASE AND TABLE:
\*Create “db.ts” file inside “sqlitedb” folder.<br />
\*import sqlite3<br />
\*create a database, name it as “db.sqlite” and create a table, name as users inside the database<br />
\*export database<br />
For example, In this article, I will create users table with name and email as parameters.
```
import * as sqlite3 from "sqlite3"
const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE,(err:any) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        const sqlCreate=
        `CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            email text UNIQUE,
            CONSTRAINT email_unique UNIQUE (email)
            );`;
        db.run(sqlCreate, err => {
            if (err) {
                return console.error(err.message);
            }
            console.log("Successful creation of the 'users' table");
        });
    }
})
export default db
```

### CREATE ROUTER FOR ENDPOINTS:
Create a separate folder called “modules” for all endpoints. For users endpoints create a file called “usersRouter.ts”. import express, and create and export usersRouter

Import the usersRouter in the “index.ts” file. Next, the app will redirect if the endpoint starts with “/api/users” to the usersRouter.

```
// modules/usersRouter.ts

import * as express from "express"
const usersRouter = express.Router();
export default usersRouter

// index.ts
import usersRouter from "./modules/usersRouter"
app.use("/api/users",usersRouter)
```

## CRUD OPERATIONS:
### GET ALL USERS:
\* create a SQL query to get all users from users table<br />
\* db.all will get the array of values according to the SQL query<br />
\* When the query is executed, if we get an error we will send status as 400 and with a message.<br />
To test the endpoints you can use postman or if you are using VScode, you can use this extension called thunder-client which is similar to the postman.

You can check out here <a style="color: blue" href="/blog/thunder-client-vscode-extension-over-postman/"> https://mdpuneethreddy.com/blog/Thunder-client-vscode-extension-over-postman/</a>

```
import * as express from "express"
import db from "../sqlitedb/db";
const usersRouter = express.Router();
//get all users
usersRouter.get("/",(req,res)=>{
    const getQuery="SELECT * FROM users"
    db.all(getQuery, (err:any, rows:any) => {
        console.log(rows)
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
})
```

### POST NEW USER:
For post request the data we got from the body of the request. Then Insert the values into users table.

In the code below, we have “?”, which helps get rid of “SQL INJECTION” attacks. If you include the values directly as “values(data.name, data.email) ” inside the request, the subqueries can be added easily, leading to a change in the data or even lose complete data.

So, pass the values as inside parameters property and align them accordingly.

```
usersRouter.post("/",(req,res)=>{
    const data = {
      name: req.body.name,
      email: req.body.email
    }
    console.log(data)
    const sql ="INSERT INTO users (name, email) VALUES (?,?)";
    const params =[data.name, data.email]
    db.run(sql, params, (err:any, result:any)=>{
      if (err){
          res.status(400).json({"error": err.message})
          return;
      }
      res.json({
          "message": "success",
      })
    })
})
```

### GET SINGLE USER:
To get the single user, first, you can check whether the user presents in the table or not. If the user presents proceeds to get the user details, if not send the response as “User NotFound” with the status code 404.

There will be a better way of writing the code, but it will be simple and understandable well.
```
usersRouter.get("/user",(req,res)=>{
    const id=req.body.userId
    console.log("id",id)
    const getQuery="SELECT * FROM users WHERE id=?"
    const params=[id]
    db.get(getQuery,params, (err:any, row:any) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        if(typeof row==="undefined"){
            res.status(404).send({
                "message":"User NotFound"
            })
            return
        }
        res.json({
            "message":"success",
            "data":row
        })
      });
})
```

### DELETE USER:
Deleting the user after checking if the user present in the table or not.

```
usersRouter.delete("/",(req,res)=>{
  const data = {
    id: req.body.id
  }
  console.log(data)
  //check the user
  const getQuery="SELECT * FROM users WHERE id=?"
    const params=[data.id]
    db.get(getQuery,params, (err:any, row:any) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        if(typeof row==="undefined"){
            res.status(404).send({
                "message":"User NotFound"
            })
            return
        }
        const sql ="DELETE FROM users WHERE id=?";
        const params1 =[data.id]
        db.run(sql, params1, (err:any, result:any)=>{
          if (err){
              res.status(400).json({
                "message":err.message
              })
              return;
          }
          res.json({
              "message": "success",
          })
        })
      })
})
```

### UPDATE USER:
Update the user details after getting the details from the body of the request. In the below code, I didn’t check if the user presents or not, you can add.

```
usersRouter.put("/",(req,res)=>{
  const data = {
    id:req.body.id,
    name: req.body.name,
    email: req.body.email
  }
  console.log(data)
  const sql ="UPDATE users SET name=?,email=? WHERE id=? ";
  const params =[data.name, data.email,data.id]
  db.run(sql, params, (err:any, result:any)=>{
    if (err){
        res.status(400).json({"error": err.message})
        return;
    }
    res.json({
        "message": "success",
    })
  })
})
```

## UNIT TESTING WITH JEST AND SUPERTEST:
### INSTALL JEST:
```
yarn add jest @types/jest ts-jest
```

Create “jest.config.js” and add the below code.
```
module.exports={
    preset: 'ts-jest/presets/js-with-babel'
}
```
In “tsconfig.json” add the below code. If the file does not exist create “tsconfig.json” at the topmost.
```
{
    "compilerOptions": {
        "esModuleInterop": true
    }
}
```
### ADD SUPERTEST:
```
yarn add supertest @types/supertest
```

### ADD UNIT TESTS FOR USERROUTER ENDPOINTS:
\*Import supertest
\*import app from “index.ts” file, to export change “const app=express()” to “export const app=express()“.
\*Jest will provide the interface to test the outputs.
Create a “describe” block to test all the endpoints. Next, for individual tests add the “it” block. Next, we will build the request and get the response. Here supertest makes use of the app and runs over tests parallelly. It processes our requests.

Next, I created the tests for only Get and Post requests. There are examples for checking other status codes and error messages also. For example, in the unique email, if the user enters with the same email already present in the table it responds with status code “400” according to the code we mentioned above.
```
import {app} from '../index' 
import request from 'supertest'
describe("test users endpoints",()=>{
    it("test get all users",async()=>{

        const res = await request(app)
                    .get('/api/users')
        expect(res.status).toBe(200)
    })
    it("post user",async()=>{
        const res = await request(app)
                    .post('/api/users')
                    .send({
                        name:"puneeth",
                        email:"puneeth@gmail.com"
                    })
        expect(res.status).toBe(200)
      
    })
    it("post user gives error for unique email",async()=>{
        const res = await request(app)
                    .post('/api/users')
                    .send({
                        name:"puneeth",
                        email:"puneeth@gmail.com"
                    })
        expect(res.status).toBe(400)
      
    })
    it("test get single user",async()=>{
        const res = await request(app)
                    .get('/api/users/user')
                    .send({
                        userId:1
        })
        expect(res.status).toBe(200)
      
    })
    it("fail test get single user",async()=>{
        const res = await request(app)
                    .get('/api/users/user')
                    .send({
                        userId:100
                    })
        expect(res.status).toBe(404)
    })
    
})
```

### CONCLUSION:
In this article, we have seen how to add SQLite database to nodejs server, CRUD operations for the users’ table. Setup jest and supertest for unit testing the endpoints, Added tests for endpoints with complete explanation and code.

You can checkout complete code <a style="color: blue" href="https://github.com/MDPuneethReddy/sqlite_nodejs_jest_supertest" target="_blank">https://github.com/MDPuneethReddy/sqlite_nodejs_jest_supertest</a>
  here.

If you like this, please share it with the others.

If you want to check out the articles on different technology stacks, please check out here <a style="color: blue" href="/">https://mdpuneethreddy.com/</a>
 