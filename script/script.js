let player = document.querySelector('iframe');
let ep = document.querySelectorAll("article");

for(let i of ep){
    i.addEventListener("click", Processamento);
}

function Processamento(key){
let arr = [];
arr.push(key.target.alt);
if(arr.includes('episodio01')){
    localStorage.setItem("ep",arr[0]);
    window.open("html/iframeplayer.html","blank");
}
else if(arr.includes('episodio02')){
    localStorage.setItem("ep",arr[0]);
    window.open("html/iframeplayer.html","blank");
}
else if(arr.includes('episodio03')){
    localStorage.setItem("ep",arr[0]);
    window.open("html/iframeplayer.html","blank");
}
else if(arr.includes('episodio04')){
    localStorage.setItem("ep",arr[0]);
    window.open("html/iframeplayer.html","blank");
}
else if(arr.includes('episodio05')){
    localStorage.setItem("ep",arr[0]);
    window.open("html/iframeplayer.html","blank");
}
else if(arr.includes('episodio06')){
    localStorage.setItem("ep",arr[0]);
    window.open("html/iframeplayer.html","blank");
}
else if(arr.includes('episodio07')){
    localStorage.setItem("ep",arr[0]);
    window.open("html/iframeplayer.html","blank");
}
else if(arr.includes('episodio08')){
    localStorage.setItem("ep",arr[0]);
    window.open("html/iframeplayer.html","blank");
}
else if(arr.includes('episodio09')){
    localStorage.setItem("ep",arr[0]);
    window.open("html/iframeplayer.html","blank");
}
else if(arr.includes('episodio10')){
    localStorage.setItem("ep",arr[0]);
    window.open("html/iframeplayer.html","blank");
}
else if(arr.includes('episodio11')){
    localStorage.setItem("ep",arr[0]);
    window.open("html/iframeplayer.html","blank");
}
else if(arr.includes('episodio12')){
    localStorage.setItem("ep",arr[0]);
    window.open("html/iframeplayer.html","blank");
}
}


function Carregamento(){
    let num = localStorage.getItem("ep");
    let video = document.getElementById("video");
    video.src=`file://D:/chainsawman_${num}.mp4`;
}


