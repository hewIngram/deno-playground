import pogo from 'https://deno.land/x/pogo/main.js';
import { bodyParser, regexpCount } from './utils.ts'

const server = pogo.server({ port : 8080 });

const thing = request => {
    return request.body()
    .then(data => {
        const text = bodyParser(data).text
        const count = regexpCount( /\brocket\b/g, text)
        return count
    })
}

server.route({
    method: 'GET',
    path: '/hello',
    handler() {
        return 'hello LNUG'
}})


server.route({
    method: 'POST',
    path: '/post-test',
    handler: thing
});

server.start();