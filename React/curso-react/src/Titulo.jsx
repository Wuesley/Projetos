
import { useState } from "react"; //informamos que queremos usar o "estado" do react

function Titulo({cor}){
   const [texto, setTexto] = useState("texto inicial"); //primeiro parametro é o valor inicial do estado, o segundo é a função que vai alterar esse estado
   // o estado é imutável, para alterar precisamos usar a função setTexto e ele diz respeito a memória de cada estado separado 
   // para ver o estado atual do componente podemos usar o método useState() sem nenhum argumento
   // exemplo: console.log(texto)
   // para alterar o estado precisamos usar a função setTexto(novoValor)
   // exemplo: setTexto("novo texto")
   // podemos ter como estado qualquer tipo de dado, não apenas string, mas também arrays e objetos, inteiro, boolean, etc.
   //vamos criar outro exemplo abaixo:
   
   const [inputText, setInputText] = useState("");//inputText vai ser o texto que estara dentro do campo input que esta no meio do codigo

   function clicou(){
    setTexto(inputText);
   }

   return (
        <div>
            <h1 style={{color:cor}}>{texto}</h1>
            <input value={inputText} onChange={(e)=>{setInputText(e.target.value)}} type="text" />
            <button onClick={clicou}>Mudar texto</button>
        </div>
    )
  
}

export default Titulo //sempre precisamos exportar o componente para ele poder funcionar e ser usado em outros arquivos