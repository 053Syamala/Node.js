
const yargs=require('yargs')
const notes=require('./notes.js')

yargs.command({
    command:'add',
    describe:'Add a new note',
    handler:function(){
        console.log('Adding a new note!!')
    }
})
yargs.command({
    command:'remove',
    describe:'removing a new note',
    handler:function(){
        console.log('removing a new note!!')
    }
})
yargs.command({
    command:'list',
    describe:'list our note',
    handler:function(){
        console.log('list our note!!')
    }
})




console.log(process.argv)
console.log(yargs.argv)

