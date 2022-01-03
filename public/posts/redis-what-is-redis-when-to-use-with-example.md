---
date: "APRIL 6,2021"
title: "REDIS- WHAT IS REDIS, COMMANDS WITH EXAMPLES"
excerpt: "setup redis on windows? Play with some commands over data structures. What is Redis? Redis is a in- memory data store, where we can save the ..."
tags:  ["REDIS","NODEJS"]
slug: "redis-what-is-redis-when-to-use-with-example"
---
### OBJECTIVES:
\* what is redis?<br />
\* what is the use?<br />
\* setup redis on windows?<br />
\* Play with some commands over data structures<br />
### WHAT IS REDIS?
Redis is a in- memory data store, where we can save the data which is processed. Redis supports good amount of data structures strings, lists, maps, sets, sorted lists etc.,

Redis stores the values as a key value pair, we will see some examples how it is going to store in this blog below. so basically we will use redis for cache the data.

Cache the data means to store the data which is processed or API calls response data etc., files, images all data that is stored is called Caching.

### WHAT IS THE USE OF REDIS?
We can see above as it will store or cache the data and also it supports different types of data structures, we can reuse the data again without processing again.

so we can use this functionality when the parameters to process to get the data don’t change frequently, if it don’t change frequently, we can cache the data or store the data in some structure to reuse again, so here comes Redis server.

### SETUP REDIS SERVER ON WINDOWS
you can download this windows version form <a style="color: blue" href="https://github.com/dmajkic/redis/downloads">https://github.com/dmajkic/redis/downloads</a>.

Download the zip and extract the folder, you can see 2 files in it redis.server and redis.client, open both the applications

By default Redis server run on localhost and port 6379

when you open both redis server and redis client we will see like this,

this is redis server , which wont stop it will accept the client connection

![redis-what-is-redis-when-to-use-with-example_img1.png](/images/posts/redis-what-is-redis-when-to-use-with-example_img1.png)
now we will see some operations to store data in redis server from redis client

This is how by default redis-client will look

![redis-what-is-redis-when-to-use-with-example_img2.png](/images/posts/redis-what-is-redis-when-to-use-with-example_img2.png)
## COMMANDS OVER DATA STRUCTURES:
### STRINGS:
### SET AND GET:
Here in the below image we set the key value pair and get the value by key

for example: set is the command here, username is the key and puneeth is the value

next we can get the value by calling key using get command
![redis-what-is-redis-when-to-use-with-example_img3.png](/images/posts/redis-what-is-redis-when-to-use-with-example_img3.png)
### DEL:
to delete the key we use “del” command to delete the key

![redis-what-is-redis-when-to-use-with-example_img4.png](/images/posts/redis-what-is-redis-when-to-use-with-example_img4.png)

### APPEND:
This command will helps to append the string to existing value
![redis-what-is-redis-when-to-use-with-example_img5.png](/images/posts/redis-what-is-redis-when-to-use-with-example_img5.png)

### MSET:
set multiple key value using “mset-multiple set”

![redis-what-is-redis-when-to-use-with-example_img6.png](/images/posts/redis-what-is-redis-when-to-use-with-example_img6.png)
mset followed by key and value pairs

you can get the value by specific key,

![redis-what-is-redis-when-to-use-with-example_img7.png](/images/posts/redis-what-is-redis-when-to-use-with-example_img7.png)

### LISTS:
Redis can store the list values, here we will see the key words to set the list

LPUSH,RPUSH:
lpush- push from left
rpush- push from right
![redis-what-is-redis-when-to-use-with-example_img8.png](/images/posts/redis-what-is-redis-when-to-use-with-example_img8.png)
here we first push from left in the key usernames and the value is puneeth

next again we push from left to the same key and the value is midhun, now you might figure it out the order of usernames is “midhun” and next “puneeth”

next we will try to add from right side and check the order,

### LRANGE:
to check the order we have a key to use command ” lrange- list range ” and next we need to set the key and the range of values to get “start and stop offset”, then we will get the values from the server
![redis-what-is-redis-when-to-use-with-example_img9.png](/images/posts/redis-what-is-redis-when-to-use-with-example_img9.png)

### LINDEX:
If you want to get by index there is a command called “lindex – list index” , below screenshot will give you clear explanation

![redis-what-is-redis-when-to-use-with-example_img10.png](/images/posts/redis-what-is-redis-when-to-use-with-example_img10.png)

get list index of the list which is a key and the index on that list to retrieve the value.

### LLEN:
To find the length of the list we can use the command “llen- list length”
![redis-what-is-redis-when-to-use-with-example_img11.png](/images/posts/redis-what-is-redis-when-to-use-with-example_img11.png)

### LPOP,RPOP:
Remove the leftmost of the list we use “lpop-left pop” and to remove right most element of the list we use “rpop-right pop” and the output it gives the removed elements

![redis-what-is-redis-when-to-use-with-example_img12.png](/images/posts/redis-what-is-redis-when-to-use-with-example_img12.png)

### LREM:
To remove the elements from the list we can use “lrem- list remove”, I inserted some elements into the list, and you can see below to see the elements we used lrange

![redis-what-is-redis-when-to-use-with-example_img13.png](/images/posts/redis-what-is-redis-when-to-use-with-example_img13.png)
so we will remove the puneeth from the above list using lrem

![redis-what-is-redis-when-to-use-with-example_img14.png](/images/posts/redis-what-is-redis-when-to-use-with-example_img14.png)
lrem-command

usernames-list or key

1- no of occurences to remove

puneeth-value of the occurence to remove

so basically it will remove 1 “puneeth” from left

So, now we will do another example

![redis-what-is-redis-when-to-use-with-example_img15.png](/images/posts/redis-what-is-redis-when-to-use-with-example_img15.png)
Now we removed 2 occurences of “puneeth” from left and the output left in the list ,

if you want to remove from right side we can just add negative value to the no of occurences then it will remove the elements from right side

![redis-what-is-redis-when-to-use-with-example_img16.png](/images/posts/redis-what-is-redis-when-to-use-with-example_img16.png)

### RPOPLPUSH:
we have a commond rpoplpush to remove the right most element of one list and add to left side of another list
![redis-what-is-redis-when-to-use-with-example_img17.png](/images/posts/redis-what-is-redis-when-to-use-with-example_img17.png)
In the above example created the subjects list and used command rpoplpush , first it pop from username from right side and add to the left side of another list.

### SETS:
Sets is a data structure to store the unique values with no order, We we will see some commands that will operate the sets

### SADD:
“SADD-set add” to add the element into the set
![redis-what-is-redis-when-to-use-with-example_img18.png](/images/posts/redis-what-is-redis-when-to-use-with-example_img18.png)

### SMEMBERS:
“SMEMBERS- set members” to check all the values in the set

![redis-what-is-redis-when-to-use-with-example_img19.png](/images/posts/redis-what-is-redis-when-to-use-with-example_img19.png)

### SREM:
“SREM- set remove” to remove the value present in the key

![redis-what-is-redis-when-to-use-with-example_img20.png](/images/posts/redis-what-is-redis-when-to-use-with-example_img20.png)

### SCARD:
set card is used to know number of elements in the set
![redis-what-is-redis-when-to-use-with-example_img21.png](/images/posts/redis-what-is-redis-when-to-use-with-example_img21.png)

### SPOP:
set pop to remove an element from the key, it will remove any element as set usually dont have the order
![redis-what-is-redis-when-to-use-with-example_img22.png](/images/posts/redis-what-is-redis-when-to-use-with-example_img22.png)

### HASHMAPS:
Redis Hashes are maps between the string fields and the string values. Hence, they are the perfect data type to represent objects.

### HMSET:
hmset is the mapping the key value pairs and store in the key. Here in the below example mixthings is hashmap key to store all key value pairs like one-1,two-2, machine learning-AI

![redis-what-is-redis-when-to-use-with-example_img23.png](/images/posts/redis-what-is-redis-when-to-use-with-example_img23.png)

### HGETALL:
hashmap get all command used to get all the key value pairs in the hashmap key, so for the above example we will get all the key value pairs from hashmap key

![redis-what-is-redis-when-to-use-with-example_img24.png](/images/posts/redis-what-is-redis-when-to-use-with-example_img24.png)

### HGET:
hget to get the single keys value from the hashmap key

![redis-what-is-redis-when-to-use-with-example_img25.png](/images/posts/redis-what-is-redis-when-to-use-with-example_img25.png)

### HEXISTS:
hexists to let us know that key is present in the hashmap or not, if it gives output as 1 then present, 0-not present

![redis-what-is-redis-when-to-use-with-example_img26.png](/images/posts/redis-what-is-redis-when-to-use-with-example_img26.png)

### HKEYS:
hkeys to get all the keys present in the hashmap

![redis-what-is-redis-when-to-use-with-example_img27.png](/images/posts/redis-what-is-redis-when-to-use-with-example_img27.png)

### HDEL:
hdel to delete the key from the hashmap

![redis-what-is-redis-when-to-use-with-example_img28.png](/images/posts/redis-what-is-redis-when-to-use-with-example_img28.png)

### CONCLUSION:
Here we have seen what is redis, what is the use of using this redis-server and redis-client , how to setup redis both client and server and workout on some basic commands.

If you like this article please share with your friends, if you want to see more technology blogs and projects please checkout the Blog .
<a style="color: blue" href="https://mdpuneethreddy.com/">https://mdpuneethreddy.com/</a>