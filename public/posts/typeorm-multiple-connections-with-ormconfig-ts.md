---
date: "APRIL 21,2021"
title: "TYPEORM MULTIPLE CONNECTIONS WITH ORMCONFIG.TS"
excerpt: "Typeorm Multiple Connections Setup In OrmConfig.ts file and create connection function to create Individual connections using typescript."
tags:  ["TYPEORM","NODEJS"]
slug: "typeorm-multiple-connections-with-ormconfig-ts"
---
We know with TypeOrm we can connect with multiple databases with multiple schemas. We can define these multiple connections differently, we Already made a blog using createConnections and get single connection using getConnection.

So In this blog we will connect using ormconfig.ts file with multiple connections.

### PREREQUISITES:

\*create expressjs, nodejs API running locally, you can get complete setup steps <a style="color: blue" href="/blog/expressjs-how-to-start-with-nodejs-and-expressjs/">https://mdpuneethreddy.com/blog/expressjs-how-to-start-with-nodejs-and-expressjs/</a><br />
\*setup typeorm in expressjs, nodejs API, you will get complete guide 
<a style="color: blue" href="/blog/crud-with-nodejs-expressjs-typeorm-postgres/">https://mdpuneethreddy.com/blog/crud-with-nodejs-expressjs-typeorm-postgres/</a>.<br />
\*you can test the APIs using swagger and postman, if you want to setup swagger, you will get complete setup<a style="color: blue" href="/blog/swagger-documentation-to-test-nodejs-restapis/">https://mdpuneethreddy.com/blog/swagger-documentation-to-test-nodejs-restapis/</a>.<br />

### CREATE ORMCONFIG.TS FOR TYPEORM MULTIPLE CONNECTIONS:
First we will create ormconfig.ts file in the root repository in the level of package.json file. Then we will Add multiple database connections with different names. As a result we can identify different connections using the unique names.

```
import { users } from "./entities/users";
export default[{
    name:"development",
    type: "postgres" ,
    host: "localhost",
    port: 5432,
    username: process.env.username,
    password: process.env.password,
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
  }]
```
### CREATE CONNECTION.TS FOR TYPEORM MULTIPLE CONNECTIONS:
We will create connection using createConnection method from typeorm. we can pass parameter which is name of the connection. When the createConnection method is called using the unique name, it automatically check for connection options in ormconfig file.
```
import { createConnection } from "typeorm"

export const connection=
    createConnection("development")
```

Now we will call the connection before using it. using the connection we can connect to corresponding entities.

```
connection.then(
    async connection=>{
        const usersRepository = connection.getRepository(users);
  }
).catch(error=>{
    console.log(error)
})
```
Now we can add CRUD operations inside connection.

```
import * as express from "express"
import { users } from "./entities/users"
import * as cors from "cors"
import { connection } from "./connection/connection"
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
        const usersRepository = connection.getRepository(users);
        console.log(connection)
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

Here In this blog, we have seen how to create multiple connections in ormconfig.ts, next In the multiple connections we gave unique names. We created a function connection to create a specific result as a result we can connect using create connection method with unique name. So we can create different connections and connect with different schemas easily.

If you like this blog, please share with your friends, you can checkout <a style="color: blue" href="/">https://mdpuneethreddy.com</a>, for the content on technologies.