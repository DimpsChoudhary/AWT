const user={
    firstname:'Dimple',
    lastname:'Choudhary',
    age:'20',
    address:{
        city:'hyderabad',
        country:'India'
    }
}
const{lastname,...userinfo}=user
console.log(lastname)
console.log(userinfo)

const scores=[10,20,99,135,225]
const[x, ,...other]=scores
console.log(x)
console.log(other)