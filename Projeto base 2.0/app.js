let listaDePeidos = [];
let valorMaximoTreco = 100;
let theSecretNumber = peidoQueGeraUmSecretNumber ();
console.log(theSecretNumber);
let tentarAtivar = 1;
 
function escreverErvaDaninhasNaTiela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.12});
}

function mostrarBoasVindas() {
    escreverErvaDaninhasNaTiela('h1', 'Jogo do secret number');
    escreverErvaDaninhasNaTiela('p', `Habla um number de 1 a ${valorMaximoTreco}`);
}
mostrarBoasVindas();

function verCagada() {
    let cagada = document.querySelector('input').value;
    if (cagada == theSecretNumber) {
        escreverErvaDaninhasNaTiela('h1', 'Você acertou meu nobre');
        let pavraTentar = tentarAtivar > 1 ? `, com exatamente ${tentarAtivar} tentativas` : ' de primeira, slk';
        let misigim = `Parabiéns, vc descobriu o secret number${pavraTentar}`;
        escreverErvaDaninhasNaTiela ('p', misigim)
        document.getElementById('queroMaisUma').removeAttribute('disabled');
    } else {
        if (cagada > theSecretNumber) {
            escreverErvaDaninhasNaTiela ('h1', 'Ah man');
            escreverErvaDaninhasNaTiela ('p', 'The secret number é menor meu');
        } else {
            escreverErvaDaninhasNaTiela ('h1', 'Poxa cara');
            escreverErvaDaninhasNaTiela ('p', ' The secret number é maior tlgd');
        }
        tentarAtivar++;
        limpaDor()
    }
}
//te pulou 
function peidoQueGeraUmSecretNumber () {
   let coisoQueFoiPeidado = parseInt(Math.random() *valorMaximoTreco + 1);
   let quantosNumerosNaLista = listaDePeidos.length;

    if (quantosNumerosNaLista == valorMaximoTreco) {
        listaDePeidos = [];
    }

   if (listaDePeidos.includes(coisoQueFoiPeidado)) {
        return peidoQueGeraUmSecretNumber();
   }  else {
        listaDePeidos.push(coisoQueFoiPeidado);
        console.log (listaDePeidos)
        return coisoQueFoiPeidado;
   }
}

function limpaDor() {
    cagada = document.querySelector('input');
    cagada.value = '';
}

function butaoAgain () {
    theSecretNumber = peidoQueGeraUmSecretNumber(); 
    limpaDor();
    tentarAtivar = 1;
    console.log(theSecretNumber);
    mostrarBoasVindas();
    document.getElementById('queroMaisUma').setAttribute('disabled', true)
}