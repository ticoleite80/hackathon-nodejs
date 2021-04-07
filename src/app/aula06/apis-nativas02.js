const {EventEmitter} = require('events')

/**CRIANDO UM EVENTO */
const evento = new EventEmitter()

/**OUVINDO UM EVENTO */
evento.on('teste', (user, msg)=>{
    console.log(`Usuario: ${user} possui uma MSG: ${msg}`)
})

/**PUBLICANDO UM EVENTO */
evento.emit('teste', 'Thiago Leite', 'Está instruindo meus Hackathonions')
evento.emit('teste', 'Rodrigo Seixas', 'Está aprendendo NodeJS')
