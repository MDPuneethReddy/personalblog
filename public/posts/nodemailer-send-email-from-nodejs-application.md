---
date: "October 21, 2021"
title: "NODEMAILER: SEND EMAIL FROM NODEJS APPLICATION"
excerpt: "Send Email From Nodejs Applications Using Nodemailer Package and Test Emails Using Mailtrap To Capture Emails With Complete Code and ..."
tags:  ["NODEJS"]
slug: "nodemailer-send-email-from-nodejs-application"
---
Send Emails are becoming important in every application. So, In this article, we will see how we can send Emails in the nodejs applications. I will be using a package called “Nodemailer” to send emails. To test the application we will be using “mailtrap” which is a free service to test.

### Note:

You cant add a nodemailer package to the frontend. It is a node package.

### PREREQUISITES:

   \* Nodejs installed<br />
   \* local running server<br />

You can check out the articles here for the above prerequisites:
<a style="color: blue" href="/blog/expressjs-how-to-start-with-nodejs-and-expressjs">https://mdpuneethreddy.com/blog/expressjs-how-to-start-with-nodejs-and-expressjs</a>.

### OBJECTIVES:

   \* Install Nodemailer<br />
   \* Add Post request in backend<br />
   \* mailtrap.io to test the endpoint<br />
   \* Send Email<br />

### INSTALL NODEMAILER:

You can add the Nodemailer package using yarn or npm. I will be using yarn

```
yarn add nodemailer

```

### ADD POST REQUEST IN THE BACKEND :

We will create an endpoint to send the email. Here I will be creating a post request to send the email.

```
app.post("/api/sendMail",(req,res)=>{

})
```
### SEND EMAIL:

Import nodemailer into the file

```
import * as nodemailer from "nodemailer"
```

Further we can use Gmail to capture the traffic or we can use a testing site to capture the traffic. I would personally recommend having a testing site than your Gmail.

In this article, I will be using “mailtrap” to capture the traffic.<br />

Below are the steps to create an account in mailtrap.

![mailtrap.io](/images/posts/nodemailer-send-email-from-nodejs-application_img1.png)
    \* visit link <a style="color: blue" href="https://mailtrap.io/" target="_blank">mailtrap.io</a><br />
    \* Next signup and login<br />
    \* Select nodemailer in integartions, you can see something like below. In integrations, choose Nodemailer.<br />
copy the code and paste it into the file as below.

```
import * as nodemailer from "nodemailer"
------
var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "username"
    pass: "password"
  }
});
------
app.post("/api/sendMail",(req,res)=>{

})
```
\* The final step, is to add mail options and send the mail.

```
const mailOptions = {
        from: you@gmail.com// host address
        to: client@gamil.com, 
        subject: "test Email", 
        html: "Testing Mail" 
      };
      
transporter.sendMail(mailOptions,  (err, info)=> {
        if(err)
          res.status(400).send({error:"failed to send"})
        else
          res.send({message:"Successfully sent"})
     });
```
\* You can check below for the complete code for sending an email. You can customize the mail options from the request body. Nodemailer also supports sending HTML elements, So you can create a template and send the message.

```
import * as nodemailer from "nodemailer"

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "username"
    pass: "password"
  }
});

app.post("/api/sendMail",(req,res)=>{

const mailOptions = {
        from: you@gmail.com// host address
        to: client@gamil.com, 
        subject: "test Email", 
        html: "Testing Mail" 
      };
      
transporter.sendMail(mailOptions,  (err, info)=> {
        if(err)
          res.status(400).send({error:"failed to send"})
        else
          res.send({message:"Successfully sent"})
     });
})
```
### CONCLUSION:
In this article, we had seen how to add email functionality in the Nodejs application using the Nodemailer package. Then we also saw how to test the email using mailtrap. If you like this article please share it with others.

You can also check out articles on different technologies
<a style="color: blue" href="/">https://mdpuneethreddy.com</a> .

I added the email functionality in one of my React. You can check out the complete code from
<a style="color: blue" href="https://github.com/MDPuneethReddy/twoWayAuthentication_nodemailer_reactjs/blob/main/server/index.ts" target="_blank">https://github.com/MDPuneethReddy/twoWayAuthentication_nodemailer_reactjs/blob/main/server/index.ts</a>


