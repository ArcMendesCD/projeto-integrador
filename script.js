// JavaScript para habilitar a edição ao clicar no ícone de edição
/*

document.getElementById("editarIdade").addEventListener("click", function() {
    var idadeElement = document.getElementById("idade");
    var novaIdade = prompt("Digite a nova idade:");
    
    if (novaIdade !== null) { // Verifica se o usuário não cancelou
        idadeElement.textContent = novaIdade;
    }
});

document.getElementById("editarPeso").addEventListener("click", function() {
    var pesoElement = document.getElementById("peso");
    var novoPeso = prompt("Digite o novo peso:");
    
    if (novoPeso !== null) { // Verifica se o usuário não cancelou
        pesoElement.textContent = novoPeso;
    }
});

document.getElementById("editarRaca").addEventListener("click", function() {
    var racaElement = document.getElementById("raca");
    var novaRaca = prompt("Digite a raça:");
    
    if (novaRaca !== null) { // Verifica se o usuário não cancelou
        racaElement.textContent = novaRaca;
    }
});

document.getElementById("editarCor").addEventListener("click", function() {
    var corElement = document.getElementById("cor");
    var novaCor = prompt("Digite a cor:");
    
    if (novaCor !== null) { // Verifica se o usuário não cancelou
        corElement.textContent = novaCor;
    }
});


// JavaScript para a navegação entre as páginas
document.getElementById("botaoAlimentacao").addEventListener("click", function() {
    // Redirecione para a página de alimentação
    window.location.href = "pagina-alimentacao.html";
});

document.getElementById("botaoPrincipal").addEventListener("click", function() {
    // Redirecione para a página principal (index.html neste caso)
    window.location.href = "index.html";
});

document.getElementById("botaoSaude").addEventListener("click", function() {
    // Redirecione para a página de saúde
    window.location.href = "pagina-saude.html";
});
*/

console.log("O script está sendo executado");

class Editor {
    constructor(elementId) {
        this.element = document.getElementById(elementId);
    }

    editar() {
        var novoValor = prompt(`Digite o novo valor para ${this.element.id}:`);
        if (novoValor !== null) {
            this.element.textContent = novoValor;
        }
    }
}

class Navegador {
    constructor(elementId, page) {
        this.element = document.getElementById(elementId);
        this.page = page;
    }

    navegar() {
        window.location.href = this.page;
    }
}

// Instanciando objetos para edição
const idadeEditor = new Editor("idade");
const pesoEditor = new Editor("peso");
const racaEditor = new Editor("raça");
const corEditor = new Editor("cor");

// Adicionando event listeners para edição
document.getElementById("editarIdade").addEventListener("click", function() {
    idadeEditor.editar();
});

document.getElementById("editarPeso").addEventListener("click", function() {
    pesoEditor.editar();
});

document.getElementById("editarRaca").addEventListener("click", function() {
    racaEditor.editar();
});

document.getElementById("editarCor").addEventListener("click", function() {
    corEditor.editar();
});

// Instanciando objetos para navegação
const alimentacaoNav = new Navegador("botaoAlimentacao", "paginaalimentacao.html");
const principalNav = new Navegador("botaoPrincipal", "paginaprincipal.html");
const saudeNav = new Navegador("botaoSaude", "paginasaude.html");

// Adicionando event listeners para navegação
document.getElementById("botaoAlimentacao").addEventListener("click", function() {
    alimentacaoNav.navegar();
});

document.getElementById("botaoPrincipal").addEventListener("click", function() {
    principalNav.navegar();
});

document.getElementById("botaoSaude").addEventListener("click", function() {
    saudeNav.navegar();
});


