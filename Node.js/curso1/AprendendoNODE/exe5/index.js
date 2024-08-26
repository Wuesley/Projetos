let express = require('express'); // estamos chamando o framework
let app = express();// app tera acesso a todos os metodos do objeto express

app.get('/', function(req,res){
    res.send('primeira rota com express');
});

app.listen(3000,function(){
console.log("A aplicação está funcionando na porta 3000");
});

/*
estamos criando uma API, do modo como foi visto ele está jogando de qualquer jeito no corpo do html, vamos usar um software para se comunicar com a API que não seja o
navegador, o navegador usaremos depois com parser para poder criar o html para nós, baseado na resposta do express. O postman serve para testar API
*/