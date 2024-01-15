import http from 'node:http'

const server = http.createServer((req, res) => {
   return res.end('Teste do Rodrigo para BackEnd')
}) 

server.listen(3333) 