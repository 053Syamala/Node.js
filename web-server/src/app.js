
const path=require('path')
const express=require('express')

console.log(__dirname)

const app=express()

const PublicDirectoryPath=path.join(__dirname,'../public')

app.set('view engine','hbs')
app.use(express.static(PublicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index',{
        title:'weather app',
        name:'syamala'
    })
})

app.get('/weather',(req,res)=>{
    res.send({
        forecast:'it is snowing',
        location:'Philadelphia'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        helpText:'This is helpText'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About me',
        name:'me'
    })
})
app.listen(3000,()=>{
    console.log('Server is up on 3000')
})