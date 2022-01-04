---
date: "MAY 4,2021"
title: "REACT-HOOK-FORM COMPLETE GUIDE WITH TYPESCRIPT"
excerpt:  "We Are Going To Discuss React-hook-form With Typescript with Validations, Error Handling in React Components With Complete Code And ..."
tags:  ["REACT-HOOK-FORM","REACTJS"]
slug: "react-hook-form-complete-guide-with-typescript"
---
In this blog, we are going to discuss react hook form with typescript and with examples. The primary goals of React-hook-form reduce the amount of code we need to write. It will remove the unnecessary re-renders.

### ADD REACT-HOOK-FORM :
```
Yarn add react-hook-form
```

Next, import useForm from React-hook-form at the top of the component
```
import { useForm } from "react-hook-form";
```

### CREATE FORM :
We will create a functional react component name “FormExample.tsx”.

Next, we have registered in useForm hook, here register means to register the form variables into it. As we added into register it will take care of changing values, error handling, etc.,

To Mention types we will have “type” which is an interface for the form fields and pass it to useForm. The handleSubmit will take care to submit values on completion of form and call the method.

In the below example we mentioned “submitFormValues” method to print the values.

The creating of form you can look into the below code.
```
import React from "react"
import { useForm } from "react-hook-form";
interface Iprops{

}

type FormFields={
        fullname: string,
        age:number,
        password:string,
        email:string
}
export const FormExample:React.FC<Iprops>=(props:Iprops)=>{
    const { register, handleSubmit,formState: { errors }} = useForm<FormFields>();
    const submitFormValues=(values:any)=>{
        console.log(values)
    }
    return(
        <div>
            <form onSubmit={handleSubmit(submitFormValue)}>
                <label>name</label>
                <input   name="fullname" /><br />
                <label>email</label>
                <input type="email" name="email" /><br />
                <label>password</label>
                <input type="password" name="password" /><br />
                <label>age</label>
                <input   name="age"/>
                <input type="submit" />
                </form>
        </div>
    )
}
```

### ADD VALIDATIONS REACT-HOOK-FORM:
We can add validations to the fields, Now we will add simple validation for email to be required.

So we will add required is equal to true for email Input field, we can add as many validations as we want.
```
 <input type="email" {...register("email",{required:true})} name="email" /><br />
```

### OUTPUT ERRORS REACT-HOOK-FORM:
When the error occurs, we can ouput the errors through console.log or on the frontend.

we will discuss both methods how to console log errors and also in the frontend.

### ADD ERRORS AT FRONTEND:
So now already we have added one validation for email at top. So print the errors to the users on the frontend we have state called errors in useForm hook.

Next use the errors state and check the email which is name given to the form field. If we get error from email print the span block.
```
const { register, handleSubmit,formState: { errors }} = useForm<FormFields>();
....
...
return(
...
<input type="email" {...register("email",{required:true})} name="email" /><br />
{errors.email && <span>This field is required</span>}<br />
....
)
```

### ADD ERRORS TO CONSOLE:
We can add errors to the console by using the method in the form submit. So, we already added the sumitFormValues method to get the values. If we get the errors, we can add another function to console log the errors.
```
 const errorFormValues=(errors:any)=>{
        console.log("error",errors)
}
return(
<div>
<form onSubmit={handleSubmit(submitFormValues,errorFormValues)}>
.....
....
</form>
</div>
)
```

### COMPLETE CODE:
check out the complete code below.
```
import React from "react"
import { useForm } from "react-hook-form";
interface Iprops{

}

export const FormExample:React.FC<Iprops>=(props:Iprops)=>{
    type FormFields={
        fullname: string,
        age:number,
        password:string,
        email:string
    }
    const { register, handleSubmit,formState: { errors }} = useForm<FormFields>();
    const submitFormValues=(values:any)=>{
        console.log(values)
    }
    const errorFormValues=(errors:any)=>{
        console.log("error",errors)
    }
    return(
        <div>
            <form onSubmit={handleSubmit(submitFormValues,errorFormValues)}>
                <label>name</label>
            <input  {...register("fullname")} name="fullname" /><br />
            <label>email</label>
            <input type="email" {...register("email",{required:true})} name="email" /><br />
            {errors.email && <span>This field is required</span>}<br />
            <label>password</label>
            <input type="password" {...register("password")} name="password" /><br />
            <label>age</label>
            <input  {...register("age")} name="age"/>
            <input type="submit" />
            </form>
        </div>
    )
}
```

### CONCLUSION:
In this blog, we saw how to use React-hook-form in react functional components. We checked how to add validations and error handling with complete code and explanation. We also saw to add validation errors to frontend and also add function to console log the errors.


If you like the content please share it with your friends, You can check more technology blogs here<a style="color: blue" href="/"> https://mdpuneethreddy.com</a>