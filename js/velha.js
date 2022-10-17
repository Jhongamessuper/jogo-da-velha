// Criando um módulo para deixar o código privado.
(()=>{

    // Declarando variáveis e objetos utilizados para o jogo.

    //Variáveis constantes (Não podem ser mudadas depois durante o código)
    const TEXTO_USUARIO_X = 'Usuário X:  '; 
    const TEXTO_USUARIO_O = 'Usuário O:  ';
    
    //Variáveis declaradas com let não podem ser redeclaradas no mesmo local mas podem ser dentro de {} mas só ai depois disso ela volta a ter o seu valor de antes
    let jogadorAtual = {};
    let jogadas = [];
    let emJogo = false; //emJogo é uma variável que irá receber valores do tipo true ou false (verdadeiro ou falso)
    let jogo = {

<<<<<<< HEAD
        /*Document.querySelector retorna o primeiro elemento dentro do documento (usando ordenação em
        profundidade, pré-ordenada e transversal dos nós do documento) que corresponde ao grupo especificado de seletores*/
        jogada1: document.querySelector('.jogo-velha-1'), //Está pegando o primeiro elemento do .jogo-velha-1 e assim por diante
=======
        //Document.querySelector retorna o primeiro elemento dentro do documento (usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento) que corresponde ao grupo especificado de seletores
        jogada1: document.querySelector('.jogo-velha-1'),
>>>>>>> f47b0b96d1f85e4830f8cfb1b3d5bf4f9af79f5c
        jogada2: document.querySelector('.jogo-velha-2'),
        jogada3: document.querySelector('.jogo-velha-3'),
        jogada4: document.querySelector('.jogo-velha-4'),
        jogada5: document.querySelector('.jogo-velha-5'),
        jogada6: document.querySelector('.jogo-velha-6'),
        jogada7: document.querySelector('.jogo-velha-7'),
        jogada8: document.querySelector('.jogo-velha-8'),
        jogada9: document.querySelector('.jogo-velha-9')
    }
        //Está dizendo que a variável let chamada jogadorX e jogadorO vai receber nome, valor e pontos (o nome será digitado pelo usuário)
    let jogadorX = { 
        nome:'',
        valor: 'X',
        pontos: 0
    }

    let jogadorO = {
        nome:'',
        valor: 'O',
        pontos: 0
    }

    //Variável opções que contém:
    var opcoes = { 
        divOpcoesJogo : document.querySelector('.opcoes-jogo'),
        //Esses de baixo (usuario-x, usuario-o e btn-jogar estão no arquivo velha.html)
        usuarioX : document.getElementById('usuario-x'),
        usuarioO : document.getElementById('usuario-o'),
        btnJogar : document.getElementById('btn-jogar')
    };

    //Variável painel que contém:
    var painel = {
        painelOpcoesJogo : document.querySelector('.painel-opcoes'), //Está pegando o primeiro elemento do .painel-opcoes
        //O getElementById pega o id dentro do () no  caso ele irá pegar o id do painel-usuario-x-nome e assim por diante
        //Esses de baixo (painel-usuario-x-nome, painel-usuario-o-nome, painel-usuario-x-pontos, painel-usuario-o-pontos e proximo-jogador estão no arquivo velha.html)
        nomeX : document.getElementById('painel-usuario-x-nome'),
        nomeO : document.getElementById('painel-usuario-o-nome'),
        pontosX : document.getElementById('painel-usuario-x-pontos'),
        pontosO : document.getElementById('painel-usuario-o-pontos'),
        nomeProximoJogador: document.getElementById('proximo-jogador')
    };

    // Capturando os eventos de click

    /*addEventListener registra uma única espera de evento em
    um único alvo. O alvo do evento (en-US) pode ser um único elemento (en-US) em um documento, o documento (en-US) em si, uma janela (en-US), ou um XMLHttpRequest*/
    opcoes.btnJogar.addEventListener('click', () => {

        jogadorX.nome = opcoes.usuarioX.value; //A variáveis jogadorX e jogadorO vai pegar o nome dentro delas e esse nome vai receber o valor de usuarioX e usuarioO que está dentro de opcoes 
        jogadorO.nome = opcoes.usuarioO.value;

        if(!jogadorX.nome || !jogadorO.nome){ //Se jogadorX ou jogadorO que estão trazendo nome deles for verdadeira irá exibir uma mensagem escrita no alert abaixo
            alert('Favor informar os usuarios X e O para iniciar o jogo.'); 
            return;
        }

        // Alterar os nomes dos jogadores...
        //textContent serve para obtermos o valor de no TEXT_NODE . (text_node são aqueles que possuem apenas texto)
        painel.nomeX.textContent = TEXTO_USUARIO_X + jogadorX.nome; //Está trazendo o nomeX e nomeO do painel e eles vão receber a variável constante que declaramos no começo e irá concatenar(juntar) o nome do jogadorX e jogadorO
        painel.nomeO.textContent = TEXTO_USUARIO_O + jogadorO.nome;

        jogadorAtual = jogadorX; //O jogadorAtual irá receber jogadorX e tudo que tem dentro dele
        painel.nomeProximoJogador.textContent = jogadorAtual.nome; //Irá pegar somente o texto do nomeProximoJogador do painel e vai receber o nome do jogadorAtual
        emJogo = true; //emJogo mudou de false para true

        // Aqui tenho que esconder as opções e mostrar o painel.
        /*classList é uma propriedade somente leitura que retorna uma coleção DOMTokenList (en-US) ativa dos atributos de classe do elemento. Usar classList é uma alternativa conveniente para acessar a lista de classes de um elemento
        como uma seqüência delimitada por espaço através de element*/

        /*Métodos do classList
        add() adiciona uma ou mais classes ao elemento;
        remove() remove uma ou mais classes do elemento;
        contains() verifica se possui certa classe no elemento;
        item() retorna a classe que se encontra naquele índice*/

        opcoes.divOpcoesJogo.classList.add('esconder'); //Adicionou uma classe esconder dentro do divOpcoesJogo do opcoes
        painel.painelOpcoesJogo.classList.remove('esconder'); //Removeu uma classe esconder dentro do painelopcoesjogo do painel
    });

        //Vai adicionar um evento de click do mouse em jogada1 dentro de jogo e assim por diante
    jogo.jogada1.addEventListener('click', (e)=>{
        jogada(e, 1);
    });

    jogo.jogada2.addEventListener('click', (e)=>{
        jogada(e, 2);
    });

    jogo.jogada3.addEventListener('click', (e)=>{
        jogada(e, 3);
    });

    jogo.jogada4.addEventListener('click', (e)=>{
        jogada(e, 4);
    });

    jogo.jogada5.addEventListener('click', (e)=>{
        jogada(e, 5);
    });

    jogo.jogada6.addEventListener('click', (e)=>{
        jogada(e, 6);
    });

    jogo.jogada7.addEventListener('click', (e)=>{
        jogada(e, 7);
    });

    jogo.jogada8.addEventListener('click', (e)=>{
        jogada(e, 8);
    });

    jogo.jogada9.addEventListener('click', (e)=>{
        jogada(e, 9);
    });


    // Funções utilizadas no jogo
    
    //Função de validar uma jogada
    function  validarJogada(){
       let valor = jogadorAtual.valor; //A variável let vai receber o valor dentro de jogadorAtual
        
       //Se _estrategia_1 até 8
       if(_estrategia_1(valor) ||
          _estrategia_2(valor) ||
          _estrategia_3(valor) ||
          _estrategia_4(valor) ||
          _estrategia_5(valor) ||
          _estrategia_6(valor) ||
          _estrategia_7(valor) || 
          _estrategia_8(valor)){

            return true;
        }

        return false; //Se não vai retornar como falso
    }

    function _estrategia_1(valor){
        return (jogadas[1] == valor && jogadas[2] == valor && jogadas[3] == valor);
    }
    function _estrategia_2(valor){
        return (jogadas[4] == valor && jogadas[5] == valor && jogadas[6] == valor);
    }
    function _estrategia_3(valor){
        return (jogadas[7] == valor && jogadas[8] == valor && jogadas[9] == valor);
    }
    function _estrategia_4(valor){
        return (jogadas[1] == valor && jogadas[4] == valor && jogadas[7] == valor);
    }
    function _estrategia_5(valor){
        return (jogadas[2] == valor && jogadas[5] == valor && jogadas[8] == valor);
    }
    function _estrategia_6(valor){
        return (jogadas[3] == valor && jogadas[6] == valor && jogadas[9] == valor);
    }
    function _estrategia_7(valor){
        return (jogadas[1] == valor && jogadas[5] == valor && jogadas[9] == valor);
    }
    function _estrategia_8(valor){
        return (jogadas[3] == valor && jogadas[5] == valor && jogadas[7] == valor);
    }

    //target é o elemento quem disparou o evento. Imagine que dentro de um elemento existam outros elementos, que se clicados, disparam o evento do pai, event
    function _marcarJogada(e, indice){
        e.target.textContent = jogadorAtual.valor;
        jogadas[indice] = jogadorAtual.valor;
    }


    function jogada(e, indice){

        if(!emJogo || e.target.textContent){
            return;
        }

        _marcarJogada(e, indice);


        if(validarJogada()){
           
            setTimeout(() =>{
                alert(`Parabéns, jogador ${jogadorAtual.nome} acaba de marcar ponto. \\o/`);
                _atualizarPainel();
                _reiniciarJogo();
            }, 100)      
          
            return;
        }

        if(jogadas.filter(e => e).length == 9){

            setTimeout(()=>{
                alert('Deu velha ...');
                _reiniciarJogo();
            },100)
  
            return;
        }
        
        // Continuar jogando.
        jogadorAtual = (jogadorAtual == jogadorX) ? jogadorO : jogadorX;

        painel.nomeProximoJogador.textContent = jogadorAtual.nome;
    }
 
    //Função para reiniciar o jogo
    function _reiniciarJogo(){

        jogadas = []; //A variável jogadas vai receber nada

        //A jogada1 dentro de jogo vai receber um texto em branco e assim por diante
        jogo.jogada1.textContent = '';
        jogo.jogada2.textContent = '';
        jogo.jogada3.textContent = '';
        jogo.jogada4.textContent = '';
        jogo.jogada5.textContent = '';
        jogo.jogada6.textContent = '';
        jogo.jogada7.textContent = '';
        jogo.jogada8.textContent = '';
        jogo.jogada9.textContent = '';
    }

    //Função para o atualizarPainel
    function _atualizarPainel(){

        jogadorAtual.pontos += 1; //Os pontos dentro de jogadorAtual vai receber + 1 (é diferente do que receber pelo = porque esse operador de = ele substituiria e o += ele vai receber o valor e somar com o valor anterior)

        if(jogadorAtual.valor == "X"){ //Se o valor dentro de jogadorAtual for igual(operador de igual é ==) a X então o pontosX dentro de painel irá receber em texto o pontos dentro de jogadorAtual
            painel.pontosX.textContent = jogadorAtual.pontos;
        }else{ //Se não ele irá fazer a mesma coisa só que com o pontosO
            painel.pontosO.textContent = jogadorAtual.pontos;
        }
        
        jogadorAtual = (jogadorAtual == jogadorX) ? jogadorO : jogadorX;
        painel.nomeProximoJogador.textContent = jogadorAtual.nome;
    }
 
})()
