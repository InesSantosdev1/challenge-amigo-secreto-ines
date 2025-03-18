//lista vazia para adicionar os nomes
let Nomes = [];

function adicionarAmigo(){
    let elementoInput = document.getElementById("amigo"); // Declara uma variavel para o elemento 'input' do documento
    let valorInput = elementoInput.value; // recebe o valor do elemento 'input'

    if (valorInput !== ""){
        Nomes.push(valorInput); // adiciona os nomes a lista

        let listaNomes = document.getElementById("listaAmigos");
        let novaLista = document.createElement("li"); // cria um elemento 'lista'
        novaLista.id = "meusAmigos"; // define um id para a lista
        novaLista.textContent = valorInput; // Define o conteúdo de texto da variavel 'novaLista' com o valor inserido no input
        listaNomes.appendChild(novaLista); // Adiciona 'novaLista' como um item dentro do elemento 'listaNomes'
    }

    if(elementoInput.value === ""){ // caso o input esteja vazio ele mostra uma mensagem de erro
        window.alert("Erro, informe um nome");
    } else {
        elementoInput.value = ""; //Limpa o input após a adição dos nomes
        document.getElementById("resultado").innerHTML = " ";
    }
    
}

function sortearAmigo(){
    let sortearLista = Nomes; // Recebe os nomes da lista
    let sortearNome = Math.floor(Math.random() * sortearLista.length); // Sorteia um  nome da lista
    let nomeSorteado = sortearLista[sortearNome]; // pega o nome correspondente ao índice sorteado dentro da lista

    document.getElementById("listaAmigos").innerHTML = " "; // Remove a lista
    
    let elementoLista = document.createElement("li"); //Cria um elemento lista
    elementoLista.textContent = `O amigo secreto sorteado é ${nomeSorteado}`; // Mostra na tela o nome sorteado
    let amigoSecreto = document.getElementById("resultado");
    amigoSecreto.appendChild(elementoLista);
    
    elementoInput.value = "";
}
