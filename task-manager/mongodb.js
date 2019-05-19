
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
    /*const updatePromise=db.collection('users').updateOne({
        _id:new ObjectID("5ce05d0c4689981318164afe")
    },{
        $set:{
            name:'Devi'
        }
    })
    updatePromise.then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })*/
    /*db.collection('tasks').updateMany({
        completed:false
    },{
        $set:{
            completed:true
        }
    }).then((result)=>{
        console.log(result.modifiedCount)
    }).catch((error)=>{
        console.log(error)
    })*/
    db.collection('users').deleteMany({
        age:11
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
})
