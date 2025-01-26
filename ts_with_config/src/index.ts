//num declare
let num: number = 10

//Developer1
interface User {
    name : string
    password : number
    phone? : number //? means it is optional
    isLogin() : string
    getAge : () => number
}

//Developer2
interface User {
    isDriving(status : boolean) : string
}

const user : User = {
    name : 'UserOne',
    password : 12389,
    // phone : 945342341,
    isLogin() {
        return "Success"
    },
    getAge: () => {
        return 10
    },
    isDriving: (status) => {
        return 'Driving'
    }
}

console.log(user.getAge())