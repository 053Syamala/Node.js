
const path=require('path')
const express=require('express')

console.log(__dirname)

const app=express()

const PublicDirectoryPath=path.join(__dirname,'../public')
app.use(express.static(PublicDirectoryPath))

app.get('',(req,res)=>{
    res.send('Hello,Express!')
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