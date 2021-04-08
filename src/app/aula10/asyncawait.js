/**FUNÇÕES DE RETORNO - ASYNC e AWAIT (se tornaram nativas do javascript após o ES2017)
 * 
 * ASYNC: palavra reservada que indica uma função como assyncrona, ou seja, termos codigos assyncronos
 * a serem tratados nesta função
 * 
 * AWAIT: paravra reservada que indica que um determinado processamento eh assyncrono, que eu preciso 
 * aguardar o retorno do mesmo
 * 
 * ASYNC/AWAIT vieram para facilitar o fluxo de escrita e leitura do código. Assim é possível escrever 
 * código que funciona de forma assíncrona, porém é lido e estruturado de forma síncrona, trabalhando 
 * com o código baseado em Promises, porém esconde as promessas para que a leitura seja mais fluída e 
 * simples de entender.
 */

/**Funções assíncronas sempre retornam Promises. */
function calc(valor){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('Aguardamos o tempo escolhido pelo desenvolvedor e agora retornaremos a promise...')
            resolve(5 * valor)
            //reject(5 * valor)
        }, 2000);
    })
}

async function main(){
    console.log('Quando trabalhamos com ASYNC/AWAIT, colocamos o codigo assyncrono dentro de um bloco TRY/CATCH...')
    try {
        let retorno = await calc(10)
        console.log(`Quando o codigo eh executado SEM ERROS - Valor de SUCESSO: ${retorno}`) 
    } catch (error) {
        console.log(`Quando o codigo eh executado COM ERROS - Valor de ERROR: ${error}`) 
    }
}

/**Função assyncrona,  usando ASYNC/AWAIT
 * o resultado de uma promise eh tratada pelos dentro do bloco TRY/CATCH
*/
main()