const urlapir='https://rickandmortyapi.com/api/character/150';

fetch(urlapir)
.then(respuesta => respuesta.json())
.then(data =>{
    
    let elemento=document.getElementById("Corvelious");
    console.log(data.name);
    elemento.innerHTML =`
    <p>${data.id}</p>
    <p>${data.name}</p>
    <img src='${data.image}'/>
    <p>${data.gender}</p>
    <p>${data.spicies}</p>
    `;
})
.catch(error=>console.log(error))