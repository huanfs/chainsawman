let player = document.querySelector('iframe');
let ep = document.querySelectorAll("article");
let wid = window.innerWidth;
for(let i of ep){
    i.addEventListener("click", Processamento);
}

function Processamento(key){
let arr = [];
arr.push(key.target.alt);
if(arr.includes('episodio01')){
    localStorage.setItem("ep",arr[0]);
    window.open("../html/iframeplayer.html","blank");
}
else if(arr.includes('episodio02')){
    localStorage.setItem("ep",arr[0]);
    window.open("../html/iframeplayer.html","blank");
}
else if(arr.includes('episodio03')){
    localStorage.setItem("ep",arr[0]);
    window.open("../html/iframeplayer.html","blank");
}
else if(arr.includes('episodio04')){
    localStorage.setItem("ep",arr[0]);
    window.open("../html/iframeplayer.html","blank");
}
else if(arr.includes('episodio05')){
    localStorage.setItem("ep",arr[0]);
    window.open("../html/iframeplayer.html","blank");
}
else if(arr.includes('episodio06')){
    localStorage.setItem("ep",arr[0]);
    window.open("../html/iframeplayer.html","blank");
}
else if(arr.includes('episodio07')){
    localStorage.setItem("ep",arr[0]);
    window.open("../html/iframeplayer.html","blank");
}
else if(arr.includes('episodio08')){
    localStorage.setItem("ep",arr[0]);
    window.open("../html/iframeplayer.html","blank");
}
else if(arr.includes('episodio09')){
    localStorage.setItem("ep",arr[0]);
    window.open("../html/iframeplayer.html","blank");
}
else if(arr.includes('episodio10')){
    localStorage.setItem("ep",arr[0]);
    window.open("../html/iframeplayer.html","blank");
}
else if(arr.includes('episodio11')){
    localStorage.setItem("ep",arr[0]);
    window.open("../html/iframeplayer.html","blank");
}
else if(arr.includes('episodio12')){
    localStorage.setItem("ep",arr[0]);
    window.open("../html/iframeplayer.html","blank");
}
}


function Carregamento(){
    let num = localStorage.getItem("ep");
    let video = document.getElementById("video");
    video.src=`file://D:/chainsawman_${num}.mp4`;
}


function log(){
    let wallpapper = document.querySelectorAll("img")[0];
    let register = document.querySelectorAll("main aside")[0];
    if(wid>600){
        register.style.marginLeft="-200px";
        wallpapper.style.marginLeft="100px";
        setTimeout(x=>{
            wallpapper.src="D:/denji2.jpg";
            window.open("./html/app.html");
        },1000);  
    }
    else if(wid<=600){
        register.style.marginTop="-250px";
        wallpapper.style.marginTop="100px";
        setTimeout(x=>{
            wallpapper.src="D:/denji2.jpg";
            window.open("./html/app.html");
        },1000);
    }
}

function exit(){
    window.close();
}

function foco(){
    let wallpapper = document.querySelectorAll("img")[0];
    let register = document.querySelectorAll("main aside")[0];
    if(wid>600){
        wallpapper.style.marginLeft="0px";
        register.style.marginLeft="0px";
        register.style.opacity="1";
        wallpapper.src="D:/denji4.jpg"
    }
    else if(wid<=600){
        wallpapper.style.marginTop="0px";
        register.style.marginTop="0px";
        wallpapper.src="D:/denji4.jpg"
    }
}