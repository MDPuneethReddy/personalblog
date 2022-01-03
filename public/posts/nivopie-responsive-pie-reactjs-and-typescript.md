---
date: "MAY 15,2021"
title: "NIVOPIE: RESPONSIVE PIE REACTJS AND TYPESCRIPT"
excerpt: "We will Create nivopie Responsive Pie Charts In ReactJs Apps With Typescript Using @nivo/pie Charts Library With Complete Explanation, Code."
tags:  ["REACTJS","NIVOPIE"]
slug: "nivopie-responsive-pie-reactjs-and-typescript"
---
The charts are very important to visualize the data. There are so many different types of charts to view the data. pie is one of the important charts which is widely used. In this blog, we will create a responsive nivopie to view the data. We will implement the “@nivo/pie” chart step by step with a complete explanation and code.

### OBJECTIVES:
1.Install dependencies<br />
2.Create sample data accordingly<br />
3.Pass data to the responsive Pie chart<br />
4.Solutions for most common bugs that occur while viewing in the frontend.<br />

### INSTALL DEPENDENCIES:
```
yarn add @nivo/core @nivo/pie
```

### SAMPLE DATA NIVOPIE:
Check out the official documentation  <a style="color: blue" href=" https://nivo.rocks/pie/ ">  https://nivo.rocks/pie/ </a>.

We can see the format of sample data to pass the values to the data in the documentation.
```
[
  {
    "id": "ruby",
    "label": "ruby",
    "value": 152,
    "color": "hsl(312, 70%, 50%)"
  },
  {
    "id": "haskell",
    "label": "haskell",
    "value": 543,
    "color": "hsl(249, 70%, 50%)"
  },
  {
    "id": "css",
    "label": "css",
    "value": 56,
    "color": "hsl(75, 70%, 50%)"
  },
  {
    "id": "go",
    "label": "go",
    "value": 481,
    "color": "hsl(1, 70%, 50%)"
  },
  {
    "id": "elixir",
    "label": "elixir",
    "value": 155,
    "color": "hsl(19, 70%, 50%)"
  }
]
```

Here we will need to consider the important things like id and value. The color you can specify or nivo will give random values.

we need to build the data as above to make it work.

### BUILD SAMPLE DATA FOR NIVOPIE:
Now we will build the data accordingly, first, we need the data as an array of objects. We will build data with id and value from the backend database.

you can format the values easily with “As” while writing a select query for example “select(“category As id”)”. So we can format easily.
```
const data=[
{id: "Stocks", value: "200"}
{id: "Fee", value: "2000"}
{id: "shopping", value: "6000"}
]
```
Now we will pass the data to the responsive pie chart.


```
<ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
```
The output will looks like this.

<Image src="/images/posts/nivopie-responsive-pie-reactjs-and-typescript_img1.png">

### GRAPH WON’T VISIBLE OR THE GRAPH EXTENDING PROBLEM:
The frequent problem occurs because we choose the responsive pie chart initially the value will be zero. To overcome this we will define a specific height in the parent component. To provide height to view and also not to extension of the graph. So we will provide height for the chart component.

To constraint the height of the chart because of the responsive charts we will need to provide heights.
```
<div style={{height:400}}>

    <ResponsivePieChart />
</div>
```

### CONCLUSION:
In this blog, we will create a responsive pie chart using nivopie. we created a sample data accordingly to pass the values to generate the pie chart. We have created a responsive pie chart with a complete explanation and code.

If you like the content, pass it to your friends.

For nivobar you can check out here  <a style="color: blue" href=" https://mdpuneethreddy.com/nivobar-responsive-bar-reactjs-and-typescript/
">  https://mdpuneethreddy.com/nivobar-responsive-bar-reactjs-and-typescript/
</a>. 
You can checkout articles   <a style="color: blue" href=" https://mdpuneethreddy.com/"> https://mdpuneethreddy.com</a>.