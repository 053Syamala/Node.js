const https=require('https')
const url='https://api.darksky.net/forecast/cee3cd9ce79f94fe1ce0d9b5af437237/40,-75'
const request=https.request(url,(response)=>{
    let data=''
    response.on('data',(chunk)=>{
        data=data+chunk.toString()
    })
    response.on('end',()=>{
        const body=JSON.parse(data)
        console.log(body)
    })
})

request.on('error',(error)=>{
    console.log(error)
})

request.end()