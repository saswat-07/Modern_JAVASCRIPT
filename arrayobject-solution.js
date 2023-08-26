const petAnimals =[{
    name:"Butters",
    age:3,
    type :"dog"
},{
    name:"Lizzy",
    age:6,
    type :"dog"
},{
    name:"Red",
    age:1,
    type :"cat"
},{
    name:"Joey",
    age:3,
    type :"dog"
}]

function calculateAge(petAnimals) {
    
    return petAnimals.filter(petAnimals =>petAnimals.type==="dog").map(petAnimals=> petAnimals.age*7).reduce((sum,age)=> sum + age,0);
        
}
console.log(calculateAge(petAnimals))