const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient

const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log('unable to connect to server')
    }
    console.log('connected correctly')
    const db=client.db(databaseName)
    db.collection('users').insertMany([
        {
            name:'name1',
            age:10
        },{
            name:'name2',
            age:11
        }
    ],(error,result)=>{
        if(error){
            return console.log('Unable to insert documents')
        }
        console.log(result.ops)

    })
    db.collection('tasks').insertMany([
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
    })
})
