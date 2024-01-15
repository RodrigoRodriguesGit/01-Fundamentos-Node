import http from 'node:http'

const server = http.createServer((req, res) => {
   return res.end('Teste de Commit!')
}) 

server.listen(3333) 