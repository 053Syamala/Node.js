const name='Syamala'
const userAge=20
const user={
    name:name,
    age:userAge,
    location:'Philadelphia'
}
console.log(user)

const product={
    lable:'Red NoteBook',
    price:3,
    stock:201,
    salePrice:undefined
}
//const {lable:productLable,price}=product

const transaction=(type,{lable,stock})=>{
    console.log(type,lable,stock)
}
transaction('order',product)
