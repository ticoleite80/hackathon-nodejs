/**ASYNC e AWAIT */

/**função assyncrona */
function calc(valor){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(5 * valor)
            //reject(5 * valor)
        }, 2000);
    })
}

async function main(){
    try {
        let retorno = await calc(10)
        console.log(`Valor de SUCESSO: ${retorno}`) 
    } catch (error) {
        console.log(`Valor de ERROR: ${error}`) 
    }
}

main()