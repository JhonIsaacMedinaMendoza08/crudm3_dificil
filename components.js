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

        tr.append(tdId, tdName, tdLastName, tdAge, tdEmail,tdRol, tdCreate, tdUpdate)
        tdbody.append(tr)
    });
    console.log(tdbody);
    
}
