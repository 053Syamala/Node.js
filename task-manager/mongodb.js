
const {MongoClient,ObjectID}=require('mongodb')

const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'

const id=new ObjectID()
//console.log(id)

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log('unable to connect to server')
    }
    
    const db=client.db(databaseName)
    db.collection('users').findOne({name:'syamala'},(error,user)=>{
        if(error){
            console.log('unable to find')
        }
        console.log(user)
    })
    db.collection('users').find({age:10}).toArray((error,user)=>{
        if(error){
            console.log('unable to find')
        }
        console.log(user)
    })
    db.collection('users').find({age:10}).count((error,user)=>{
        if(error){
            console.log('unable to find')
        }
        console.log(user)
    })
    /*db.collection('tasks').insertMany([
        {
            description:'clean the house',
            completed:true
        },
        {
            description:'Renew inspection',
            completed:false
        }, {
            description:'Pot plants',
            completed:false
        }, {
            description:'clean the room',
            completed:true
        }
    ],(error,result)=>{
        if(error){
            return console.log("Unable to insert data")
        }
        console.log(result.ops)
    })*/
})
