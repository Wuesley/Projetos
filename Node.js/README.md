## O que é uma API?
API (Application Programming Interface) significa **Interface de Programação de Aplicações**. Ela permite que diferentes programas conversem entre si. Imagine que você tem dois amigos que falam idiomas diferentes. A API seria como um tradutor entre eles. É uma maneira de se comunicar via HTTP a um servidor e fazer operações como visualizar, deletar,criar,e atualizar dados, é o (CRUD). Grandes aplicações como facebook, insta usam APIs, grande parte dos softwares desenvolvidos em Node.js tem uma APIs, e utilizam um framework chamado express para isso.

![Diagrama](./img/diagrama.png)


## O primeiro passo para criar uma API é instalar o express
## O que é Express?
Express é um **framework** para Node.js que simplifica o processo de criar servidores web. Ele facilita o gerenciamento de rotas e respostas HTTP. É uma framework web muito utilizado para criar aplicações em Node.js, utiliza em seu core o módulo HTTP para criar as comunicações, além de outros módulos, podemos criar uma API com express facilmente. Para instalar:

```bash
npm init;
npm install express;
```
o Express será instalado e adicionado as dependencias do nosso projeto.

**Exemplo da vida real:** Se Node.js é o forno, Express é a receita pronta para você não precisar descobrir o tempo e a temperatura ideal de assar o bolo sozinho.

Esse site mostra todas as bibliotecas que faz toda configuração de uma API para um software que possivelmente rodará 24 horas por dia na nuvem, <br>
site:   [npm](https://www.npmjs.com/package/express)<br>
documentação:   [express](https://expressjs.com/)

## Iniciando um projeto com (node + express)
- Abra o terminal na pasta do projeto e digite: `npm init`, mostrará uma série de características que você irá destacar do seu projeto, caso não queira destacar essas caracterpisticas digite `npm init -y` esse comando responde sim para tudo.
- instale a biblioteca que você ira trabalhar, digite no mesmo terminal: `npm install express` ou `npm i express`
- Para rodar noss aplicação `node src/arquivo.js`
- Ferramenta de análise de código estática (Linter). `npm i --save-dev` ou `npm i -D eslint` ela indica que sera uma dependencia de desenvolvimento e não da aplicação.<br>
  - Verificar a qualidade e a consistência do código. Ele verifica o estilo e os padrões de codificação, além de identificar possíveis erros antes que eles causem problemas em tempo de execução.
  - Aplicado principalmente durante o desenvolvimento para ajudar os desenvolvedores a escreverem código limpo e padronizado. Não está envolvido diretamente na execução da aplicação.
  - Para inicializa-lo não basta digitar `eslint`, pois você instalou globalmente, então você deve navegar até o diretório de dependências `./node_modules/.bin/eslint --init`
  - Vamos criar as tarefas do eslint `node_modules/.bin/eslint src/** test/** --fix ` ele vai executar o lint tanto na pasta dos codigos quanto na página de teste. temos que colocar no json  na parte de scripts`  "lint": "eslint src/** test/** --fix"`, para executar `npm run lint`
 - instalando outra dependencia de teste `npm i -D jest@versao -E`
 como a instalação não é global, para testar `./node_modules/.bin/jest`, apos o comando ele ira procurar por esse padrão `testMatch: **/__tests__/**/*.js?(x),**/?(*.)+(spec|test).js?(x) - 0 matches` para o curso usaremos esse padrão `test).js`, entao para rodar nosso teste digitamos `test/jest.test.js`

# Ferramentas de Testes para JavaScript e Node.js

Existem várias ferramentas populares para testes no ecossistema **JavaScript** e **Node.js**, cada uma com diferentes propósitos, desde testes unitários até testes end-to-end. Abaixo estão listadas algumas das principais ferramentas de teste que você pode utilizar:

## 1. Jest

- **Tipo**: Testes unitários, integração e mocks.
- **Descrição**: Desenvolvido pelo Facebook, **Jest** é um framework de testes completo e muito popular para aplicações JavaScript. Ele é fácil de configurar e possui recursos como "mocking", "snapshot testing" e uma interface simples para executar testes.
- **Usos principais**: Testes de unidade, teste de integração e testes de componentes de frontend.
- **Integração**: Funciona bem com React, Angular, Node.js, e outras tecnologias front e backend.

## 2. Mocha

- **Tipo**: Testes unitários e integração.
- **Descrição**: **Mocha** é um framework de testes flexível para Node.js, conhecido por sua simplicidade e capacidade de integração com outras bibliotecas, como **Chai** (para asserções). Ele oferece uma boa base para escrever e organizar testes de diferentes tipos.
- **Usos principais**: Testes de unidade e integração no Node.js.
- **Integração**: Comumente usado com bibliotecas de asserção como **Chai** ou **Sinon**.

## 3. Chai

- **Tipo**: Biblioteca de asserção (asserções "should", "expect", "assert").
- **Descrição**: **Chai** é uma biblioteca de asserção que funciona bem com Mocha e outras ferramentas. Ele fornece diferentes estilos de asserção (como `expect` ou `should`) para verificar o comportamento do código.
- **Usos principais**: Fazer comparações e verificar resultados em testes unitários.

## 4. Sinon

- **Tipo**: Biblioteca de mocks, spies e stubs.
- **Descrição**: **Sinon** é usado para espiar funções, criar stubs e simular comportamentos de código. Ele é excelente para testes onde você precisa monitorar chamadas de funções ou simular comportamentos de APIs.
- **Usos principais**: Mocks, spies e stubs para testar dependências e comportamentos sem fazer chamadas reais.

## 5. Cypress

- **Tipo**: Testes end-to-end (E2E) e integração.
- **Descrição**: **Cypress** é uma ferramenta moderna e poderosa para testar aplicações web. Ele é projetado para testes de integração e E2E, simulando a interação do usuário com a interface e verificando o comportamento do sistema de ponta a ponta.
- **Usos principais**: Testar interfaces de usuário e verificar o funcionamento completo da aplicação web.

## 6. Puppeteer

- **Tipo**: Testes de navegação (end-to-end) e automação de navegador.
- **Descrição**: **Puppeteer** é uma biblioteca para automação do Chrome e Chromium. Ele permite controlar o navegador programaticamente, sendo útil para testes end-to-end ou para verificar funcionalidades de frontend.
- **Usos principais**: Automação de tarefas de navegador e testes de interfaces de usuário.

## 7. Supertest

- **Tipo**: Testes de APIs.
- **Descrição**: **Supertest** é uma ferramenta para testar APIs HTTP. Ele é usado para fazer solicitações a um servidor web e verificar a resposta retornada, garantindo que as rotas e endpoints da API estejam funcionando corretamente.
- **Usos principais**: Testar endpoints de APIs REST.

## 8. Ava

- **Tipo**: Testes unitários e integração.
- **Descrição**: **Ava** é um framework de testes que executa testes simultaneamente (em paralelo), o que pode reduzir o tempo de execução dos testes em grandes projetos.
- **Usos principais**: Testes rápidos e eficientes, especialmente para grandes bases de código.

## 9. Playwright

- **Tipo**: Testes end-to-end.
- **Descrição**: Similar ao Puppeteer, o **Playwright** é uma ferramenta de automação de navegador que suporta múltiplos navegadores (Chrome, Firefox, Safari) e permite a criação de testes end-to-end robustos.
- **Usos principais**: Testes de interfaces web em diferentes navegadores.

## 10. Enzyme

- **Tipo**: Testes de componentes de React.
- **Descrição**: **Enzyme** é uma ferramenta para testar componentes do React, permitindo fazer renderização, simulação de eventos e interações com a interface do usuário.
- **Usos principais**: Testar componentes React, verificar a renderização e comportamento dos componentes.

---

## Como escolher a ferramenta certa?

Depende do que você quer testar:

- **Testes unitários e de integração**: Jest, Mocha, Chai, Ava.
- **Testes de componentes (React)**: Jest, Enzyme, React Testing Library.
- **Testes end-to-end**: Cypress, Playwright, Puppeteer.
- **Testes de APIs**: Supertest.

Essas ferramentas podem ser usadas isoladamente ou em conjunto para cobrir diferentes tipos de testes em uma aplicação.

## Softwares para testar APIs

## Para que serve o Postman?   

![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

- **Testar APIs:** O uso principal do Postman é validar o funcionamento das APIs, facilitando o teste de suas funcionalidades.
- **Enviar requisições HTTP:** A ferramenta possibilita o envio de diferentes tipos de requisições (GET, POST, PUT, DELETE) e visualiza a resposta do servidor em tempo real.
- **Automatização de testes:** É possível criar coleções de testes automatizados que verificam o comportamento das APIs em cenários variados.
- **Simulação de ambientes:** O Postman permite simular diferentes ambientes (como desenvolvimento, produção, etc.), para testar suas APIs em diferentes condições.

## O que é o Insomnia?

**Insomnia** é uma ferramenta de teste de APIs que permite a desenvolvedores enviar requisições HTTP e GraphQL para servidores e ver as respostas. Ele é semelhante ao Postman, sendo utilizado principalmente para testar, depurar e validar APIs RESTful e GraphQL de maneira rápida e eficiente.

## Para que serve o Insomnia?

- **Testar APIs:** O Insomnia facilita o envio de requisições HTTP (GET, POST, PUT, DELETE) e a visualização das respostas.
- **Depuração:** Ajuda a depurar as APIs verificando se elas estão respondendo corretamente às requisições feitas, sem a necessidade de construir um frontend para testes.
- **Trabalho com GraphQL:** O Insomnia possui suporte integrado ao GraphQL, permitindo que desenvolvedores façam requisições diretamente dentro do ambiente da ferramenta.
- **Gerenciamento de ambientes:** Assim como o Postman, o Insomnia permite que você configure diferentes ambientes, como desenvolvimento e produção, facilitando os testes em múltiplos cenários.

## Exemplo de Uso

Se você está desenvolvendo uma API em Node.js, pode usar o Insomnia para simular requisições HTTP e validar se sua API está funcionando como esperado. A interface simples e organizada torna o processo de envio de requisições e interpretação de respostas muito intuitivo.

### Links Úteis

- [Documentação do Insomnia](https://support.insomnia.rest/)
- [Download do Insomnia](https://insomnia.rest/download)



# o que é NodeJs?
- Ele permite usarmos o javascript no backend, e a forma que usamos o node, não é com clique de botões ou passar o mouse em cima de algo, mas sim com rotas, ou seja, eventos então basicamente o usuário vai acesasr algum determinado endereço específico da nossa aplicação e aí vamos retornar alguma coisa para o frontend trabalhar.
Lembrando ele não é uma linguagem de programação <br><br>

# Características do NodeJS
- **Arquitetura Event-loop** - ela é formada por uma CallStack (pilha de eventos)
- **Single-thread** - ele executa em apenas uma thread da CPU, Utiliza várias bibliotecas do c++ que permitem usar multithread da CPU, isso agiliza ainda mais a CallStack quando fizermos uma requisição;
- **Non-Blocking I/O(input/output não bloqueante)** - isso significa que ao fazer uma requisição não precisa retornar toda a requisição, isso faz com que não perdamos a conexão com frontend, diferente do PHP que perde a conexão e daí só fazendo uma nova requisição.
<br><br>


![node](./img/node.png)

# Como funciona uma API?
- Ela tem um fluxo de requisição e resposta, exemplo: Um site qualquer
  - A gente clica e com isso fazemos uma requisição à nossa API la no backend e ela devolve uma resposta a requisição que fizemos, entao o forntend recebe esses dados dessa resposta e ele processa, essa resposta vem através de uma estrutura de dados  <br><br>
![fluxo](./img/fluxo.png)

# Rotas
![rotas](./img/rotas2.png)
- **GET** - quer dizer que estams buscando todos os usuários dessa API;
- **POST** - quer dizer que estamos indo la e criando um novo usuário na API;
- **PUT** - estamos indo la na API no usuário 1 e editando as informações dela; 
- **DELETE** - estamos indo la na API nesse usuário 1 e deletando ele.

# Vantagens de utilizar essa estruturas de API
![vantagens](./img/vantagens.png)
- podemos ter varios fornt-ends, vários sites utilizando essa unica API conecatados a apenas um back-end
- **Comunicação padronizada** - essa estrutura padronizada onde podemos mandar para para ele tratar (web,mobile, desktop) essa estrutura é conhecida como **JSON**. 

## **JSON** - É uma estrutura de comunicação é global entre o front-end e back-end

![JSON](./img/JSON.png)

# Requisições
![requisicoes](./img/requi.png)
- **requisição do tipo GET** - estamos buscando algo do usuário nesse, contexto, se tivessemos fazendo **usuarios/1** estamos buscando algo do usuário 1 apenas 
- **requisição do tipo POST** - estamos querendo criar um usuário, nesse contexto, então mandamos as informações desse usuário, podemos mandar o nome e o email através do (request body ou body) fazemos isso pois não conseguimos mandar um objeto por URL. Temos também o header que podemos mandar o locale que especifica onde ele ta criando a conta, exe: Brasil. Ou podemos mandar um token de autenticação quando ele logar na minha aplicação ele receber um token, enviar um token para conseguir logar

# Metodos HTTP
![metodos](./img/metodos2.png)

**GET** - quando queremos criar uma rota que **liste informações**, criamos do tipo **GET**, exe: (listar todos os usuários,listar os post do meu blog)

**POST** - quando quero **criar uma informação** criamos uma rota do tipo **POST**

**PUT** - quando quero **editar uma informação existente** criamos uma rota do tipo **PUT** 

**DELETE** - quado quero **apagar alguma informação** criamos uma rota do tipo **DELETE**

## Quando fazemos alguma requisição temos como resposta (HTTP codes) que está ilustrado na imagem acima
<br>


# Entendendo: O que são Query Params, Route Params e Request Body?

### Query Params

**Query Params** (ou parâmetros de consulta) são pares chave-valor enviados na URL após o símbolo `?`. Eles são usados para filtrar, ordenar, paginar ou modificar a resposta de uma API.

- **Exemplo de uso:** 
  - URL: `https://example.com/users?age=25&city=NewYork`
  - Nesta URL, `age=25` e `city=NewYork` são Query Params.

- **Como acessar no backend (Node.js/Express):**
  - Query Params podem ser acessados através de `req.query`.

```javascript
// Exemplo de como acessar Query Params
app.get('/users', (req, res) => { // Define uma rota GET para '/users'
  const { age, city } = req.query; // Extrai os parâmetros de consulta 'age' e 'city' da URL
  res.send(`Idade: ${age}, Cidade: ${city}`); // Envia uma resposta com os valores dos parâmetros
});

```
## Route Params

**Route Params** são parâmetros que fazem parte da rota da URL. Eles são utilizados para identificar recursos específicos, como um ID de usuário, produto, etc.

- **Exemplo de uso:**
  - URL: `https://example.com/users/123`
  - Aqui, `123` é um Route Param que pode representar o ID de um usuário.

- **Como acessar no backend (Node.js/Express):**
  - Route Params podem ser acessados através de `req.params`.

```javascript
// Exemplo de como acessar Route Params
app.get('/users/:id', (req, res) => { 
  // Define uma rota GET com um parâmetro de rota ':id'
  const { id } = req.params; 
  // Extrai o parâmetro de rota 'id' da URL
  res.send(`Usuário com ID: ${id}`); 
  // Envia uma resposta com o valor do ID
});
```
## Request Body

**Request Body** é o corpo da requisição enviado pelo cliente (geralmente em requisições POST, PUT ou PATCH). Ele contém os dados que você deseja enviar ao servidor, como informações de formulário, objetos JSON, etc.

- **Exemplo de uso:** Enviando dados de um formulário para criar um novo usuário.
- **Como acessar no backend (Node.js/Express):**
  - Para acessar o Request Body, é necessário configurar o Express para parsear o corpo da requisição (ex: JSON).

```javascript
// Middleware necessário para parsear JSON no request body
app.use(express.json());

// Exemplo de como acessar o Request Body
app.post('/users', (req, res) => { // Define uma rota POST para '/users'
  const { name, email } = req.body; // Extrai os campos 'name' e 'email' do corpo da requisição
  res.send(`Usuário criado com nome: ${name} e email: ${email}`); // Envia uma resposta confirmando os dados recebidos
});
```
## Comparação com a Vida Real

- **Query Params:** Imagine que você está pesquisando produtos em um site de e-commerce e usa filtros como “cor”, “preço” ou “tamanho”. Esses filtros são como os Query Params.

- **Route Params:** Pense em um carteiro que usa o número da sua casa para entregar uma encomenda específica. Esse número é como um Route Param na URL.

- **Request Body:** Ao preencher um formulário de cadastro com seu nome e endereço, essas informações são enviadas ao servidor no corpo da requisição, assim como o Request Body.

Esses conceitos ajudam a definir como os dados são enviados e recebidos pelas APIs e são fundamentais para o desenvolvimento backend.


# REVISAO:
# Documentação sobre Requisições em APIs

## Introdução

Quando queremos fazer alguma requisição em uma API, seja para fazer login, criar alguma informação ou atualizar dados, precisamos chamar uma **Rota**.

## Métodos HTTP e Rotas

Como você já viu na aula sobre API Rest, as rotas utilizam métodos HTTP, que são:

- **GET**
- **POST**
- **PUT**
- **DELETE**

### Utilização dos Métodos HTTP

- **POST**: Usado quando queremos criar um novo recurso. Por exemplo, para criar um novo usuário na aplicação, criamos uma rota do tipo `POST`. O método `POST` indica ao servidor que queremos criar uma nova informação.

- **GET**: Utilizado para buscar ou listar informações existentes. Por exemplo, ao buscar uma lista de produtos, usamos o método `GET`.

- **PUT**: Utilizado para atualizar informações já existentes. Ao querer atualizar um recurso existente, criamos rotas com o método `PUT`.

- **DELETE**: Utilizado para excluir um recurso. Quando queremos deletar algo, usamos o método `DELETE`.

## Middlewares

### O que são Middlewares?
Middlewares são funções que ficam entre o pedido do cliente (request) e a resposta do servidor (response). Eles podem modificar, validar, filtrar ou até interromper o fluxo de uma requisição antes que chegue ao seu destino final. São amplamente utilizados para autenticação, log de atividades, validação de dados e muito mais.

## Perguntas Comuns

1. **Qual parâmetro devemos usar em uma rota que busca todos os cursos backend?**
   - Em uma rota que busca todos os cursos de backend, geralmente não é necessário um parâmetro específico, mas é comum usar um caminho como `/cursos/backend` ou adicionar query parameters, como `/cursos?categoria=backend`.

2. **Quando queremos criar uma rota para buscar todos os produtos já cadastrados, qual método HTTP devemos usar na rota?**
   - Usamos o método **GET**, pois estamos buscando informações já existentes.

<br><br>
## Primeira API:
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)



```javascript
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```
## Usando o software Insomnia para testar:
![Diagrama](./img/api.png)


# Banco de dados não sequencial (mongoDB)
- ferramentas (orm) são bibliotecas que instalamos no nosso projeto, para fazermos a conexão com o nosso banco de dados através da linguagem e das ferramentas que essa biblioteca cria, se usassemos um banco de dados SQL temos que escrever na "mão" algumas consultas, inserções, etc. Então essas bibliotecas poupam trabalho para conectar diretamente com o banco de dados e manipulalos de maneira mais fácil.  

- [npm mongoose](https://www.npmjs.com/package/mongoose?azure-portal=true)


## O que é o MongoDB?

**MongoDB** é um banco de dados NoSQL orientado a documentos. Ele armazena dados em um formato flexível de documento semelhante a JSON, o que significa que os dados não são organizados em tabelas como em bancos de dados relacionais, mas sim em coleções de documentos. Essa estrutura permite maior flexibilidade e escalabilidade no armazenamento de dados.

## Para que serve o MongoDB?

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

- **Armazenar dados de forma flexível:** O MongoDB é ideal para cenários onde os dados têm uma estrutura variável ou podem mudar com o tempo, pois não exige um esquema fixo.
- **Alta escalabilidade:** Ele é projetado para lidar com grandes volumes de dados distribuídos por múltiplos servidores, o que o torna uma escolha popular para aplicações que precisam escalar rapidamente.
- **Desempenho em tempo real:** O MongoDB é otimizado para leitura e gravação rápidas, o que o torna ideal para aplicações que exigem desempenho em tempo real, como sistemas de recomendação, análises em tempo real, entre outros.

## Exemplo de Uso

O MongoDB é frequentemente utilizado em aplicações que lidam com grandes quantidades de dados não estruturados ou semiestruturados, como catálogos de produtos, perfis de usuários, logs de sistemas, entre outros. Por exemplo, ao criar uma aplicação de e-commerce, você pode armazenar informações de produtos e usuários no MongoDB, permitindo a flexibilidade de ajustar os dados conforme as necessidades mudam.

### Links Úteis

- [Documentação do MongoDB](https://docs.mongodb.com/)
- [Download do MongoDB](https://www.mongodb.com/try/download/community)