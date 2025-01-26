//num declare
let num: number = 10


interface User {
    name : string
    password : number
    phone? : number //? means it is optional
    isLogin() : string
    getAge : () => number
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
    }
}

console.log(user.getAge())