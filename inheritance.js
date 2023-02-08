class Human{
    constructor(){
        this.age=30
    }
    printAge(){
        console.log(this.age)
    }
}
class Person extends Human{
    constructor(){
        super();
        //this.age=50
        this.name="CVR"
    }
    printName(){
        console.log(this.name)
    }
}
const p1=new Person()
p1.printName()
p1.printAge()