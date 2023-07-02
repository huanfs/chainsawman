let ref=[];
let player = document.querySelector('iframe');
//se houver algo dentro do array, executa esta função para
// salvar no local storage o número do episodio, abrir o iframePlayer
// obtem o valor de local storage e recarrega a página para limpar o
// array ref
function processamento(referencia){
    if(ref.length!=0){
        localStorage.setItem('ref',ref);
        window.open('html/iframeplayer.html');
        const refFinal = localStorage.getItem('ref')
        location.reload();
    }
}
//Função que atribui o valor de local storage para abrir o episodio
// correspondente, então limpa o valor de local sotrage
function episodio(){
    if(localStorage.getItem('ref')==1){
        player.src='D:/chainsawman ep1.mp4';
        localStorage.removeItem('ref');
    }
    else if(localStorage.getItem('ref')==2){
        player.src='D:/chainsawman ep2.mp4';
        localStorage.removeItem('ref');
    }
    else if(localStorage.getItem('ref')==3){
        player.src='D:/chainsawman ep3.mp4';
        localStorage.removeItem('ref');
    }
    else if(localStorage.getItem('ref')==4){
        player.src='D:/chainsawman ep4.mp4';
        localStorage.removeItem('ref');
    }
    else if(localStorage.getItem('ref')==5){
        player.src='D:/chainsawman ep5.mp4';
        localStorage.removeItem('ref');
    }
    else if(localStorage.getItem('ref')==6){
        player.src='D:/chainsawman ep6.mp4';
        localStorage.removeItem('ref');
    }
    else if(localStorage.getItem('ref')==7){
        player.src='D:/chainsawman ep7.mp4';
        localStorage.removeItem('ref');
    }
    else if(localStorage.getItem('ref')==8){
        player.src='D:/chainsawman ep8.mp4';
        localStorage.removeItem('ref');
    }
    else if(localStorage.getItem('ref')==9){
        player.src='D:/chainsawman ep9.mp4';
        localStorage.removeItem('ref');
    }
    else if(localStorage.getItem('ref')==10){
        player.src='D:/chainsawman ep10.mp4';
        localStorage.removeItem('ref');
    }
    else if(localStorage.getItem('ref')==11){
        player.src='D:/chainsawman ep11.mp4';
        localStorage.removeItem('ref');
    }
    else if(localStorage.getItem('ref')==12){
        player.src='D:/chainsawman ep12.mp4';
        localStorage.removeItem('ref');
    }
    //so ir adicionando as condições para que seja carregado o episodio
}

