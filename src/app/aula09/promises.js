/**FUNÇÕES DE RETORNO - PROMISES (se tornaram notaivas do javascript após o ES6)
 * PROMISES definem uma ação que vai ser executada no futuro, podendo ser resolvida (com sucesso) 
 * ou rejeitada (com erro).
 * ***Há uma diferença entre lançar um erro e rejeitar uma promise. Lançar (dar um throw ) no erro, 
 * vai parar a execução do seu código, é o equivalente a darmos um return em uma função. 
 * Porém rejeitar uma Promise fará com que o código continue sendo executado posteriormente
 */

/**Função assyncrona,  usando Classe PROMISE
*/
function calc(valor){

    console.log('Iremos criar uma nova Promise para cuidar da nossa chamada assyncrona...')
    /** Toda a Promise retorna um método then e outro catch, e veremos isso na chamada do método CALC
     * ao Criar uma nova Promise, passando como parametro uma função com assinatura
     * (resolve, reject) => {}, onde realizamos nossas tarefas assyncronas no corpo desta função
     */
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('Aguardamos o tempo escolhido pelo desenvolvedor e agora retornaremos a promise...')
            resolve(5 * valor)
            //reject(5 * valor)
        }, 2000);
    })
}


/**Função assyncrona,  usando PROMISES
 * o resultado de uma promise eh tratada pelos metodos THEN() ou CATCH()
*/
calc(10)
/** passe por aqui caso tudo ocorra bem */
.then((retorno)=>{
    console.log(`Usamos o THEN() para tratar quando resolvida - Valor de retorno: ${retorno}`)
})
/** passe por aqui caso dê algum problema */
.catch((error)=>{
    console.log(`Usamos o CATCH() para tratar quando rejeitada - Valor de ERROR: ${error}`)
})

