let ref=[];
let player = document.querySelector('iframe');










function processamento(referencia){
    if(ref.length!=0){
        localStorage.setItem('ref',ref);
        window.open('html/iframeplayer.html');
        const refFinal = localStorage.getItem('ref')
        location.reload();
    }
}










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
    //so ir adicionando as condições para que seja carregado o episodio
}

