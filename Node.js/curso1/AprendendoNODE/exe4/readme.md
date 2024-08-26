# Exemplo de Servidor Web Simples com Node.js

Este README explica um código básico que utiliza o módulo HTTP do Node.js para criar um pequeno servidor web que responde com uma página HTML simples.

## Módulo HTTP
- O módulo HTTP é muito usado para fazer comunicação via HTTP, como servir páginas web.
- Ele já vem com o Node.js, ou seja, não há necessidade de instalá-lo separadamente.
- Com o código abaixo, conseguimos simular um pequeno servidor web que responde com uma página estática.

## Código

```javascript
const { createServer, request } = require('http');

let server = createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(`
        <h1>Hello World!</h1>
        <p>Primeira página com Node.js</p>
    `);
    response.end();
});

server.listen(8000);
console.log("Ouvindo a porta 8000");

```
# Explicação Detalhada
## 1. Importação do Módulo HTTP
```javascript
const { createServer, request } = require('http');
```
- Aqui estamos importando o módulo HTTP, que já vem com o Node.js.
- Estamos desestruturando dois métodos: createServer (para criar o servidor) e request (para realizar requisições HTTP, mas que não é utilizado neste código).

## 2. Criação do Servidor
``` javascript
let server = createServer((request, response) => {
```
- Usamos o método createServer para criar o servidor.
- Ele recebe uma função callback com dois parâmetros: request (a requisição do cliente) e response (a resposta que o servidor envia de volta para o cliente).

## 3. Definição do Cabeçalho da Resposta HTTP
```javascript
response.writeHead(200, {"Content-Type": "text/html"});
```
- Este comando define o cabeçalho da resposta HTTP.
- 200 significa que a requisição foi bem-sucedida (status de sucesso).
- "Content-Type": "text/html" define o tipo de conteúdo como HTML.

## 4. Escrita do Conteúdo da Resposta
```javascript
response.write(`
    <h1>Hello World!</h1>
    <p>Primeira página com Node.js</p>
`);
```
- Este comando insere o conteúdo da resposta, que é uma página HTML simples contendo um título "Hello World!" e um parágrafo.

## 5. Finalização da Resposta
```javascript
response.end();
```
- Este comando finaliza a resposta. Após isso, o servidor entende que a resposta foi concluída e fecha a conexão com o cliente.

## 6. Configuração da Porta do Servidor
```javascript
server.listen(8000);
```
- O servidor é configurado para "ouvir" as requisições na porta 8000. Isso significa que o servidor estará pronto para responder às conexões feitas nessa porta.

## 7. Log de Status do Servidor
```javascript
console.log("Ouvindo a porta 8000");
```
- Uma mensagem é exibida no console indicando que o servidor está ativo e ouvindo as requisições na porta 8000.

# Como Executar o Código
- Certifique-se de que o Node.js está instalado em sua máquina.
- Crie um arquivo .js com o código fornecido acima.
- No terminal, navegue até o diretório onde está o arquivo e execute o comando:
```bash
node nome_do_arquivo.js
```
- Abra seu navegador e vá para http://localhost:8000.
- Você verá a mensagem "Hello World!" exibida na página.