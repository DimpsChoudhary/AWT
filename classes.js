class person{
    constructor(){
        this.name="CVR"
        this.age="20"
    }
    printName(){
        console.log(this.name)
    }
    printAge(){
        console.log(this.age)
    }
}
const persons=new person()
persons.printName()
persons.printAge()