const fs=require('fs')

//const book={
//    title:'title1',
//    author:'author for title1'
//}
//const bookJSON=JSON.stringify(book)

//fs.writeFileSync('1-json.json',bookJSON)

const content=fs.readFileSync('1-json.json')
const data=content.toString()
const user=JSON.parse(data)

user.name="syamala"

const userJSON=JSON.stringify(user)
fs.writeFileSync('1-json.json',userJSON)