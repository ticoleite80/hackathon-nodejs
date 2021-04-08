/** Importamos um modulo para ser utilizado na nossa implementação.
 * Neste exemplo estamos importando uma funcionalidade do modulo (Atribuição por Desestruturação), 
 * no caso o EventEmitter.
*/
const {EventEmitter} = require('events')

/**CRIANDO UM EVENTO
 * Criamos o objeto evento, para ser utilizado em nossa aplicação.
 */
const evento = new EventEmitter()

/**OUVINDO UM EVENTO 
 * Implementação para dizer ao objeto evento que, caso seja publicado algo, o que estiver dentro da função
 * deve ser executado.
*/
evento.on('teste', (user, msg)=>{
    console.log(`Usuario: ${user} possui uma MSG: ${msg}`)
})

/**PUBLICANDO UM EVENTO 
 * Implementação para dizer ao objeto evento criado, que precisamos que a função de subscribe (on())
 * seja executada.
*/
evento.emit('teste', 'Thiago Leite', 'Está instruindo meus Hackathonions')
evento.emit('teste', 'Rodrigo Seixas', 'Está aprendendo NodeJS')
