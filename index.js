const express = require('express');
const cors = require('cors')
const app=express();
const port=5000;


app.use(cors());
app.use(express.json());


const users=[
    {'id':0,'name':'a','phone':'017777777'},
    {'id':1,'name':'b','phone':'017777777'},
    {'id':2,'name':'c','phone':'017777777'},
    {'id':3,'name':'d','phone':'017777777'},
    {'id':4,'name':'e','phone':'017777777'},
    {'id':5,'name':'f','phone':'017777777'},
    {'id':6,'name':'g','phone':'017777777'},
    {'id':7,'name':'h','phone':'017777777'}
]
app.get('/users',(req,res)=>{
    res.send(users)
})
app.get('/',(req,res)=>{
    res.send("hiiiiiiiiiiiiii hello")
})
// app method
app.post('/users',(req,res)=>{
    const newUser=req.body
    newUser.id=users.length
    users.push(newUser)
    console.log('hittin the post',req.body)
    //We have to send data as json stringify
    // res.send(JSON.stringify(newUser))
    //or,
    res.json(newUser)
})


app.listen(port)