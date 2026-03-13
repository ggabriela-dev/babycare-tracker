function registrar(){

let tipo = document.getElementById("tipo").value

let hora = new Date().toLocaleTimeString()

let texto = tipo + " - " + hora

let lista = document.getElementById("lista")

let item = document.createElement("li")

item.textContent = texto

lista.appendChild(item)

}