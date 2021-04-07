const express = require('express')
const app = express()
const hackathonRouter = require('./routes/hackathonRoutes')

/** Metodo de Middleware */
app.use(express.json())
app.use('/hackathon', hackathonRouter)

app.get('/', (req, resp)=>{
    resp.send('Projeto Hackathon Stefanini 123')
})

app.listen(3000, ()=>{
    console.log('Server is running...')
})