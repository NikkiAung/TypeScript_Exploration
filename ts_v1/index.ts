let id:number = 5

let arr:[number,boolean,string] = [12,true,"Aung"]


let employee : [number,string][]

employee = [
    [1,'Aung'],
    [2,'Kyaw'],
    [3,'Hnin']
]

// console.log(employee);


let pid: string | number
pid = 'Aung'


enum Direction1 {
    Up,
    Down,
    Left,
    Right
}

//Object
type User = {
    id: number,
    name: string
}

const user : User = {
    id : 1,
    name : 'Aung'
}


// let c_id = <number>cid

let cid: any = 1
let customerId = cid as string

// console.log(typeof(customerId))

//function 
function addNum(num1 : number, num2 : number) : number {
    return num1 + num2
}
// console.log(addNum(2,2))

function log(message : string | number ) : void {
    console.log(message)
}

// log("Hello")

interface UserInfo {
    id: number,
    name: string
}

let User : UserInfo = {
    id: 112,
    name: 'Aung'
}

//can't use interface here
type Point = string | number

const p1: Point = 1

// console.log(p1)

interface MathFunc {
    (x:number, y:number) : number
}

const add : MathFunc = (x:number, y:number) : number => x+y
// console.log(add(1,2))


// Classes
class Person {
    id : number
    name : string

    constructor(id:number, name:string) {
        this.id = id
        this.name = name
    }
}

const Aung = new Person(123,'Aung')
const David = new Person(456,'David')
// console.log(Aung.id)
// console.log(David.name)


//Classese with interface

interface person_format {
    id : number
    name : string
    register() : string
}
class Person_info implements person_format {
    id : number
    name : string

    constructor(id:number, name:string) {
        this.id = id
        this.name = name
    }

    register() {
        // return `${this.name} is registered`
        return `${this.name} is registered to the company`
    }
}

const Nikki = new Person_info(567,'Nikki')
// console.log(Nikki.register())


class Employee extends Person_info{
    position : string

    constructor(id:number,name:string,position:string) {
        super(id,name)
        this.position = position
    }
}

const Kyawgyi = new Employee(111,'Kyawgyi','Senior SWE')
console.log(Kyawgyi.register())
console.log(Kyawgyi.position)

function getArray<T>(items: any[]):any[] {
    return new Array().concat(items)
}

let numArr = getArray<number>([1,2,3,4])
let strArr = getArray<string>(['Alex','May',"Xei"])

console.log(numArr)
numArr.push(2,5)
console.log(numArr)
strArr.push('Aung Gyi')
console.log(strArr)