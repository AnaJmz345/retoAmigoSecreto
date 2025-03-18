
let amigosIngresados=[];
function agregarAmigo(){
    amigoNuevo = document.getElementById("amigo").value;
    amigosIngresados.push(amigoNuevo)
    console.log(amigosIngresados)
    const listaAmigos = document.getElementById("listaAmigos")
    const nuevoAmigoLi = document.createElement("li");
    nuevoAmigoLi.textContent = amigoNuevo
    listaAmigos.appendChild(nuevoAmigoLi)
}

function sortearAmigo(){

}
