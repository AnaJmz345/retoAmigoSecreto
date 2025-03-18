
let amigosIngresados=[];

function agregarAmigo(){
    amigoNuevo = document.getElementById("amigo").value;

    if (amigoNuevo === ""){
        alert("Ingrese un nombre, está vacío")
        return
    }
    let soloLetras = /^[A-Za-z]+$/.test(amigoNuevo); //uso de una expresión regular (regex) para revisar que no haya números en el nombre ingresado

    if (!soloLetras){
        alert("Un nombre no puede tener números, inténtalo de nuevo")
        
    }
    else{
        amigosIngresados.push(amigoNuevo)
        console.log(amigosIngresados)
        const listaAmigos = document.getElementById("listaAmigos")
        const nuevoAmigoLi = document.createElement("li");
        nuevoAmigoLi.textContent = amigoNuevo
        listaAmigos.appendChild(nuevoAmigoLi)
        
    }
    document.getElementById("amigo").value = "";  //borra el nombre en el input
    
}

function sortearAmigo(){
    indiceRandom = Math.floor(Math.random() * amigosIngresados.length);
    
    const resultadoSort = document.getElementById("resultado")
    const nuevoResultado = document.createElement("li");
    nuevoResultado.textContent = `El amigo sorteado es ${amigosIngresados[indiceRandom]}`;
    resultadoSort.appendChild(nuevoResultado);
  
}


