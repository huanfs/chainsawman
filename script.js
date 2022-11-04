let play=document.getElementsByClassName('play');
let video= document.getElementById('video');
let janela;
let botao1=document.getElementsByTagName('button')[0];
function abrePlayer(){
    janela=window.open('player.html');
    console.log(videoSRC);
}
function inicio(){
    janela=window.close();
}
