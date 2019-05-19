const mongoose=require('mongoose')
const validator=require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    useCreateIndex:true
})
const User=mongoose.model('User',{
    name:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }

    },
    password:{
        type:String,
        required:true,
        minlength:7,
        trim:true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password cannot comtain "password"')
            }
        }


    },
    age:{
        type:Number,
        default:0,
        validate(value){
            if(value<0){
                throw new Error('age must be a positive number')
            }
        }
    }
})

const me=new User({
    name:'    devi   ',
    email:'SYAMALA@GMAIL.COM',
    password:'phone032'
})
me.save().then(()=>{
    console.log(me)
}).catch((error)=>{
    console.log("Error!!",error)
})
/*const Task=mongoose.model('Task',{
    description:{
        type:String
    },
    completed:{
        type:Boolean
    }
})

const task=new Task({
    description:'Learn mongoose',
    completed:true
})

task.save().then(()=>{
    console.log(task)
}).catch((error)=>{
    console.log(error)
})*/