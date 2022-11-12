let play=document.getElementsByClassName('play');
let video= document.getElementById('video');
let janela;
let botao1=document.getElementsByTagName('button')[0];
function abrePlayer(){
    janela=window.open('html/iframeplayer.html');
}
function inicio(){
    janela=window.close();
}
/*abertuda no ep 2 de uma pagina com um
player contruido de forma diferente*/
function frame2(){
    window.open('html/iframeplayer.html');
}
/*NOVA OPÇAO COM SWITCH CASE
aqui abaixo ao clicar no episodio dispara uma função que entra em
acao apos 3 segundos atribuindo um src ao video*/
/*let play=document.getElementsByClassName('play');
let video=document.getElementById('video');
function frame2(){
    window.open('html/iframeplayer.html');
    setTimeout(function a(){
        video.src;
    switch(video.src){
        case play[1] : video.src='https://youtube.com/onepiece/';break;
    }
},3000);
}*/

