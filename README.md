# chainsawman
 player de chainsawman em desenvolvimento,80% concluído utilizando
 meus aprendizados em HTML5, CSS3 e JavaScript. Iniciando também o estudo
 do Git e do GitHub.

# Tela de LogIn:
*Tela de login ofereçe três opções*
->LOGAR: onde o usúario insere suas credenciais que serão analisadas, se tudo estiver certo
executa a função *log()*
->REGISTRAR: salva o usuário e senha no localStorage para que fique armazenada para ser 
usada na função *enter()*
->ENTRAR COMO CONVIDADO: apenas entra direto na aplicação sem precisar de registro

# Funcionamento do código
após criar suas credenciais na aba de registrar, usuário pode entrar na função de *enter()*, caso não tenha credenciais salvas previamente, a função *enter()* perguntará atraves de
*window.confirm()* se deseja criar as credenciais, caso não, *window.reload()* para atualizar, caso sim, encaminha para *register()* para criar as credenciais;
->APP: dentro de app, ao clicar no episódio captura o atributo *alt* da imagem selecionada e salva em local storage, esta por sua vez correponde a qual episodio deseja assistir, então
abre *iframePlayer.html*, captura o episodio salvo em *localStorage* e atribui a *src* da tag *video*;