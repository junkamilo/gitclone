import { getUserById, nameUsers } from "./modulo.js";

let user = getUserById(4);
console.log(user);

let name = nameUsers("beltran");
console.log(name);

getUserById(100, function (error,user){
    console.log(error);
    
});


