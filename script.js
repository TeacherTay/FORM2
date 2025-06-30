function inserirNome(){
   let nomeUsuario = prompt("Me diga qual é o seu nome :) ");
   let elemento = document.querySelector("#nome-usuario");
   elemento.textContent = nomeUsuario;
}

inserirNome();

let linguagens = ["Javascript", "Python", "C"];
console.log(linguagens[0]);
console.log(linguagens[1]);
console.log(linguagens[2]);

function mudarCor(){
   const elemento=document.getElementById("nome-usuario");
   elemento.style.color="red";
}
mudarCor();
//mostrar no console no navegador
const item = document.querySelector("#lista");
item.textContent = linguagens[0];
