let play=document.getElementsByClassName('play');
let video= document.getElementById('video');
let janela;
let botao1=document.getElementsByTagName('button')[0];
function abrePlayer(){
    janela=window.open('html/player.html');
}
function inicio(){
    janela=window.close();
}
/*abertuda no ep 2 de uma pagina com um
player contruido de forma diferente*/
function frame2(){
    window.open('html/iframeplayer.html');
}
