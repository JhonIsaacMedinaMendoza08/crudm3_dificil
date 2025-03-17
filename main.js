import{find, search, save, edit, remove} from "./api.js";
import {myTable} from "./components.js"
const data = await find();
myTable(data)

// const server = await find ()
// console.log(server)

// const data = await search(55)
// console.log(data)

// const obj = {
//     name: "Miguelitooo ",
//     lastName: "Castro",
//     age: 43,
//     email: "email@gmail.com",
//     rol: ["user", "admin"],
// }
// const message = await save(obj);
// console.log(message);



// const obj = {
//     name: "Brian ",
//     lastName: "Castro",
//     id: 1
// }
// const dataRemove = await remove(15);
// console.log(dataRemove);

