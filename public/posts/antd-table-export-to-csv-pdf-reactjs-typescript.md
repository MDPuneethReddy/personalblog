---
date: "MAY 6,2021"
title: "ANTD TABLE EXPORT TO CSV, PDF REACTJS TYPESCRIPT"
excerpt: "We will use react-csv to export the Antd table to a CSV file. We will use react-to-print to export to the PDF file in the Reactjs."
tags:  ["REACTJS","ANTD"]
slug: "antd-table-export-to-csv-pdf-reactjs-typescript.md"
---
We will export Antd table to csv and pdf using “react-csv” and “react-to-print”. We will use “react-csv” to export the Antd table to a CSV file. Next, we will use “react-to-print” to export and table to PDF file.

### CREATE ANTD TABLE:
Check out the official documentation for Antd <a style="color: blue" href="https://ant.design/" target="_blank">https://ant.design/</a> . Add antd dependency
```
yarn add antd
```

First, we will create an Antd Table in the Reactjs functional component. We will create the columns and we will add some sample data in the list and pass that columns and list to the Antd table.
```
import { Table} from "antd";
import React  from "react"
interface Iprops{
   
}
export const PrintList:React.FC<Iprops>=(props:Iprops)=>{
  const list=[
    {"category":"credit","amount":200},
    {"category":"debit","amount":100},
    {"category":"debit","amount":100},
  ]
    const columns = [
         {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
          },
        {
          title: 'Amount',
          dataIndex: 'amount',
          key: 'amount',
        },
    ]
    return(
      <div style={{width:"100%"}} >
        {myList && 
        <Table  defaultExpandAllRows={true} columns={columns} dataSource={myList} />
        }
        </div>
        
    )
}
```

### EXPORT ANTD TABLE TO CSV FILE:
Add “react-csv” dependency to the project.
```
yarn add react-csv
```

Now we will import CSVLink from react-csv at top of the component.
```
import {CSVLink} from "react-csv"
```

Now use CSVLink inside the component. We pass the list to the CSVLink and we can give our own name to download the file.
```
             <CSVLink
              filename={"Expense_Table.csv"}
              data={myList}
              className="btn btn-primary"
            >
              Export to CSV
            </CSVLink> 
```
Check out the complete code below to export the table to CSV file.
```
import { Button, Table} from "antd";
import {CSVLink} from "react-csv"
import React from "react"
interface Iprops{
   
}
export const PrintList:React.FC<Iprops>=(props:Iprops)=>{
  const list=[
    {"category":"credit","amount":200},
    {"category":"debit","amount":100},
    {"category":"debit","amount":100},
  ]
    const columns = [
          {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
          },
        {
          title: 'Amount',
          dataIndex: 'amount',
          key: 'amount',
    
        }
    ]
    return(
      <div style={{width:"100%"}} >
          <Button type="primary">
        <CSVLink
              filename={"Expense_Table.csv"}
              data={props.myList}
              className="btn btn-primary"
              onClick={()=>{
                message.success("The file is downloading")
              }}
            >
              Export to CSV
            </CSVLink> 
            </Button>
        {myList && 
        <Table  defaultExpandAllRows={true} columns={columns} dataSource={myList} />
        }
        </div>
    )
}
```

### PRINT TABLE TO PDF FILE:
Add “react-to-print” dependency to the project.
```
yarn add react-to-print
```

Now we will import useReactToPrint from react-csv at top of the component.
```
import { useReactToPrint } from 'react-to-print';
```

Next, we will create a button “Export to PDF”. Here the interesting part comes the “react-to-print” will print the content, So we will give the reference to Table and add that reference to the “handlePrint” method to print after the onClick method is called.

Check out the complete below. We covered the Table with div and gave the ref using useRef() hook.
```
import { Button, Table} from "antd";
import { useReactToPrint } from 'react-to-print';
import React, { useRef } from "react"
interface Iprops{
   
}
export const PrintList:React.FC<Iprops>=(props:Iprops)=>{
  const list=[
    {"category":"credit","amount":200},
    {"category":"debit","amount":100},
    {"category":"debit","amount":100},
  ]
  const componentRef = useRef<any>();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
    const columns = [
          {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
          },
        {
          title: 'Amount',
          dataIndex: 'amount',
          key: 'amount',
    
        },
    ]
    return(
      <div>
        <Button onClick={handlePrint} type="primary" danger> Export to PDF </Button>
        <div ref={componentRef}>
        {myList && 
        <Table  defaultExpandAllRows={true} columns={columns} dataSource={myList} />
        }
        </div>
    )
}
```
Now we will add both methods for the table. Check out the complete Code below.
```
import { Button, message, Space, Table} from "antd";
import { DeleteOutlined,EditOutlined,FilePdfOutlined} from '@ant-design/icons';
import { useReactToPrint } from 'react-to-print';
import {CSVLink} from "react-csv"
import React, { useRef } from "react"
interface Iprops{
}
export const PrintList:React.FC<Iprops>=(props:Iprops)=>{
const myList=[
    {"category":"credit","amount":200},
    {"category":"debit","amount":100},
    {"category":"debit","amount":100},
  ]
  const componentRef = useRef<any>();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
 const columns = [
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
          },
          
        {
          title: 'Amount',
          dataIndex: 'amount',
          key: 'amount',
    
        }
       ]
    return(
      <div style={{width:"100%"}} >
        <Space style={{float:"right"}}>
//  Export to CSV
          <Button type="primary">
        <CSVLink
              filename={"Expense_Table.csv"}
              data={props.myList}
              className="btn btn-primary"
              onClick={()=>{
                message.success("The file is downloading")
              }}
            >
              Export to CSV
            </CSVLink> 
// Export to PDF
            </Button>
        <Button onClick={handlePrint} type="primary" danger><FilePdfOutlined /> Export to PDF </Button>
        </Space>
// Antd table
        <div ref={componentRef}>
        {myList && 
        <Table  defaultExpandAllRows={true} columns={columns} dataSource={myList} />
        }
        </div>
        </div>
    )
}
```
Check out<a style="color: blue" href=" https://www.npmjs.com/package/react-to-print" target="_blank"> https://www.npmjs.com/package/react-to-print</a>,  <a style="color: blue" href="https://www.npmjs.com/package/react-csv" target="_blank">https://www.npmjs.com/package/react-csv</a>  ,  documentations.


### CONCLUSION:
In this blog, we have created an table and we use “react-csv” to export the table to the CSV file. We used “react-to-print” to export antd table to PDF file in Reactjs functional component using typescript and useRef hook with complete code and explanation.

If you like the content please share it with your friends, You can check more technology blogs here<a style="color: blue" href="/"> https://mdpuneethreddy.com</a> 