# Guia de Estudos: Node.js

## O que é Node.js?
Node.js é uma **plataforma** que permite executar JavaScript fora do navegador, no servidor. Pense no Node.js como uma "cozinha" onde o chef (JavaScript) pode cozinhar não só no forno do navegador, mas em qualquer fogão, ou seja, em servidores.

## O que ele faz?
Node.js é usado para criar servidores que respondem a requisições de usuários, como quando você entra em um site ou envia uma mensagem pelo WhatsApp. Ele gerencia essas requisições de forma eficiente, como um atendente que consegue lidar com muitos clientes ao mesmo tempo sem se atrapalhar.

## Qual problema ele resolve?
Node.js resolve o problema de escalabilidade, ou seja, a capacidade de um servidor de atender várias conexões simultâneas. Imagine um restaurante que pode atender apenas um cliente por vez (PHP ou Java em certos cenários). Node.js é como um restaurante que consegue servir vários clientes ao mesmo tempo, sem perder a eficiência.

## O que ele é melhor que Java e PHP?
Node.js é melhor que Java e PHP em situações onde há muitas conexões simultâneas, como em um chat em tempo real ou em um sistema de streaming. Ele usa um modelo de eventos, o que significa que não bloqueia o fluxo de operações ao processar uma requisição.

**Exemplo da vida real:** Imagine um atendente de drive-thru que consegue pegar pedidos de várias pessoas ao mesmo tempo (Node.js), enquanto outros só conseguem pegar um pedido por vez (PHP ou Java).

## O que ele é pior que Java e PHP?
Node.js pode ser menos eficiente em operações pesadas de CPU, como cálculos complexos, porque ele é single-threaded, ou seja, usa apenas um "fio de execução" por vez.

**Exemplo da vida real:** É como se o atendente fosse excelente em pegar vários pedidos rápidos, mas, se ele tiver que preparar um pedido muito complicado, vai demorar mais, porque ele só tem duas mãos.

## Node.js suporta mais conexões que PHP e Java em uma máquina igual?
Sim! Cada conexão é tratada como um evento dentro do Node.js, permitindo que ele suporte muitas conexões simultâneas. PHP e Java podem acabar sobrecarregando uma máquina mais rapidamente quando o número de conexões é muito alto.

## O que é npm e o que se pode fazer com ele? O que ele resolve?
O **npm (Node Package Manager)** é como um grande mercado de plugins e bibliotecas prontos. Em vez de construir tudo do zero, você pode "comprar" ferramentas prontas para adicionar ao seu projeto. Por exemplo, se você precisar de uma calculadora, em vez de programá-la do zero, pode buscar uma no npm.

**Exemplo da vida real:** Imagine construir uma casa. Com npm, é como se você pudesse comprar pregos, portas e janelas prontos, em vez de fabricar tudo manualmente.

## Como iniciar um projeto corretamente? Precisamos do package.json? Para que ele serve?
Para iniciar um projeto Node.js, você usa o comando `npm init`. Isso cria o arquivo `package.json`, que é como uma "lista de compras" e "manual de instruções" para o seu projeto. Ele guarda informações sobre as bibliotecas que você usa e as versões dessas bibliotecas.

## O que é o módulo HTTP?
O módulo HTTP é uma ferramenta do Node.js que permite criar servidores web. Ele é o responsável por "ouvir" as requisições dos usuários e "responder" a elas.

**Exemplo da vida real:** Pense nele como um carteiro que entrega e recebe mensagens de diversas pessoas.

## O que é uma API?
API (Application Programming Interface) significa **Interface de Programação de Aplicações**. Ela permite que diferentes programas conversem entre si. Imagine que você tem dois amigos que falam idiomas diferentes. A API seria como um tradutor entre eles. É uma maneira de se comunicar via HTTP a um servidor e fazer operações como visualizar, deletar,criar,e atualizar dados, é o (CRUD). Grandes aplicações como facebook, insta usam APIs, grande parte dos softwares desenvolvidos em Node.js tem uma APIs, e utilizam um framework chamado express para isso.

## O que é CRUD em Node.js?
CRUD é um acrônimo para **Create, Read, Update, Delete**, que são as quatro operações básicas de gerenciamento de dados. Em Node.js, usamos essas operações para manipular dados em um banco de dados.

**Exemplo da vida real:** Pense em CRUD como as operações que você realiza ao gerenciar um álbum de fotos: você pode adicionar fotos (Create), ver fotos (Read), alterar fotos (Update) e apagar fotos (Delete).

## O que é REST e RESTful? Quais as diferenças entre um e outro?
REST é um estilo arquitetural para construir APIs, onde se usa os verbos HTTP (como GET, POST, DELETE) para realizar ações no servidor. RESTful é quando uma API segue corretamente os princípios do REST.

**Exemplo da vida real:** REST é como a receita de um bolo. RESTful é quando você segue a receita à risca.

## O que são verbos HTTP (GET, POST, DELETE, PUT...)?
Os verbos HTTP são ações que indicam o que queremos fazer em uma API.  
- **GET:** Pegar algo do servidor (como baixar um arquivo).
- **POST:** Enviar algo para o servidor (como fazer login).
- **DELETE:** Apagar algo no servidor (como excluir uma conta).
- **PUT:** Atualizar algo no servidor (como editar uma postagem).

## O que é Express?
Express é um **framework** para Node.js que simplifica o processo de criar servidores web. Ele facilita o gerenciamento de rotas e respostas HTTP. É uma framework web muito utilizado para criar aplicações em Node.js, utiliza em seu core o módulo HTTP para criar as comunicações, além de outros módulos, podemos criar uma API com express facilmente. Para instalar:

```bash
npm init;
npm install express;
```
o Express será instalado e adicionado as dependencias do nosso projeto.

**Exemplo da vida real:** Se Node.js é o forno, Express é a receita pronta para você não precisar descobrir o tempo e a temperatura ideal de assar o bolo sozinho.

## O que são rotas?
Rotas são os caminhos que o servidor segue para saber qual resposta ele deve dar a uma requisição. Cada rota leva a uma página ou a uma ação específica. Nos sites e nas PIs temos o que chamamos de rotas que é basicamente a URL que queremos acessar, porém quando tratamos de uma API chamamos as URLs de rotas. No Express, vamos criar as nossas rotas para serem acessadas via HTTP e responderem baseadas numa lógica que inserirmos, e cada rota vai receber um método HTTP, que deve coincidir com o proposto pelo REST, conforme vimos anterioriormente.

**Exemplo da vida real:** Pense em um GPS que segue uma rota específica para te levar de um lugar a outro. No servidor, as rotas indicam onde as requisições devem "chegar".

## O que é o Postman?

**Postman** é uma ferramenta amplamente utilizada para testar APIs. Ele permite que desenvolvedores façam requisições HTTP (como GET, POST, PUT, DELETE) e verifiquem o comportamento das rotas da API sem a necessidade de uma interface gráfica ou frontend. O Postman ajuda a simular requisições de usuários, verificando se o servidor responde de maneira adequada e permitindo a depuração de problemas de rede e comunicação.

## Para que serve o Postman?

- **Testar APIs:** O uso principal do Postman é validar o funcionamento das APIs, facilitando o teste de suas funcionalidades.
- **Enviar requisições HTTP:** A ferramenta possibilita o envio de diferentes tipos de requisições (GET, POST, PUT, DELETE) e visualiza a resposta do servidor em tempo real.
- **Automatização de testes:** É possível criar coleções de testes automatizados que verificam o comportamento das APIs em cenários variados.
- **Simulação de ambientes:** O Postman permite simular diferentes ambientes (como desenvolvimento, produção, etc.), para testar suas APIs em diferentes condições.

## Exemplo de Uso

Ao desenvolver uma API em Node.js, você pode usar o Postman para enviar uma requisição POST com dados e verificar se a sua API lida corretamente com essa requisição, sem a necessidade de construir um frontend apenas para testes. O Postman oferece uma interface simples para enviar e receber dados, facilitando o processo de depuração e desenvolvimento de APIs.

### Links Úteis

- [Documentação do Postman](https://learning.postman.com/docs/getting-started/introduction/)
- [Guia de Automação de Testes com Postman](https://learning.postman.com/docs/writing-scripts/test-scripts/)

