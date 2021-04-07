function funcaoSincrona(nome){

    let num = 8
    
    console.log(num)
    num +=100
    console.log(num)

    return console.log(`O nome escolhido é: ${nome}` )
}

funcaoSincrona('Thiago Leite')
funcaoSincrona('Joao Paulo')
console.log('############################################')

/**adicionando uma função para simular um tempo antes de retornar uma 
 * rotina(setTimeout)
 *      recebe 2 parametros, uma funcao e um tempo de espera, em */
function funcaoAssincrona(nome, callback){
    console.log('$$$$$$$$$$$$$$$$$$$$Balu$$$$$$$$$$$$$$$$$$$$$$$')
    /**digo pro JS, espera 3 segundos e apos esse tempo chama a função de callback criada */
    return setTimeout(()=>{
        /**chama a funcao de callback criada abaixo */
        return callback(null, nome)
    }, 3000)
}

/**funcao callback (sempre recebe ao menos 2 parametros 
 * primeiro parametro eh o error caso ocorra, e o segundo eh o retorno) */
function esperaCallback(err, retorno){
    /**se der algum problema, para a execução e monstro no console o que ocorreu */
    if (err) throw err
    console.log('O nome informado é:', retorno)
     
}

funcaoAssincrona('José Roberto', esperaCallback)
funcaoSincrona('Rodrigo DIniz')