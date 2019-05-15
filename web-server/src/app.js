
const path=require('path')
const express=require('express')
const hbs=require('hbs')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

console.log(__dirname)

const app=express()

//define paths for Express config.
const PublicDirectoryPath=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')

//setup handlebars engine and views lacation
app.set('views',viewsPath)
app.set('view engine','hbs')
hbs.registerPartials(partialsPath)

//set up static directory to server
app.use(express.static(PublicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index',{
        title:'weather app',
        name:'syamala'
    })
})

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'You must provide an address!'
        })

    }
    geocode(req.query.address,(error,{latitude,longitude,location})=>{
        if(error){
            return res.send({error})
        }
        forecast(latitude,longitude,(error,forecastData)=>{
            if(error){
                return res.send({error})
            }
            res.send({
                forecast:forecastData,
                location,
                address:req.query.address
            })

        })

    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        helpText:'This is helpText',
        title:'Help page',
        name:'syamala'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About me',
        name:'me'
    })
})
app.get('/products',(req,res)=>{
    if(!req.query.search){
        return res.send({
            error:'You must provide a search term'
        })
    }
    console.log(req.query)
    res.send({
        products:[]
    })
})
app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'syamala',
        errorMessage:'help page not found'
    })
})
app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'syamala',
        errorMessage:'page not found'
    })
})

app.listen(3000,()=>{
    console.log('Server is up on 3000')
})