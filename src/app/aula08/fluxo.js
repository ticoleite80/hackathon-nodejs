/**função assyncrona */
function calc(valor, callback){
    return setTimeout(() => {
        return callback(null, 5 * valor)
    }, 2000);
}

/**funcção de callback */
function monstraValor(err, retorno){
    if (err) throw err
    console.log(retorno)    
}

calc(10, monstraValor)

