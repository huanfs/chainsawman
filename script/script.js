let player = document.querySelector('iframe');
let ep = document.querySelectorAll("article");

for(let i of ep){
    i.addEventListener("click", Processamento);
}

function Processamento(key){
let arr = [];
arr.push(key.target.alt);
if(arr.includes('episodio 01')){
    localStorage.setItem("ep",arr[0]);
    window.open("html/iframeplayer.html","blank");
}
else if(arr.includes('episodio 02')){
    localStorage.setItem("ep",arr[0]);
    window.open("html/iframeplayer.html","blank");
}
else if(arr.includes('episodio 03')){
    localStorage.setItem("ep",arr[0]);
    window.open("html/iframeplayer.html","blank");
}
else if(arr.includes('episodio 04')){
    localStorage.setItem("ep",arr[0]);
    window.open("html/iframeplayer.html","blank");
}
else if(arr.includes('episodio 05')){
    localStorage.setItem("ep",arr[0]);
    window.open("html/iframeplayer.html","blank");
}
else if(arr.includes('episodio 06')){
    localStorage.setItem("ep",arr[0]);
    window.open("html/iframeplayer.html","blank");
}
else if(arr.includes('episodio 07')){
    localStorage.setItem("ep",arr[0]);
    window.open("html/iframeplayer.html","blank");
}
else if(arr.includes('episodio 08')){
    localStorage.setItem("ep",arr[0]);
    window.open("html/iframeplayer.html","blank");
}
else if(arr.includes('episodio 09')){
    localStorage.setItem("ep",arr[0]);
    window.open("html/iframeplayer.html","blank");
}
else if(arr.includes('episodio 10')){
    localStorage.setItem("ep",arr[0]);
    window.open("html/iframeplayer.html","blank");
}
else if(arr.includes('episodio 11')){
    localStorage.setItem("ep",arr[0]);
    window.open("html/iframeplayer.html","blank");
}
else if(arr.includes('episodio 12')){
    localStorage.setItem("ep",arr[0]);
    window.open("html/iframeplayer.html","blank");
}
}


function Carregamento(){
    let num = localStorage.getItem("ep");
    let player = document.querySelector("iframe");
    player.src="https://youtube.com/q761572";//atribuir os SRC de cada episodio
    //que será o valor obtido de local storage ex:"nome do episodio + local storage + mp4";
}


