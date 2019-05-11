//const square= function(x){
//    return x*x
//}
//const square=(x) =>{
//    return x*x
//}

//const square=(x) =>x*x
//console.log(square(2))

const event={
    name:'Party',
    guestList:['person1','person2','person3'],
    printGuestList(){
        console.log('Guest name is:'+this.name)
        this.guestList.forEach((guest)=>{
            console.log(guest+" is attending "+this.name)
        })

    }
}

event.printGuestList()
