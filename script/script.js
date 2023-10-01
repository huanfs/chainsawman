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
    video.src=`file://C:/chainsawman/${num}.mp4`; //ACESSO LOCAL DIRETO
    // video.src=`http://localhost/vid/chainsawman_${num}.mp4`;//ACESSO A LOCAL HOST
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
            wallpapper.src="./img/1.jpg";
            window.open("./html/app.html");
            arrow.style.display="block";
        },1000);  
    }
    else if(wid<=600){
        register.style.marginTop="-200px";
        wallpapper.style.marginTop="100px";
        arrow.src="./img/arrow-down.png";
        setTimeout(x=>{
            wallpapper.src="./img/2.jpg";
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
            wallpapper.src="./img/1.jpg";
    }
    else if(wid<=600&&arrow.style.display=="block"){
        let wallpapper = document.querySelectorAll("img")[0];
        let register = document.querySelectorAll("main aside")[0];
            register.style.marginTop="0";
            wallpapper.style.marginTop="0";
            arrow.style.display="none";
            wallpapper.src="./img/1.jpg"
    }
}
//*****FUNÇÃO QUE SAI DE APP.HTML E VOLTA PARA INDEX.HTML*****
function exit(){
    window.close();
}
//*****FUNÇÃO QUE CONTEM AS FUNÇÕES DE ENTRAR OU REGISTRAR*****
function enterOrRegister(){
    let enter = document.querySelectorAll("article button")[0];
    let register = document.querySelectorAll("article button")[1];
        enter.addEventListener("click", signIn);
        register.addEventListener("click", Register);
    //*****FUNÇÃO DE ENTRAR QUE CRIA TODOS OS CAMPOS DA ABA ENTRAR
    function signIn(){
        let field = document.querySelector("aside");
        while(field.firstChild){
            field.removeChild(field.firstChild);
        }
        let user = document.createElement("input");
            user.setAttribute("placeholder","insira seu usuário");
                user.type="text";
                    localStorage.getItem("userName")!=null?user.value=localStorage.userName:user.value=""
        let password = document.createElement("input");
            password.setAttribute("placeholder","insira sua senha");
                password.type="password";
                localStorage.getItem("userPassword")!=null?password.value=localStorage.userPassword:password.value=""
        let entrar = document.createElement("input");
            entrar.type="button";
                entrar.value="entrar";
                    entrar.style.backgroundColor="#ff0202d7";
                        entrar.style.color="#fff";
                            entrar.addEventListener("click", enter);
        field.style.gap="1em";
            field.appendChild(user);
                field.appendChild(password);
                    field.appendChild(entrar);
        //*****FUNÇÃO QUE VALIDA A ENTRADA, CHECANDO SE USUARIO E SENHA FORAM PREVIAMENTE SALVOS EM LOCAL STORAGE*****
        function enter(){
            let user = document.querySelectorAll("input")[0];
            let password = document.querySelectorAll("input")[1];
            //let credenciais = localStorage("usuario");
            if(user.value!=localStorage.userName||password.value!=localStorage.userPassword){
                user.value='';
                password.value='';
                if(confirm("usuário não encontrado! deseja registrar-se?")){
                    Register();
                }else{
                    location.reload();
                }
            }
            else if(user.value==localStorage.userName&&password.value==localStorage.userPassword){
                log();
            }
        }
    }
    //*****FUNÇÃO REGISTRAR QUE CRIA TODOS OS CAMPOS DA ÁREA REGISTRAR*****
    function Register(){
        let field = document.querySelector("aside");
        while(field.firstChild){
            field.removeChild(field.firstChild);
        }
        let user = document.createElement("input");
            user.setAttribute("placeholder","insira seu usuário");
                user.type="text";
                    user.id="user";
        let password = document.createElement("input");
            password.setAttribute("placeholder","insira sua senha");
                password.type="text";
                    password.id="password";
        let confirmPassword = document.createElement("input");
            confirmPassword.setAttribute("placeholder","confirme sua senha");
                confirmPassword.type="text";
                    confirmPassword.id="cPassword";
        let registrar = document.createElement("input");
            registrar.type="button";
                registrar.value="registrar";
                    registrar.style.backgroundColor="#ff0202d7";
                        registrar.style.color="#fff";
                            registrar.addEventListener("click", passwordCheck);
        field.style.gap="1em";
            field.appendChild(user);
                field.appendChild(password);
                    field.appendChild(confirmPassword);
                        field.appendChild(registrar);
        //*****FUNÇÃO DE REGISTRAR QUE SALVA USUARIO E SENHA EM LOCAL STORAGE*****
        function register(){
            let userId = document.querySelectorAll("input")[0].value;
            let userPassword = document.querySelectorAll("input")[2].value;
                localStorage.setItem("userName", userId);
                localStorage.setItem("userPassword", userPassword);
            log();
        }
        //*****FUNÇÃO QUE CHECA OS DADOS INSERIDOS NO REGISTRO*****
        function passwordCheck(){
        if(user.value.length<6){
            alert("O usuário deve ter no mínimo, 6 caracteres");
            user.style.border="2px solid red";
                user.value='';
        }
        if(password.value.length<7){
            alert("Sua senha deve ter no mínimo 8 caracteres");
            password.style.border="2px solid red";
            password.value='';
        }
        if(password.value!=confirmPassword.value){
            alert("As senhas não estão iguais");
            password.style.border="2px solid red";
            confirmPassword.style.border="2px solid red";
            password.value='';
            confirmPassword.value='';
        }
        else if(user.value.length>=6&&password.value==confirmPassword.value){
            register();
        }
    }
    }  
}
//*****SE POSSUIR CREDENCIAL, BOTÃO ENTRAR FICA PISCANDO******
function User(){
    let btnEnter = document.querySelectorAll("article button")[0];
    if(localStorage.getItem("userName")!=null&&localStorage.getItem("userPassword")!=null){
        btnEnter.className="animate";
    }
    else{
        btnEnter.className="";
    }
}