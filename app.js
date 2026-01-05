// Variável global
let variavel = []

// Trabalhando com o botão de adicionar;
let btnAdicionar = document.getElementById("adicionar");
btnAdicionar.addEventListener("click", () =>{
    let nome = document.getElementById("nome").value;
    let emAtendimento = document.getElementById("emAtendimento");
    let lista = document.getElementById("lista");

    if(nome == "" || !isNaN(nome)){
        alert("Por favor, insira o nome corretamente!");
        return;
    }
    document.getElementById("nome").value = "";
    
    let atender = "";
    variavel.push(nome);

    // Trabalhando com lista para adicionar
    let list = ""
    for(let x = 0; x < variavel.length; x++){
        list += (x + 1) + "." + variavel[x] + "\n" ;
    }
    lista.textContent = list;
    emAtendimento.textContent = nome;
    emAtendimento.style.color = "green";
}) 

// Trabalhar com botão de urgência
let urgencia = document.getElementById("urgencia");
urgencia.addEventListener("click", () =>{
    let nome = document.getElementById("nome").value;
    let emAtendimento = document.getElementById("emAtendimento");
    let lista = document.getElementById("lista");

    if(nome == "" || !isNaN(nome)){
        alert("Por favor, precisamos do seu nome urgentemente.");
        return;
    }
    document.getElementById("nome").value = "";

    variavel.unshift(nome);
    let list =  "";
    for(x = 0; x < variavel.length; x++){
        list += (x + 1) + "." + variavel[x] + "\n";
    }
    lista.textContent = list;
    emAtendimento.textContent = nome;
    emAtendimento.style.color = "red";
})

// Trabalhar com botão atender;
let atender = document.getElementById("atender");
atender.addEventListener("click", () =>{
    let nome = document.getElementById("nome").value;
    let lista = document.getElementById("lista");
    let emAtendimento = document.getElementById("emAtendimento");
    
    variavel.shift(nome);
    let list = "";
    for(let x = 0; x < variavel.length; x++){
        list += x + 1 + "." + variavel[x] + "\n";
        }
    lista.textContent = list;
    emAtendimento.textContent = " ";
})
