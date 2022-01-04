---
date: "APRIL 16,2021"
title: "TYPEORM: MULTIPLE CONNECTIONS ,UNIT TESTING"
excerpt: "Add multiple connections to typeorm, change connections using getConnection and check out the CRUD operations with complete code."
tags:  ["TYPEORM","NODEJS"]
slug: "typeorm-multiple-connections-unit-testing"
---
In this blog we are going to create multiple connections to work with. Here multiple connections is the databases, as we know typeOrm is a object relational mapper, and we can have multiple database connections to work with and it is more comfortable to change databases without changing the code.

### PREREQUISITES:
\* Install Nodejs expressjs application up and running, if not checkout 
<a style="color: blue" href="/blog/expressjs-how-to-start-with-nodejs-and-expressjs/">https://mdpuneethreddy.com/blog/expressjs-how-to-start-with-nodejs-and-expressjs/</a>

\* setup typeorm with express app with single connection, if not checkout 
<a style="color: blue" href="/blog/crud-with-nodejs-expressjs-typeorm-postgres/">https://mdpuneethreddy.com/blog/crud-with-nodejs-expressjs-typeorm-postgres/</a>

### INSTALL DATABASES:
if you are using multiple databases, install in your project “pg” for postgres, “sqlite3” for sqlite which is memory database, you can checkout documentation <a style="color: blue" href="https://typeorm.io/#/" target="_blank">https://typeorm.io/#/</a>
 for other databases.

```
yarn add sqlite3
```
### SETUP MULTIPLE CONNECTION:

Add createConnections method from typeom which takes an array of connections, Add multiple connections, you add as many as you want, You need to give different names for each connection, Here I will add postgres and sqlite connections.

```
import { users } from "../entities/users";
import {  createConnections } from "typeorm";

export const connection = createConnections([{
  name:"development",
  type: "postgres" ,
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1234",
  database: "demo",
  entities: [users],
  synchronize: true,
  logging: false
},{
  name:"test",
  type:"sqlite",
  database:":memory:",
  entities:[users],
  synchronize:true
}]);
```

### MAKE CONNECTIONS:
connection will be imported into the main file, when connection is called basically it will create all the connections.

```
import * as express from "express"
import { connection } from "./connection/connection"
import { users } from "./entities/users"
import * as cors from "cors"

const app=express()
app.use(cors())
app.use(express.json())
const server=app.listen(3000,()=>{
    console.log("server running at 3000....")
})
app.get("/api",(req,res)=>{
    res.send("Welcome to API")
})
connection.then(
    async connection=>{
          
    }
).catch(error=>{
    console.log(error)
})
```
Now, we need to get the connection required based on your condition, which will take care by getConnection method.

### GETCONNECTION() TYPEORM:
getConnection() will takes one paramter , which is the name of the connection i.e getConnection(name:string),
```
const usersRepository = getConnection("development").getRepository(users);
```
Here the first connection name is development, so typeorm will take care to connect with the corresponding database. The complete CRUD operations for this example is<a style="color: blue" href="/blog/crud-with-nodejs-expressjs-typeorm-postgres/"> https://mdpuneethreddy.com/blog/crud-with-nodejs-expressjs-typeorm-postgres/</a>
, Now we will use the same example and we can do our CRUD operations using sqlite database.

### CRUD OPERATIONS FOR SQLITE:
When we use object relational mappers like TypeOrm, It will support same code for any database, It is a wrapper for the database, Now we will create the same CRUD operations with sqlite.

```
import * as express from "express"
import { connection } from "./connection/connection"
import { users } from "./entities/users"
import * as cors from "cors"
import { getConnection } from "typeorm"
const app=express()
app.use(cors())
app.use(express.json())
const server=app.listen(3000,()=>{
    console.log("server running at 3000....")
})
app.get("/api",(req,res)=>{
    res.send("Welcome to API")
})
connection.then(
    async connection=>{
        const usersRepository = getConnection("test").getRepository(users);
        app.get("/api/users",async (req,res)=>{
            const users=await usersRepository.find()
            res.send(users)
        })
        app.post("/api/users",async (req,res)=>{
            
            console.log("body",req.body)
            const user=await usersRepository.create(req.body)
            const results = await usersRepository.save(user);
            
      res.json({
        message: "success",
        payload: results
      });
    })
      app.get("/api/users/:id",async(req,res)=>{
        console.log("called")
          console.log(req.params.id)
          const user=await usersRepository.findOne({where: { id: req.params.id }})
          res.json({
              message:"success",
              payload: user
          })
      })
      app.delete("/api/users/:id",async(req,res)=>{
        const user=await usersRepository.delete(req.params.id)
        res.json({
            message:"success",
        })
    })
    app.put("/api/users/:id",async(req,res)=>{
        const user=await usersRepository.findOne(req.params.id)
        usersRepository.merge(user, req.body);
        const result = await usersRepository.save(user);
        res.json({
            message:"success",
            payload:result
        })
  
    })
        
    }
).catch(error=>{
    console.log(error)
})
```
### CONCLUSION:
In this blog we see how we can create multiple connections with typeorm. We added sqlite and postgres databases for mutliple connections. Next we saw how getConnection() method will be used when multiple connections are added. When we change the connection name from development to test the code for CRUD operations works normally.

If you like this article please share with your friends, if you want to see more technology blogs and projects please checkout the Blog .
<a style="color: blue" href="/">https://mdpuneethreddy.com/</a>
