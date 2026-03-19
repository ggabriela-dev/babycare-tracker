let lista = document.getElementById("lista");

let registros = JSON.parse(localStorage.getItem("registros")) || [];

mostrarRegistros();

function registrar() {

let tipo = document.getElementById("tipo").value;

let data = new Date().toLocaleDateString();
let hora = new Date().toLocaleTimeString();

let dataHora = data + " " + hora;
let icone = "";

if (tipo === "Mamou") {
    icone = "👶";
} else if (tipo === "Dormiu") {
    icone = "💤";
} else if (tipo === "Fralda") {
    icone = "🧷";
}

let texto = icone + " " + tipo + " - " + dataHora;
registros.push(texto);

localStorage.setItem("registros", JSON.stringify(registros));

mostrarRegistros();

}

function mostrarRegistros() {

lista.innerHTML = "";
if (registros.length === 0) {
    lista.innerHTML = "Nenhum registro ainda";
    return;
}

registros.forEach(function(item, index) {

let li = document.createElement("li");

li.textContent = item;

let botao = document.createElement("button");
botao.textContent = " ❌";

botao.onclick = function () {

registros.splice(index, 1);

localStorage.setItem("registros", JSON.stringify(registros));

mostrarRegistros();

};


li.appendChild(botao);

lista.appendChild(li);

});

}
function limparRegistros() {

localStorage.removeItem("registros");

registros = [];

mostrarRegistros();

}
