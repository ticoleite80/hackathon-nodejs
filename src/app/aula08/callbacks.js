/**FUNÇÕES DE RETORNO - CALLBACKS */

/**Função assyncrona,  usando funções CALLBACK
 * CALLBACK é uma função que é passada como argumento para uma outra função (higher-order function) 
 * e, geralmente, só é executado quando alguma operação é concluída ou quando um evento específico 
 * ocorre.
*/
function calc(valor, callback){

    console.log('Função CALC sendo executada...')
    /**adicionando uma função para simular um tempo antes de retornar uma 
     * rotina(setTimeout) recebe 2 parametros, uma funcao e um tempo de espera, em milisegundos
     * */
     console.log('Vamos aguardar o tempo escolhido pelo desenvolvedor...')
    return setTimeout(() => {
        console.log('Função CALLBACK sendo executada')
        return callback(null, 5 * valor)
    }, 2000);
}

/** Funcção de CALLBACK: chamada após o retorno de uma função assyncrona, no nosso exeplo simulamos 
 * essa função assyncrona, invocando o metodo setTimeOut()
*/
function monstraValor(err, retorno){
    
    console.log('Metodo de retorno de uma função assyncrona, validando se ouve erro durante o processo.')
    /** Se houver erro na execução da função assyncrona, ele será apresentado no console */
    if (err){
        throw err
    } 

    /** Sem erro ele mostra o retorno que pedimos, no caso o resultado a multiplicação 5 * valor */
    console.log(`SEM ERROR - Valor retornado da multiplicação: ${retorno}`)    
}

/** chama a função CALC para ser executada */
calc(10, monstraValor)

