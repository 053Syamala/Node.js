setTimeout(()=>{
    console.log('Two seconds are up.')
},2000)

const names=['name1','name2','name3333']

const shortNames=names.filter((name)=>{
    return name.length<=4
})