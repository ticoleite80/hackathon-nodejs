/** Importamos um modulo para ser utilizado na nossa implementação. 
 * Neste exemplo estamos importando o modulo completo, com todas as suas funcionalidades.
 */
const http = require('http')

/** Criação de variáveis para organização de codigo */
const host = '127.0.0.1'
const port = '3000' /**porta default */
const url = `http://${host}:${port}`

const server = http.createServer((req, resp)=>{
    /**
     * 200 = sucesso
     * 500 = error de servidor
     * 404 = pagina nao encontrada
     */
    resp.statusCode = 200
    /** Sempre indico informar o tipo de conteudo a ser enviado para o navegador, para que este conteudo 
     * possa ser renderizado corretamente
     * Alguns valores comuns em aplicações web:
     * 
     * application/javascript   
     * application/pdf  
     * application/json  
     * application/xml   
     * image/gif   
     * image/jpeg   
     * image/png   
     * multipart/form-data  
     * text/css    
     * text/html: utilizado abaixo, entende as tags html   
     * text/plain    
     * text/xml    
     * 
     * */
    resp.setHeader('Content-Type', 'text/html')
    /** Existem alguns metodos que podemos chamar no objeto response.
     *  
     * resp.write(): Texto a ser mostrado
     * resp.redirect(): Redireciona o usuário para determinada página
     * resp.cookies(): Grava um cookie (informações sobre “login”...) no browser
     * resp.end(): Para a execução do script e limpa da memória todas as variáveis e todos os objetos criados pelo mesmo
     * 
    */
    resp.end('<h1>Ola galera!!</br>Aqui estamos no curso de Node JS</h1>')
})

server.listen(port, host, ()=>{
    console.log(`Server: ${url} is running...`)
})

