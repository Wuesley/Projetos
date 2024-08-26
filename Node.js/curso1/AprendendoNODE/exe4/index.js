/*
MODULO HTTP
- É muito usado para fazer comunicação via HTTP;
- O módulo já vem com o Node.js, ou seja, não é necessário instalá-lo separadamente;
- Pode criar um servidor que serve páginas web para nós;
- Com esse trecho de código, conseguimos simular um pequeno servidor web.
*/

// Importando os métodos 'createServer' e 'request' do módulo 'http'
const { createServer, request } = require('http');

// Criando o servidor com o método 'createServer' que recebe uma função callback com dois parâmetros: 'request' e 'response'
let server = createServer((request, response) => {

    // Definindo o cabeçalho da resposta HTTP com o status 200 (OK) e o tipo de conteúdo como 'text/html'
    response.writeHead(200, {"Content-Type": "text/html"});

    // Escrevendo o conteúdo HTML da resposta
    response.write(`
        <h1>Hello World!</h1>
        <p>Primeira página com Node.js</p>
    `);

    // Finalizando a resposta. Após essa chamada, o servidor entende que a resposta está completa.
    response.end();
});

// Configurando o servidor para "ouvir" as requisições na porta 8000
server.listen(8000);

// Imprimindo no console uma mensagem indicando que o servidor está rodando e ouvindo a porta 8000
console.log("Ouvindo a porta 8000");
