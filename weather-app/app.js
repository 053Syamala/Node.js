const request=require('request')

const url='https://api.darksky.net/forecast/cee3cd9ce79f94fe1ce0d9b5af437237/37.8267,-122.4233?units=us'

request({url:url , json:true},(error,response)=>{
    //console.log(response.body.currently)
    if(error){
        console.log("unable to connect!!")
    }
    else{
        console.log(response.body.daily.data[0].summary+'It is currently '+response.body.currently.temperature+' degrees out.There is '+response.body.currently.precipProbability+'% chance to get rain')
    }
})

//const geocodeUrl='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3lhbWFsYWRldmkiLCJhIjoiY2p2aHRsejBzMDZvNjRhdGV6aDF4eXp2ZiJ9.YpSy0_LEuA5LXM7jQiUwxA'
//request({url:geocodeUrl ,json: true},(error,response)=>{
//    const latitude=response.body.features[0].center[0]
//    const longitude=response.body.features[0].center[1]
//    console.log(latitude,longitude)
//})