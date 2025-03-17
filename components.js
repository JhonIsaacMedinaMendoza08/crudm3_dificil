export const myTable = (data)=> {
    const tdbody = document.createElement("tbody");
    data.forEach(element => {
        const tr = document.createElement("tr");
        const tdId = document.createElement("td");
        tdId.textContent = element.id;
        const tdName = document.createElement("td");
        tdName.textContent = element.name;
        const tdLastName = document.createElement("td");
        tdLastName.textContent = element.lastName;
        const tdAge = document.createElement("td");
        tdAge.textContent = element.age;
        const tdEmail = document.createElement("td");
        tdEmail.textContent = element.email;
        const tdRol = document.createElement("td");
        tdRol.textContent = element.rol;

        const tdCreate = document.createElement("td");
        tdCreate.textContent = new Date(element.createdAt *1000);
        const tdUpdate = document.createElement("td");
        tdUpdate.textContent = new Date(element.updateAt *1000);

        const tdActions = document.createElement("td");
        const btnEdit = document.createElement("button");
        btnEdit.textContent = "Edit"
        const btnDelete = document.createElement("button");
        btnDelete.textContent = "Delete"

        tdActions.append(btnEdit, btnDelete)


        tr.append(tdId, tdName, tdLastName, tdAge, tdEmail,tdRol, tdCreate, tdUpdate, tdActions)
        tdbody.append(tr)
    });
    return tdbody;    
}

export const myFormAdd = (e)=>{
    const dialog = document.querySelector("#my__dialog")
    dialog.showModal();
    const my_form = document.createElement("form");
    my_form.action="/informacion";
    my_form.method="post";

    console.log(my_form);
    
};