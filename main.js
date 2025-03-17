import{find, search, save, edit, remove} from "./api.js";
import {myFormAdd, myTable} from "./components.js";

const table = document.querySelector("#myTable")
const button = document.querySelector("#my__button")
const dialog = document.querySelector("#my__dialog")
const close = document.querySelector("#my__dialog_close")

addEventListener("DOMContentLoaded", async()=>{
    const data = await find();
    const fragTdbody =  myTable(data);
    table.append(fragTdbody);
    button.dispatchEvent(new Event("click"));
})
button.addEventListener("click", myFormAdd);
close.addEventListener("click", ()=>{dialog.close()});




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

