/*
DICA 1 - escrever em comentárion tudo o que precisa ser feito no código para ficar 100%
DICA 2 - SHIFT ALT F para organizar o codigo

EVENTO 1 - quando clicar na seta avançar, queremos esconder todas imagens e mostrar a próxima imagem
         - a imagem atual começa em 0 pq é a primeira imagem(na programação começamos a contar do 0; em uma lista de objetos por exemplo)
         - assim que for clicado no avançar, é preciso adicionar mais 1 ao contador de imagens para poder saber que agora vou mostrar a segunda imagem

EVENTO 2 - esconder todas as imagens 
         - pegar todas as imagens usando o DOM e remover a classe mostrar

EVENTO 3 - mostrar a proxima imagem
         - pegar todas imagens, descobrir qual é a próxima e colocar a classe "mostrar" nela
*/

/* usamos o const para uma variavel que não será alterada
        para alterar, usamos o let

    o ponto apos o document é usado para pegar alguma propriedade ou método do document

    query selector all é um metodo para pegar todos elemntos da tela que tenham determinada classe (imagens, no caso)
    getElement by id pega um determinado elemento com aquele id
*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

//foram criadas essas funções para não haver repetição de códigos, e caso seja necessária alguma mudança nessa função, basta mexer aqui;
function esconderImagens() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar');
    });
}
function mostrarImagem() {
    imagensPainel[imagemAtual].classList.add('mostrar')
}

/* adiciona um evento de clique com uma função
precisa de dois parametros, um é o clique para saber qual evento adicionar na seta, e da function para saber o que fazer depois do clique
pode-se adicionar um console.log('clicou na seta avançar') para verificar no console (F12 na pagina) para saber se a função deu certo
RESOLVENDO EVENTO 1
*/
setaAvancar.addEventListener('click', function () {

    // if da uma condição..
    // 3 sinais de igual é para testar se o valor e o tipo da variavel é igual ao qu está do lado direito
    //aqui estamos testando se o contador da imagem é igual ao total de imagens no array
    const totalDeImagens = imagensPainel.length -1;
    if(imagemAtual === totalDeImagens) {
        console.log('não pode avançar mais')
        return;
    }
    //esse ++ é basicamente dizer para pegar o valor de 0 da imagem e adicionar +1
    imagemAtual++;

    //RESOLVENDO EVENTO 2
    //foreach é "para cada elemento", nos da acesso a cada uma das imagens do painel (vai percorrer o Array, a Lista)
    // => é uma arrow function]
    // classlist é a lista de classes desse elemento (no caso, imagem)
    // para saber qual classe remover, criar um console.log(imagem.classList) e visualizar no console, ele vai dar a ordem certinha das classes dentro do elemento
    esconderImagens();
    //RESOLVENDO EVENTO 3
    //  colocar colchetes e um numero X, significa que quero pegar o indice X de tal lista (array)
    mostrarImagem();
});

setaVoltar.addEventListener('click', function(){

    if(imagemAtual === 0) {
        console.log('não tem mais como voltar');
        return;
    } 

    imagemAtual--;

    esconderImagens();
    mostrarImagem();
})