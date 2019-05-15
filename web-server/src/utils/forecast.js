const request=require('request')

const forecast=(latitude,longitude,callback)=>{
        const url='https://api.darksky.net/forecast/cee3cd9ce79f94fe1ce0d9b5af437237/'+latitude+','+longitude+'?units=us'
        request({url:url,json:true},(error,{body})=>{
            if(error){
                console.log('unable to connect to weather server',undefined)
            }
            else if(body.error){
                console.log('unable to find location',undefined)
            }
            else{
                callback(undefined,body.daily.data[0].summary+'It is currently '+body.currently.temperature+' degrees out.There is '+body.currently.precipProbability+'% chance to get rain')
            }
        })
}

module.exports=forecast