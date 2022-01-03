---
date: "MARCH 15,2021"
title: "NIVOBAR: RESPONSIVE BAR REACTJS AND TYPESCRIPT"
excerpt: "We Will Create nivobar Responsive Bar Charts In ReactJs Apps With Typescript Using @nivo/bar Charts Library With Complete Explanation, Code."
tags:  ["REACTJS","NIVOBAR"]
slug: "nivobar-responsive-bar-reactjs-and-typescript"
---
The charts are very important to visualize the data. There are so many different types of charts to view the data. The bar is one of the important charts which is widely used. In this blog, we will create a responsive nivobar to view the data. We will implement the “@nivo/bar” chart step by step with a complete explanation and code.

### OBJECTIVES:
1.Install dependencies<br />
2.Create sample data accordingly<br />
3.Pass data to the responsive Bar chart<br />
4.Solutions for most common bugs that occur while viewing in the frontend.<br />

### INSTALL DEPENDENCIES:
```
yarn add @nivo/core @nivo/bar
```

### SAMPLE DATA NIVOBAR:
Check out the official documentation here  <a style="color: blue" href=" https://nivo.rocks/bar/" target="_blank"> https://nivo.rocks/bar/</a>.



We can see the format of sample data to pass the values to the data in the documentation.
```
[
  
  {
    "country": "AG",
    "hot dog": 103,
    "hot dogColor": "hsl(99, 70%, 50%)",
    "burger": 57,
    "burgerColor": "hsl(255, 70%, 50%)",
    "sandwich": 138,
    "sandwichColor": "hsl(58, 70%, 50%)",
    "kebab": 17,
    "kebabColor": "hsl(336, 70%, 50%)",
    "fries": 131,
    "friesColor": "hsl(289, 70%, 50%)",
    "donut": 86,
    "donutColor": "hsl(122, 70%, 50%)"
  },
  {
    "country": "AI",
    "hot dog": 121,
    "hot dogColor": "hsl(284, 70%, 50%)",
    "burger": 77,
    "burgerColor": "hsl(12, 70%, 50%)",
    "sandwich": 198,
    "sandwichColor": "hsl(134, 70%, 50%)",
    "kebab": 189,
    "kebabColor": "hsl(338, 70%, 50%)",
    "fries": 105,
    "friesColor": "hsl(252, 70%, 50%)",
    "donut": 89,
    "donutColor": "hsl(219, 70%, 50%)"
  }

]
```

Here we will need to consider the important things like indexBy and keys. We need to build the data as above to make it work. I will need to create a graph similar to the below figure.
<Image src="/images/posts/nivobar-responsive-bar-reactjs-and-typescript_img1.png">

### BUILD SAMPLE DATA FOR NIVOBAR:
Now we will build the data accordingly, first, we need the data as an array of objects. Next we have categories and for each category we will have some specific value. Check the below data.
```
const data=[
{id: "shopping", value: "6000"}
{id: "bill", value: "200"}
{id: "Stocks", value: "200"}
{id: "Fee", value: "2000"}
]
```
Now we will need to pass the data to the responsive bar chart. While passing the data, we need to mention in the keys what we need to see in the graph. So we will mention the value in keys and indexBy as id as individual bars.

```
<ResponsiveBar
            data={data}
            keys={["value"]}
            indexBy="id"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'nivo' }}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'categories',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'values',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
        />
```
### GRAPH WON’T VISIBLE OR THE GRAPH EXTENDING PROBLEM:
The frequent problem occurs because we choose the responsive bar chart initially the value will be zero. To overcome this we will define a specific height in the parent component.

To provide height to view and also not to extension of the graph. So we will provide height for the chart component. To constraint the height of the chart because of the responsive charts we will need to provide heights.
```
<div style={{height:400}}>
    <ResponsiveBarChart />
</div>
```

### CONCLUSION:
In this blog, we will create a responsive bar chart using nivobar. we created a sample data accordingly to pass the values to generate the bar chart. We have created a responsive bar chart with a complete explanation and code.

For nivopie you can check out here  <a style="color: blue" href="https://mdpuneethreddy.com/nivopie-responsive-pie-reactjs-and-typescript/
"> https://mdpuneethreddy.com/nivopie-responsive-pie-reactjs-and-typescript/
</a>. 
You can checkout articles   <a style="color: blue" href=" https://mdpuneethreddy.com/"> https://mdpuneethreddy.com</a>.

