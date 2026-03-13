let lista = document.getElementById("lista");

let registros = JSON.parse(localStorage.getItem("registros")) || [];

mostrarRegistros();

function registrar() {

let tipo = document.getElementById("tipo").value;

let hora = new Date().toLocaleTimeString();

let texto = tipo + " - " + hora;

registros.push(texto);

localStorage.setItem("registros", JSON.stringify(registros));

mostrarRegistros();

}

function mostrarRegistros() {

lista.innerHTML = "";

registros.forEach(function(item) {

let li = document.createElement("li");

li.textContent = item;

lista.appendChild(li);

});

}
