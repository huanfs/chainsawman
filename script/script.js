//*****TODOS OS ELEMENTOS ARTICLE QUE SERÃO CLICAVEIS*****
let ep = document.querySelectorAll("article");
//*****VARIÁVEL QUE ARMAZENA A LARGURA DA TELA******
let wid = window.innerWidth;
//*****LAÇO DE REPETIÇÃO QUE APLICA O EVENTO CLICK A TODOS OS EP(ARTICLE);
for(let i of ep){
    i.addEventListener("click", Processamento);
}
//*****FUNÇÃO QUE ARMAZENA O ATRIBUTO ALT DA IMAGEM DENTRO DE ARTICLE NO LOCAL STORAGE E ENTÃO A RECUPERA PARA ATRIBUIR AO EPISODIO CORRESPONDENTE*****
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
//*****FUNÇÃO ATIVADA QUANDO A PÁGINA DO PLAYER CARREGA PARA SETAR O SRC DE LOCAL STORAGE A TAG VIDEO*****
function Carregamento(){
    let num = localStorage.getItem("ep");
    let video = document.getElementById("video");
    video.src=`file://D:/chainsawman_${num}.mp4`;
}
//******FUNÇÃO ATIVADA NO BOTÃO "ENTRAR COMO CONVIDADO" QUE ESCONDE A ÁREA DE LOGIN E ABRE APP.HTML*****
function log(){
    let arrow = document.getElementById("arrow");
    arrow.addEventListener("click", show);
    let wallpapper = document.querySelectorAll("img")[0];
    let register = document.querySelectorAll("main aside")[0];
    if(wid>600){
        register.style.marginLeft="-200px";
        wallpapper.style.marginLeft="100px";
        arrow.src="./img/arrow-right.png";
        setTimeout(x=>{
            wallpapper.src="./img/wp2.jpg";
            window.open("./html/app.html");
            arrow.style.display="block";
        },1000);  
    }
    else if(wid<=600){
        register.style.marginTop="-200px";
        wallpapper.style.marginTop="100px";
        arrow.src="./img/arrow-down.png";
        setTimeout(x=>{
            wallpapper.src="./img/wp2.jpg";
            window.open("./html/app.html");
            arrow.style.display="block";
        },1000);
    }
}
//*****FUNÇÃO QUE ABRE A ÁREA DE LOGIN OCULTADA ANTERIORMENTE*****
function show(){
    let arrow = document.getElementById("arrow");
    if(wid>600&&arrow.style.display=="block"){
        let wallpapper = document.querySelectorAll("img")[0];
        let register = document.querySelectorAll("main aside")[0];
        register.style.marginLeft="0";
        wallpapper.style.marginLeft="0";
        arrow.style.display="none";
    }
    else if(wid<=600&&arrow.style.display=="block"){
        let wallpapper = document.querySelectorAll("img")[0];
        let register = document.querySelectorAll("main aside")[0];
        register.style.marginTop="0";
        wallpapper.style.marginTop="0";
        arrow.style.display="none";
    }
}
//*****FUNÇÃO QUE SAI DE APP.HTML E VOLTA PARA INDEX.HTML*****
function exit(){
    window.close();
}
//CRIAR A FUNÇÃO DE ENTRAR E REGISTRAR
function enterOrRegister(){
    let enter = document.querySelectorAll("article button")[0];
    let register = document.querySelectorAll("article button")[1];
    enter.addEventListener("click", signIn);
    // register.addEventListener("click", Register);
    //*****FUNÇÃO DE ENTRAR QUE CRIA TODOS OS CAMPOS DA ABA ENTRAR
    function signIn(){
        let field = document.querySelector("aside");
        while(field.firstChild){
            field.removeChild(field.firstChild);
        }
        let user = document.createElement("input");
        user.setAttribute("placeholder","insira seu usuário");
        user.type="text";
        let password = document.createElement("input");
        password.setAttribute("placeholder","insira sua senha");
        password.type="password";
        let entrar = document.createElement("input");
        entrar.type="button";
        entrar.value="entrar";
        entrar.style.backgroundColor="#ff0202d7";
        entrar.style.color="#fff";
        //entrar.addEventListener("click", enter);
        field.style.gap="1em";
        field.appendChild(user);
        field.appendChild(password);
        field.appendChild(entrar);
        //function enter(){
            //VERIFICA A SENHA SALVA EM LOCAL STORAGE/ SE TIVER ENTRA SENÃO REGISTRE-SE
        //}
    }
}
