
console.log('client side script is loaded.')
fetch('http://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
        console.log(data)
    })
})


const weatherForm=document.querySelector('form')
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location= document.getElementById("10").value
    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            console.log(data.error)
        }
        else{
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})

})