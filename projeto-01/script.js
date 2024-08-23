// o JS deve funcionara de forma dinamica, mesmo adicionando noves items
// 1) vamos mapear os itens do HTML (querySelectorAl(),getElementById()) ambos sao para pegarmos algo do HTML, o document faz referencia ao HTML

let list = document.querySelectorAll('.item');// ela vai procurar todos os itens de alguma cordenada que dermos para ele
let next = document.getElementById('next');//mapearmos os botões
let prev = document.getElementById('prev');


let count = list.length; //variavel que guarda o tamanho da lista
let active = 0;



next.onclick = () =>{
    let activeOld = document.querySelector('.active');// vai no HTML e procura uma classe chamada active e guarda na variavel activeOld
    activeOld.classList.remove('active');// depois removemos a active para depois colocar em outro item

    //adicionamos a classe active no proximo item da lista, como o index da list começa em 0 o proximo é 1, mas desse modo seria estático 
    //list[1].classList.add('active');

    //de forma dinamica, mas quando chegasse no ultimo item daria errado
    //active = active + 1; 
    // a forma correta seria assim:
    active = active >= count -1 ? 0: active + 1; //se o active for maior o igual a posição do ultimo elemento retorna ao 0, se não somamos mais um ao active, pois ele é menor que o ultimo indice
    list[active].classList.add('active'); 
}

prev.onclick = () =>{
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');
    active = active <= 0 ? count -1: active - 1; 
    list[active].classList.add('active'); 
}

