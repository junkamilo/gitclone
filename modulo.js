import { asignaciones, users } from "./data.js";

export function getUserById(id, callback){
const user = users.find(function(user){
    return user.id === id;
});
    if(!user){
        callback(`no encontramos usuaruio con el id ${id}`);
        
    }
    callback(null, users);
    
}

export function nameUsers(name) {
    const user = users.find(function(user){
        return user.name === name;
    });
    if(!user){
        console.log(`no encontramos el nombre del usuario ${name}`);
        
    }
}