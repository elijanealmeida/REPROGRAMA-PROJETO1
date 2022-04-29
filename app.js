const read = require('readline-sync')
const buscarLivros = require('./controllers/buscarLivros')
const livrosNaoLidos = require('./controllers/listarLivrosNaoLidos')
const livrosOrdenados = require('./controllers/listarLivrosOrdenados')
const listarRecomendados = require('./controllers/listarRecomendados')


const resposta = read.question(`
====================== Menu ==============

1 - CATEGORIA: Buscar livro por categoria
2 - ORDENAR: Ordenar livros por quantidade de paginas
3 - RECOMENDADOS: Buscar livros recomendados
4 - LISTA DE DESEJO: Busca livros não lidos

5 - SAIR

Digite um numero[1-5]:
`)

switch(resposta) {
    case '1':
      buscarLivros()
      break
    case '2': 
      livrosOrdenados()
      break
    case '3':
      listarRecomendados()
      break 
    case '4':
      livrosNaoLidos()
      break 
 default:

 console.log('Fim do algoritmo')
 break
}