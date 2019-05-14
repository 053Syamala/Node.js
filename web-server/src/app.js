const express=require('express')

const app=express()

app.get('',(req,res)=>{
    res.send('Hello,Express!')
})

app.get('/help',(req,res)=>{
    res.send([{
        name:'Syamalaaa'
    },{
        name:'Devi'
    }])
})

app.get('/about',(req,res)=>{
    res.send('About')
})

app.get('/weather',(req,res)=>{
    res.send({
        forecast:'it is snowing',
        location:'Philadelphia'
    })
})

app.listen(3000,()=>{
    console.log('Server is up on 3000')
})