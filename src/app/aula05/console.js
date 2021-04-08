/** Estamos utilizando um modulo Nativo, o Console, para exibir uma msg no terminal*/
console.log("Hackathon Stefanini!, Aprendendo NodeJS.")
console.log("******************************")

/** Podemos exibir tbm um error no terminal*/
console.error(new Error('Ocorreu algo inesperado!'))
console.log("******************************")

/** Podemos exibir um array ou objeto tbm informações em formato de tabela (linha e coluna)*/
const equipes = ['Flamengo', 'Vasco', 'Fluminense', 'Botafogo']
const colaborador = {
    name: 'Thiago Leite',
    empresa: 'Stefanini Group'
}

console.table(equipes)
console.log("******************************")
console.table(colaborador)
console.log("******************************")

/** Podemos tbm usar o modulo console par fazer um contador de quantas vezes um determinado trecho de codigo foi executado */
console.count('count')
console.count('count')
console.count('count')

/**Resetando o contador */
console.log('Resetando o count')
console.countReset('count')
console.count('count')
console.log("******************************")

/**Podemos tbm mensurar o tempo de um determinado codigo, em milisegundos (verificar pq meu codigo esta lento)*/
console.time('timer')//comecei a contar
console.timeEnd('timer')//parei de contar
console.log("******************************")

console.assert(true, 'Assert true, não manda msg pro terminal')
console.assert(false, 'Assert false, aparece msg no terminal')
console.log("******************************")

/**Podemos limpar todas as mensagens no terminal */
//console.clear()
