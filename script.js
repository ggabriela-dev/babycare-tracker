let lista = document.getElementById("lista");

let registros = JSON.parse(localStorage.getItem("registros")) || [];

mostrarRegistros();

function registrar() {

let tipo = document.getElementById("tipo").value;

let hora = new Date().toLocaleTimeString();

let icone = "";

if (tipo === "Mamou") {
    icone = "👶";
} else if (tipo === "Dormiu") {
    icone = "💤";
} else if (tipo === "Fralda") {
    icone = "🧷";
}

let texto = icone + " " + tipo + " - " + hora;

registros.push(texto);

localStorage.setItem("registros", JSON.stringify(registros));

mostrarRegistros();

}

function mostrarRegistros() {

lista.innerHTML = "";

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
