/*
Modulos de file system:
- um dos mais utilizados;
- ele serve para trabalhar com arquivos e diretórios;
- já é incluso no node, ou seja, não precisamos instalar
*/

const { error } = require('console');
let {readFile,writeFile} = require('fs');

readFile("arquivo.txt","utf8",(error,texto)=>{
    if(error){
        throw error;
    }else{
        console.log(texto);
    }
});

writeFile("arquivo.txt","texto que queremos escrever no arquivo",(error)=>{
    if(error){
        throw error;
    }else{
        console.log("escreveu com sucesso!");
    }
})