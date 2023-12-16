const express=require('express')
const app=express()
const cors=require('cors')
app.use(cors())

const words=['Hello','Hi','Bye','Done','Okay']
let randomIndex

app.get('/',(req,res)=>{
    res.send("Hello Welcome to Browser")
})

app.get('/words',(req,res)=>{
    res.send(words)
})

app.get('/words/randomWord',(req,res)=>{
    randomIndex=Math.floor(Math.random()*5)
    res.send(words[randomIndex])
})

app.get('/words/:id',(req,res)=>{
    const {id}=req.params
    res.send(words[id])
})

app.listen(9000,()=>{
    console.log('server is running at 9000')
})
