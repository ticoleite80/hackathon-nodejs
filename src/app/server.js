/**Padrao COMMON JS - usar um modulo dentro de outro arquivo
 * Modulo http: modulo nativo(47 modulas existentes) para criação e utilização de um servidor web
 * modulos nativos não precisam ser instalado com o comando npm install
*/
const http = require('http')
const host = '127.0.0.1' //IP Local
const port = '3000'

/** todo servidor recebe solicitações - REQUEST e ele manda uma resposta - RESPONSE 
 * Utilizamos uma arrow function recebendo os dois parametros
*/
const server = http.createServer((req, resp)=>{
    /**toda resposta com codigo 200 significa que ocorreu tudo bem na requisição */
    resp.statusCode = 200
    /**Tipo de conteudo */
    resp.setHeader('Content-Type', 'text/plain')
    /**Para o processamento e envia pra tela a mensagem */
    resp.end('Hackathon Stefanini Group \n Meu primeiro Script!')
})

/**Agora preciso ligar o servidor criado acima, porta 300 do servidor localhost */
server.listen(port, host, ()=>{
    /**Usando um template string */
    console.log(`Servidor: 'http://${host}:${port}' rodando com sucesso!`)
})