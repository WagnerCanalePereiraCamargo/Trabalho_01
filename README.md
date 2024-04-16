PASSOS PARA TODA A CRIAÇÃO OLA MUNDO 

EXPLICAÇÃO DO INDEX.HTML

1. Importação do Vue.js:
   - `<script src="https://unpkg.com/vue@3.4.22/dist/vue.global.js"></script>`: Esta linha importa a biblioteca Vue.js de uma CDN (Content Delivery Network). Ela permite que você utilize o Vue.js em seu projeto, especificamente a versão 3.4.22.

2. Elemento HTML Principal:
   - `<div id="divPrincipal">...</div>`: Este bloco de código define um elemento `div` com o atributo `id` definido como "divPrincipal". Este elemento serve como o ponto de montagem principal para o aplicativo Vue.js. Todo o conteúdo Vue será montado dentro deste elemento.

3. Interpolação de Dados:
   - `<h1>{{ verMsg ? msgInicial : 'Sem mensagens!' }}</h1>`: Dentro do elemento `div`, há um cabeçalho `<h1>` que contém uma expressão de interpolação de dados Vue. Essa expressão exibe a variável `msgInicial` se a variável `verMsg` for verdadeira; caso contrário, exibe 'Sem mensagens!'.

4. Importação do Script do Aplicativo:
   - `<script src="./meuScript.js"></script>`: Esta linha importa um script chamado `meuScript.js`. Presumivelmente, esse arquivo contém a lógica do aplicativo Vue.js, como a definição dos dados e o montagem do aplicativo no elemento com o id `divPrincipal`.


EXPLICAÇÃO DO SCRIPT.JS


1. Criação do Aplicativo Vue:
   - `const meuPrimeiroApp = Vue.createApp({})`: Aqui, criamos um novo aplicativo Vue utilizando o método `Vue.createApp()`. Esse método recebe um objeto como argumento, onde podemos definir as opções do aplicativo Vue, como componentes, dados, métodos e muito mais.

2. Definição dos Dados do Aplicativo:
   - `data() { ... }`: Dentro do objeto passado para `Vue.createApp()`, definimos um método `data()` que retorna um objeto. Este objeto contém os dados do aplicativo Vue. No exemplo, temos duas propriedades: `msgInicial` e `verMsg`. `msgInicial` contém a string 'Olá, mundo!', e `verMsg` é inicializada como `false`.

3. Montagem do Aplicativo:
   - `const mountedApp = meuPrimeiroApp.mount('#divPrincipal')`: Por fim, este trecho de código monta o aplicativo Vue na página HTML. Ele associa o aplicativo Vue ao elemento existente com o id `divPrincipal`, o que significa que o Vue.js controlará este elemento e atualizará seu conteúdo conforme necessário com base nos dados definidos anteriormente.


COPIA DA APOSTILA COM AS DEVIDAS EXPLICAÇOES NAS APLICAÇOES VUE.JS

           A PROGRAMAÇÃO FRONT-END E OS FRAMEWORKS JAVASCRIPT

1. INTRODUÇÃO: O QUE SE ESPERA DE UM FRONT-END?
    A navegação por sites de Internet se tornou algo tão corriqueiro que as 
    características e limitações já são parte da experiência. 
    Porém, quando comparamos a experiência do usuário num sistema WEB
    com a de uma aplicação desktop, vemos algumas vantagens desta segunda em 
    relação à primeira.
    Começaremos do ponto evolutivo de um sistema WEB onde as páginas 
    têm o seu lado cliente e o lado servidor, ou o conceito de páginas dinâmicas, que 
    propiciou a criação de aplicações completas e complexas, já que um software do 
    lado servidor faz o processamento de informações enviadas a eles e as devolve 
    na forma de uma nova página HTML.
    Muita coisa mudou desde o início da WEB. Hoje os navegadores e a    
    própria linguagem HTML evoluíram muito.
    Veja esta citação, retirado de uma das obras que formam a bibliografia 
    deste material:
    A força da HTML5 não está apenas nos novos elementos e atributos, 
    mas também na possibilidade de acessá-los, manipulá-los e formatá-
    los com JavaScript e CSS utilizando o Document Object Model (DOM), 
    que é a interface entre a linguagem JavaScript e os objetos/ elementos 
    da linguagem HTML e que ofecere uma maneira-padrão para a 
    construção de sites ricos e interativos com HTML, CSS e JavaScript.
    (TERUEL, 2014, p. 18) Durante esta unidade, trataremos das características, das limitações e 
    das soluções apresentadas nestes “anos 20”. Senão todas, pelo menos em 
    profundidade suficiente para que você possa se ambientar no assunto que será 
    tratado por todas as outras unidades.
    Não se pode esperar que sejam abordadas todas as soluções, até porque, 
    enquanto você está lendo esta frase, novas coisas estão surgindo - coisas estas 
    que poderão fazer algum assunto deste material ser considerado, em pouco 
    tempo, obsoleto. Portanto, atente-se ao conceito, aos princípios e às características da
    programação WEB em si, que é aquilo que (quase) nunca muda.
    Estamos ainda desconsiderando, em meio a tantas diferenças, a 
    programação mobile (que tecnicamente seria um meio-termo entre as aplicações 
    desktop e WEB).
    Para citar alguma coisa, segue o trecho de uma das obras citadas na 
    bibliografia deste material:
    A forma de interação também difere bastante dos computadores. Em 
    um computador tradicional, há um teclado físico e um mouse, tornando 
    a    digitação de palavras, números e caracteres especiais bastante 
    rápida e prática; já em um smartphone, utiliza-se o toque diretamente 
    na interface, em vez do mouse, e um teclado virtual (às vezes 
    reduzido). Em dispositivos móveis, você precisa se preocupar com a  
    usabilidade, em que as interfaces intuitivas e práticas são essenciais.
    (SIMAS, BORGES, et al., 2019, p. 22)
    Então, sem mais delongas, seguem alguns destes tópicos:


1.1.O RELOAD

    Um dos problemas que ainda distanciam uma aplicação WEB das 
    aplicações desktops é percebida justamente quando há a troca de informações 
    entre o usuário e o servidor: o reload. 
    É assim com a página no Google, por exemplo: Você escreve alguma 
    coisa na caixa de pesquisa e, ao clicar no botão “pesquisar”, uma mensagem é 
    enviada para o servidor WEB que irá interpretar o comando e criar outra página. 
    Esta será transmitida para o seu navegador e renderizada na sua tela.
    Isto funciona, é verdade (até porque, se o Google parar de funcionar, 
    abrace o cruch e prepare-se para o fim dos tempos). O ponto de interesse aqui   
    é outro: nos casos de reload de página, mesmo quando uma pequena parte do 
    HTML é modificado, toda a página é recarregada, consumindo recursos e 
    atrapalhando a experiência do usuário.

1.2.LIMITAÇÕES DO NAVEGADOR

    Quando se cria um software desktop, têm-se em mente as características, 
    principalmente, do sistema operacional onde ele estará funcionando. Já num 
    sistema WEB, não observamos o sistema operacional, mas sim o navegador.
    Para piorar, vários dispositivos com variados sistemas operacionais têm seus 
    navegadores e então o próprio layout das telas deverá ser pensado (ou deveria!) 
    para atender aos diferentes tamanhos de tela e de recursos de hardware.
    Além desta gama muito variada de hardwares, uma das grandes (se não 
    a maior) limitação de um sistema WEB é o próprio navegador. Isto porque ele é 
    criado para interpretar as 3 tecnologias que preenchem toda a programação de 
    frontend: HTML, CSS e JavaScript. Sim, você vai me dizer dos plugins ou dos 
    applets Java, por exemplo; ainda assim, tudo acabará sendo executado dentro 
    de uma TAG HTML.
    O que temos de programação pura, aquela que é interpretada diretamente 
    pelo navegador, é o JavaScript. Apesar de ser uma linguagem de baixa 
    dificuldade de aprendizado, é uma linguagem limitada, seja pela limitação do 
    navegador em relação ao acesso que este tem ao sistema operacional (utilizar 
    recursos de hardware por exemplo) quanto ao fato de ser uma linguagem 
    interpretada e não compilada, que traz problemas não só de velocidade quanto 
    de proteção de propriedade intelectual do código-fonte.
    Há muita promessa de técnicas e formas de proteger o código-fonte, mas 
    sem a mesma eficiência de um sistema desktop compilado.
    Por fim, ainda sobre o assunto, temos de levar em consideração o fato de 
    que o JS (assim como o HTML e CSS) é interpretado por diferentes navegadores
    e em diferentes dispositivos. Isto traz problemas, dede discretas diferenças 
    visuais até mesmo mais sérios, como diferenças bruscas de comportamento e 
    até mesmo impossibilidades de funcionamento em alguns cenários

1.3.DOM
    Veja esta citação, retirada do site MDN WEB Docs:
    “O Modelo de Objeto de Documento (DOM) é uma interface de 
    programação para documentos HTML, XML e SVG. Ele fornece uma 
    representação estruturada do documento como uma árvore. O DOM
    define métodos que permitem acesso à árvore, para que eles possam 
    alterar a estrutura, estilo e conteúdo do documento. O DOM fornece 
    uma representação do documento como um grupo estruturado de nós 
    e objetos, possuindo várias propriedades e métodos. Os nós também 
    podem ter manipuladores de eventos que lhe são inerentes, e uma vez 
    que um evento é acionado, os manipuladores de eventos são 
    executados. Essencialmente, ele conecta páginas WEB a scripts ou 
    linguagens de programação.” (MOZILLA, 2021)
    Na prática, é através da manipulação do DOM que podemos acessar 
    componentes de um HTML e alterá-los, pois cada parte do HTML tem a sua 
    representação nele.
    O DOM não é parte de uma linguagem, mas sim uma implementação dos 
    navegadores.
    Outra informação importante: o DOM existe desde os princípios do HTML. 
    Porém, sua implementação como a gente conhece hoje se deu no início dos 
    anos 2000, sendo, portanto, implementado na programação WEB a partir de 
    então.
    A manipulação dos atributos e métodos do DOM possibilita ao 
    programador acessar partes do HTML como objetos, não só organizando melhor 
    a estrutura de programação em si como também fazendo com que apenas um 
    pedaço do documento seja alterado, evitando o reload do documento todo.
    Para que se possa manipular as informações contidas no DOM você pode 
    utilizar o JavaScript.
    Esta implementação trouxe uma grande evolução à programação WEB, 
    já que, entre outras coisas, elimina os vários problemas do reload e consegue 
    tratar um HTML como uma coleção de objetos (com métodos e atributos) ao 
    invés de tratar como um conjunto de tags, simplesmente.
    A documentação do DOM “padrão” pode ser vista em:
    https://DOM.spec.whatwg.org/ (visitada em 10/01/2021)
    Lembro você que esta implantação é um padrão, sim. Mas não é, 
    necessariamente, implementada da mesma forma e na mesma fidelidade em 
    todos os navegadores. 
    Preocupações de compatibilidade à parte, a partir do uso do DOM, da 
    forma como é feito atualmente, toda a abordagem da programação WEB foi 
    mudada, fazendo de uma página HTML algo muito mais próximo aos sistemas 
    desktop. Um exemplo disso é o Single Page Apllication, que veremos a seguir e 
    no decorrer de outro momento nesta disciplina.

1.4.SPA

    Uma Single Page Application, ou simplesmente SPA, é o termo utilizado 
    para uma aplicação WEB que funciona “em uma única página”. Isto significa que 
    todo o conteúdo da aplicação é carregado de uma só vez, sendo exibido e 
    acessado conforme a necessidade. Podemos obter uma definição mais completa 
    na citação abaixo, retirado do site MDN WEB Docs:
    “Um SPA (aplicativo de página única) é uma implementação de 
    aplicativo da WEB que carrega apenas um único documento da WEB
    e, em seguida, atualiza o conteúdo do corpo desse único documento 
    por meio de APIs JavaScript” (MOZILLA, 2021b)
    Assim, ao invés de ficar responsável por renderizar ou processar a 
    renderização do HTML do lado cliente, num SPA o servidor ficará responsável 
    apenas por lidar com os dados a serem manipulados por este sistema.
    Esta comunicação se dá através, geralmente, de JSON. O JSON
    (JavaScript Object Notation) é um modelo para armazenamento e transmissão 
    de informações no formato de texto puro, o mesmo formato do código dos
    próprios documentos HTML. Veja como descreve um pequeno trecho de uma 
    das obras desta bibliografia:
    O JSON é um formato de troca de informações entre sistemas que 
    memoriza os dados em forma de objeto JavaScript. (ZABOT, 2020, p. 230)
    Até a pouco tempo os motores de busca (como o Google – tem mais 
    algum?) não conseguiam lidar bem com os conteúdos dos spas. Isto fazia com 
    que ele não fosse implementado em alguns projetos onde a boa posição nestes 
    sites fosse algo relevante. Porém, atualmente, isto não é mais um problema. 
    Assim, o SPA é o futuro do padrão de construção de aplicativos WEB.

2. OS FRAMEWORKS JAVASCRIPT

2.1.INTRODUÇÃO SOBRE FRAMEWORKS JAVASCRIPT

    Veja a citação a seguir, retirada do site MDN WEB Docs:
    “Uma estrutura é uma biblioteca que oferece opiniões sobre como o 
    software é construído. Essas opiniões permitem previsibilidade e 
    homogeneidade em um aplicativo; a previsibilidade permite que o 
    software alcance um tamanho enorme e ainda possa ser mantido; 
    previsibilidade e manutenção são essenciais para a saúde e 
    longevidade do software.” (MOZILLA, 2021c)
    Pois bem. Este assunto é o principal assunto desta disciplina e tudo o que 
    você verá aqui terá o objetivo de fazer com que o entendimento, o uso e a 
    escolha de um framework JavaScript, sejam auxiliados.
    Podemos, através da citação acima, entender que um framework é uma 
    grande biblioteca com vários trechos de código escritos em JavaScript, 
    acessíveis de tal forma a tornar a programação algo mais fácil.
    Um navegador entende JavaScript. Assim, tudo o que um framework fará 
    será convertido em JavaScript antes de ser executado.
    O lado bom disso tudo é que você poderá utilizar trechos de código 
    altamente testados, eficientes e que exigiram um conhecimento técnico muito 
    grande para serem produzidos. Você pode ser um gênio do JavaScript e então 
    dispensar o uso de um framework. Se for este o seu caso, então a sugestão e ir 
    fazer o seu próprio framework. Que tal? Foi assim que nasceram muitos 
    frameworks e bibliotecas, não só JavaScript mas CSS também (é o caso do 
    Bootstrap, do Twitter, que é uma grande biblioteca, inicialmente de CSS mas que 
    também tem códigos JS para efeitos em tags HTML). E não para por aí: Além de 
    serem bibliotecas, muitos frameworks introduzem uma forma de programar e de     
    organizar os projetos que visam facilitar a produção de aplicações WEB. Muitos, 
    também, oferecem aplicativos que são uma mão na roda para as mais variadas 
    operações, desde o controle de dependências até a otimização de aplicações 
    HTML para desktops e dispositivos móveis. Este é, aproveitando o assunto, uma 
    das formas de diferenciar bibliotecas de frameworks propriamente ditos, este 
    segundo termo destinado aos projetos mais completos que não são “apenas” um 
    conjunto de código JS. 
    A seguir vamos ver alguns recursos e características destes 
    (maravilhosos) projetos. Depois citaremos os mais queridinhos dos 
    programadores atualmente (se você for do futuro, eu corrijo: os preferidos pelo 
    menos no início dos anos 20)

2.2.DATA-BIND

    Uma das grandes contribuições dadas pelos frameworks é a fácil 
    utilização do Data-Bind
    Data-Binding é uma maneira de pegar informações de um objeto HTML e 
    exibi-la na aplicação sem a necessidade de uma programação complexa. Isto 
    ficará mais claro quando implementarmos, mas aqui tentarei te fazer entender o 
    conceito.
    Imaginemos um caixa de texto e um TAG qualquer de texto, como um H1 
    por exemplo. Agora pense que você desejaria que, ao escrever algo na caixa de 
    texto, este texto fosse imediatamente mostrado nesta TAG. Isto é possível, sim, 
    como JavaScript, mas é muitíssimo mais simples se utilizarmos um framework
    para isso.
    Ajuda uma citação da nossa bibliografia:
    O data binding, ou ligação de dados, é uma técnica que une as fontes 
    de dados e as mantém em sincronia com a interface de usuário do app.
    (SIMAS, BORGES, et al., 2019, p. 184)
    Além de proporcionar esta forma de iteração, automática, em tempo real, 
    sem a necessidade de reload, os frameworks geralmente proporcionam formas
    diferentes de implementação do Data-Bind, fazendo com que o nosso exemplo 
    acima pudesse ser implementado de tal forma que, se escrevêssemos na caixa 
    de texto, o H1 seria alterado e vice versa (o Two-Way Data-Bind), ou apenas em 
    uma direção (One-Way Data-Bind) ou até mesmo fazer com que esta alteração 
    fosse feita apenas uma vez (One-Time Data-Bind)
    E isto é feito com um comando simples, de uma linha. Se fosse em 
    JavaScript puro, você gastaria várias, dependendo da forma como escolheria 
    fazer. Além do mais, uma implantação destas em um framework já foi testada 
    exaustivamente, além de revista por vários programadores especializados, 
    tornando o processo muito mais confiável. Fora o fato que, num ambiente de 
    programação em grupo, a utilização de um framework poupará você de ter de 
    explicar todo o seu código a outro integrante do projeto.

2.3.ROTEAMENTO E GESTÃO DE ESTADO

    Você já deve estar acostumado ao conceito de rotas na programação 
    WEB. É o fato de chamar arquivos de diferentes pastas dentro de uma estrutura 
    de pastas em um repositório. 
    Os frameworks implementam estes recursos de forma mais automatizada, 
    permitindo que você crie rotas através de comandos específicos no código e o 
    próprio framework se encarregará de fazer o resto. Isto fará com que a 
    experiência de programação seja mais clara e organizada, além de facilitar o 
    reuso de código. Isto ficará mais claro na utilização, mais à frente. Por hora basta 
    você saber que os frameworks oferecem este sistema que facilita e em muito a 
    produção de sistemas mais complexos. Você vai ouvir este termo associado ao 
    modelo MVC que é também bastante utilizado nestes frameworks
    Outro conceito, geralmente presente nos frameworks JavaScript é o 
    conceito de Gestão de Estado. No final desta Unidade você terá, na lista de links, 
    um sobre o assunto. Vale a pena ler.
    Gestão de Estado é um sistema, dentro do conjunto de ferramentas do 
    framework, que tem como objetivo gerenciar o estado (comportamento / 
    informações) de componentes dentro de um projeto. Desta forma proporciona ao 
    desenvolvedor a administração bem mais organizada das informações trocadas 
    entre eles (os componentes) de forma centralizada e mais facilmente acessível.
    Todos estes termos podem trazer alguma confusão, como venho 
    comentando em cada um destes tópicos. Mas não se preocupe: o importante 
    agora é saber que eles existem e procurar fazer uma comparação ao modelo 
    tradicional de programação (como um modelo monolítico com PHP, por exemplo)
    Conforme você comece a experimentar o uso destes conceitos no próprio 
    uso dos frameworks, tudo fará mais sentido.
    Acima descrevi alguns dos vários conceitos que são apresentados pela 
    maioria dos frameworks mais consagrados atualmente (lembrando daquele 
    detalhe de que eu estou aqui no começo da década de 2020).
    Além destes citados, cada framework traz a sua própria estrutura de 
    funcionamento, cada qual defendida ou atacada em discussões acaloradas em 
    diversos debates e artigos. Não caberá, nem a mim, nem a este momento e nem 
    mesmo a esta disciplina, convencê-lo de qual caminho seguir: Estamos aqui para 
    apresentar o conhecimento inicial necessário para que você entenda as 
    alternativas e escolha a sua.
    Nesta disciplina, como exemplo, utilizaremos um framework específico 
    para os nossos exemplos. Mas encorajaremos você a experimentar em outros e 
    ter a sua própria avaliação.
    Para concluir, antes de apresentar alguns dos frameworks mais 
    conceituados, quero apresentar um último ponto de diferenciação relevante entre 
    eles: Trata-se de um conjunto de ferramentas que são adicionadas à biblioteca 
    principal e que recebe o nome muito criativo de ecossistema e que apresento
    brevemente a seguir

2.4.ECOSSISTEMAS DE FRAMEWORKS

    Trata-se de um conjunto de ferramentas, como dito acima, que tem por 
    objetivo adicionar funcionalidades bem específicas a um framework, automatizar 
    processos ou mesmo impor uma forma própria de construir e organizar um 
    sistema WEB.
    Este termo só é relevante neste momento para que, ao apresentarmos as 
    diferenças entre os principais frameworks do mercado atual, você não se sinta 
    perdido com o termo.
    Para citar alguns exemplos de ações oferecidas pelos frameworks em 
    seus ecossistemas, posso citar:
    • Plugins de navegadores para facilitar a depuração de código
    • Os chamados CLIs, plataformas de linha de comando para iniciar 
    um projeto, automatizando os vários passos e criando a árvore de 
    diretórios padronizados
    • Os gerenciadores de estado e os gerenciadores de rotas, citados 
    acima, também são aplicativos que fazem parte de um ecossistema
    em um framework

3. PRINCIPAIS FRAMEWORKS

    Este talvez seja um tópico controverso e que pode mudar rapidamente. 
    Portanto deve ser encarado com uma leitura inicial e não definitiva.
    Preciso alertar que as opiniões aqui são as minhas e não 
    necessariamente a de todos. E espero que você reflita e então chegue às suas 
    próprias num futuro próximo.
    Para eleger, dentre uma gama enorme de frameworks existentes 
    atualmente (estamos falando de milhares!), levei em consideração (não só eu –
    é um senso comum) a quantidade de usuários e projetos.
    Vamos a eles:

3.1.ANGULAR-JS

    • Página do projeto: https://Angular.io
    • Data de criação: 2016
    • Mantenedor: Google
    • Pontos positivos:
    o Robusto
    o Pioneiro
    o Mantido pelo Google   
    o Documentação Detalhada
    o Usa TypeScript nativo
    • Pontos negativos:
    o Sintaxe mais complexa
    o Dificuldade de migração entre versões
    Quase qualquer material que você lerá sobre o Angular inicia por: Angular
    não é Angular-JS. Isto porque o Angular-JS é uma reescrita do Angular. Quando 
    falamos reescrita é do zero mesmo. Porém, o Angular-JS passou a ser chamado 
    de Angular, o nome do seu ancestral. Hoje quase nem se fala mais nele e, 
    quando o fazem, geralmente citam como “Angular 1”. Fica a dica.
    Atualmente (repito, estamos falando aqui do ano de 2021), o Angular está 
    na sua versão 10 (24 de junho de 2020)
    Sobre as vantagens e desvantagens, posso resumir dizendo que ele é 
    bem viável para grandes projetos por ser mais “testado”. Porém, se for iniciar o 
    aprendizado, com ele você terá um pouco mais de trabalho.
    Outro aspecto importante sobre o Angular (que pode ser uma vantagem
    ou desvantagem, dependendo do ponto-de-vista), é que a forma de programar 
    com ele é pouco flexível, ou seja, você geralmente terá de fazer a coisa como 
    ele quer que seja feita.
    Por último, você me viu citando o TypeScript e vale então aqui uma 
    definição sobre ele: O TypeScript é uma linguagem, a partir do JavaScript, que 
    transforma o código em JS puro. Tem duas características marcantes: O código 
    escrito nele é altamente compatível com a maior variedade de versões de 
    navegadores. 
    Em uma nota de rodapé de uma das obras da nossa bibliografia temos 
    uma curta e eficiente explicação sobre o TypeScript:
    O TypeScript é uma versão a objetos de JavaScript que pode 
    implementar tipificação explícita das variáveis. (ZABOT, 2020, p. 240)
    Também as regras de criação de variáveis são mais rígidas, diminuindo 
    alguns problemas na lógica de programação (a estes recursos das linguagens é 
    dado o nome de tipagem forte: ao criar uma variável você deve especificar o seu 
    tipo como texto, inteiro), entre outros)

3.2.REACT

    • Página do projeto: https://reactjs.org/
    • Data de criação: 2013
    • Mantenedor: Facebook/Instagram
    • Pontos positivos:
    o Bastante flexível na forma de usar e na escolha de recursos
    o Mantido pelo Facebook
    o Fácil de migrar entre versões
    o Muito popular
    • Pontos negativos:
    o Documentação poderia ser mais completa
    o Por não exigir um padrão, pode gerar projetos sem um 
    padrão de construção, o que pode ser uma dor de cabeça 
    sobretudo em trabalho de equipe.
    O React é bem popular. Tem um conceito mais aberto, livre, sem muitas 
    regras. Você tem bastante liberdade para usá-lo, mais do que os outros 
    frameworks dentre os três exemplos que serão citados.
    O que é uma vantagem pode, porém, ser uma desvantagem: por isso esta 
    característica está presente tanto nas vantagens quanto nas desvantagens: A 
    falta de padrão é um sinal de liberdade, mas cobra uma maior disciplina e 
    organização. Então tome cuidado.
    Outro ponto controverso (mais ou menos pelo mesmo motivo - ambíguo)
    é um recurso do React chamado JSX: é uma extensão (opcional) de uso com o 
    React a fim de escrever JavaScript, CSS e HTML, tudo ao mesmo tempo. 
    Novamente poder ser uma boa, mas requer uma disciplina maior por parte dos 
    programadores.

3.3.VUE.JS

    • Página do projeto: https://vuejs.org/
    • Data de criação: 2014
    • Mantenedor: Evan You
    • Pontos positivos:
    o Progressivo, ou seja, pode ser implementado aos poucos 
    em projetos já existentes
    o Ótima documentação
    o Fácil aprendizagem
    • Pontos negativos:
    o Menos recursos prontos ou funcionalidades já implantadas 
    para usar (se comparado ao React, por exemplo)
    o O conceito de diretivas, igual ao Angular, pode causar um 
    pouco de confusão inicialmente.
    O VUE vem ganhando espaço rapidamente. Tem muitas das boas 
    características do Angular e do React. Conta com uma boa quantidade de 
    recursos no seu ecossistema e com uma curva de aprendizagem bem favorável 
    (talvez entre o React e o Angular – sendo o Angular o mais difícil)
    O VUE será a nossa escolha para as próximas unidades desta disciplina, 
    para os exemplos de código. Isto não quer dizer que você não possa pesquisar 
    na documentação dos outros dois os comandos relacionados. Em termos de 
    conceito, abrangeremos todo conteúdo o necessário a respeito dos conceitos de
    construção de um SPA para que você possa aplicar em uma delas.
    Para escolher o VueJs eu me baseei no crescimento da comunidade, no 
    fato de que uma nova versão (a 3.0) acabou de sair (final de 2020) além do fato 
    de que seu ecossistema ser bem vasto, sua documentação abundante e pelas 
    outras vantagens já citadas.

UNIDADE 02 – FUNDAMENTOS DO VUE.JS

1. INTRODUÇÃO: INICIANDO NA VERSÃO 3 PELO MODO CDN

    No momento do lançamento deste material, uma grande mudança no VUE
    está acontecendo (se você estiver no futuro, certamente está me dando razão e 
    concordando que eu sou, realmente, um visionário!)
    Estamos na transição entre o VUE 2 e o VUE 3.0.
    Sendo assim, já colocarei os exemplos aqui todos baseados no VUE 3.0.
    Agora que ele foi lançado (estamos falando de setembro de 2020), 
    começar a aprender VUE 3 vai dar a você uma vantagem sobre os outros 
    desenvolvedores, lá na frente. O único problema que você pode encontrar é que 
    as bibliotecas de suporte e a maioria da documentação ainda está sendo
    atualizada. Mas o Google está aí, eu estou aqui e o futuro resolverá outras 
    diferenças.
    Aproveitando o assunto, para que você possa acessar a documentação 
    oficial “provisória”, ao invés de você acessar a página principal de documentação 
    do projeto (https://br.vuejs.org/v2/guide/index.html)
    você o fará pelo endereço:https://v3.vuejs.org/guide
    Assim, a base do material, de agora em diante, será através da tradução 
    deste conteúdo, acrescido, claro, da explicação necessária para que a sua 
    experiência seja a melhor possível.
    Como o passar do tempo a documentação oficial será traduzida e 
    complementada. Então fique sempre atento a ela para que tudo aquilo que você 
    está aprendendo aqui possa ser enriquecido

1.1.O MODO CDN

    Logo no início da  página de documentação, você poderá ler o que, em 
    português, seria:
    A página de instalação oferece mais opções de instalação do VUE. 
    Observação: não recomendamos que iniciantes comecem VUE-CLI, 
    especialmente se você ainda não estiver familiarizado com as 
    ferramentas de compilação baseadas em Node.JS. (EVAN YOU, 2020)
    Na unidade 4 instalaremos o VUE desta forma, utilizando o Node,js e todo 
    o poder do CLI (command line interface - interface de linha de comando). 
    O CLI, presente em vários frameworks JS, constitui num sistema de linha 
    de comando onde se pode instalar e configurar uma série de recursos da  
    linguagem. É, basicamente, uma ferramenta de apoio ao programador. E muito 
    útil. Porém, como o site mesmo alerta, iniciar neste modo vai mais atrapalhar 
    que ajudar.
    Sendo assim, utilizaremos a forma mais simples de implementar o VUE
    num projeto. Trata-se do uso através se um link, inserido no HTML, de forma 
    semelhante ao uso de bibliotecas. Esta forma é conhecida como CDN (Content 
    Delivery Network - Rede de Distribuição de Conteúdo). Você pode entender o 
    CDN como um cache ou um repositório de código. É desta forma que é 
    distribuído, por exemplo, outras tantas bibliotecas do nosso querido mundo do 
    desenvolvimento WEB – como o Bootstrap, por exemplo.
    Vindo de uma programação HTML/CSS/JS/PHP, por exemplo, no 
    paradigma estudado anteriormente no seu curso, esta forma mais simples de 
    uso do VUE será uma ótima ponte entre os dois mundos

1.2.ESTRUTURA DO VUE.JS

    para iniciar um aplicativo VUE, você poderá criar tudo num arquivo só. 
    Mas vamos já iniciar de uma forma onde a organização dos diferentes conteúdos 
    do seu projeto vai fazer enorme diferença quando ele for grande e complexo. 
    Assim, crie 2 arquivos: um para o código HTML e outro para o JavaScript (no     
    caso de uso de estilos CSS, um terceiro arquivo seria criado)
    Vou criar uma pasta onde armazenarei todos os projetos do VUE. No meu 
    caso, criei a pasta c:\vues. Dentro dela, outra pasta com o nome de CDN.
    Claro que os nomes podem ser a seu gosto.
    Dentro da referida pasta, CDN, criarei dois arquivos. O conteúdo deles 
    vou publicar aqui e você pode fazer o mesmo aí no seu ambiente. Abaixo, 
    explicarei cada parte:

• index.html
<script src="http://unpkg.com/vue@next"></script>
<DIV id="divPrincipal">
 <h1>{{ mensagemInicial }}</h1>
</DIV>
<script src="./meuScript.JS"></script

1. **Importação do Vue.js:**
   - `<script src="http://unpkg.com/vue@next"></script>`: Esta linha importa a biblioteca Vue.js de uma CDN (Content Delivery Network), especificamente a versão mais recente (next). Ela permite que você utilize o Vue.js em seu projeto.

2. **Elemento HTML Principal:**
   - `<DIV id="divPrincipal">...</DIV>`: Este bloco de código define um elemento `div` com o atributo `id` definido como "divPrincipal". Este elemento serve como o ponto de montagem principal para o aplicativo Vue.js. Todo o conteúdo Vue será montado dentro deste elemento.

3. **Interpolação de Dados Vue:**
   - `<h1>{{ mensagemInicial }}</h1>`: Dentro do elemento `div`, há um cabeçalho `<h1>` que contém uma expressão de interpolação de dados Vue. Esta expressão exibe o valor da variável `mensagemInicial`. Isso significa que qualquer alteração feita na variável será refletida dinamicamente no conteúdo deste cabeçalho.

4. **Importação do Script do Aplicativo:**
   - `<script src="./meuScript.JS"></script>`: Esta linha importa um script chamado `meuScript.js`. Presumivelmente, este arquivo contém a lógica do aplicativo Vue.js, como a definição dos dados e métodos, a criação do aplicativo Vue e a montagem do aplicativo no elemento com o id `divPrincipal`.

• meuScript.js
const meuPrimeiroApp = Vue.createApp({
 data() {
 return {
 mensagemInicial: 'Bem-vindo ao VUE.JS',
 }
 }
})
const mountedApp = meuPrimeiroApp.mount('#divPrincipal')

1. **Criação do Aplicativo Vue:**
   - `const meuPrimeiroApp = Vue.createApp({})`: Aqui, é criado um novo aplicativo Vue utilizando o método `Vue.createApp()`. Dentro dele, passamos um objeto de configuração com as opções do aplicativo. Neste caso, temos um único método `data()`, que retorna um objeto com os dados do aplicativo.

2. **Definição dos Dados do Aplicativo:**
   - `data() { return { mensagemInicial: 'Bem-vindo ao VUE.JS' } }`: Dentro do objeto de configuração, definimos um método `data()` que retorna um objeto. Esse objeto contém os dados do aplicativo Vue. No caso, temos apenas uma propriedade chamada `mensagemInicial`, cujo valor é 'Bem-vindo ao VUE.JS'.

3. **Montagem do Aplicativo:**
   - `const mountedApp = meuPrimeiroApp.mount('#divPrincipal')`: Aqui, o aplicativo Vue é montado no elemento com o id `divPrincipal`. O método `mount()` associa o aplicativo Vue ao elemento HTML especificado, permitindo que o Vue.js controle esse elemento e atualize seu conteúdo conforme necessário com base nos dados definidos.

1.3.FLUXO E DIVISÃO DE RESPONSABILIDADES

    A divisão de responsabilidades é um termo utilizado para representar o 
    conteúdo de um site separado nas 3 partes (HTML/JS/CSS)
    Neste caso, poderíamos adicionar o conteúdo de meuScript.js
    diretamente no HTML. Não o fizemos para salientar desde já a importância de 
    se fazer um sistema com as partes divididas. Quanto maior for o projeto, maior 
    esta verdade será visível.
    Sendo assim, foi feita uma referência do arquivo de script no arquivo 
    HTML. Essa é a moda.

1.3.1. O FLUXO DE ACONTECIMENTOS

    Primeiro o navegador lê os scripts do próprio VUE. Depois, o conteúdo de 
    meuScript.
    Neste arquivo temos a criação de uma constante que retorna um objeto
    resultante de uma variável com um texto
    Por fim, outra constante que faz a ponte entre este objeto anterior e o 
    HTML. Note que aqui é informada a id da DIV onde esse objeto e esses dados 
    estarão disponíveis.
    Você vai notar a mesma variável presente entre “duplos bigodes” numa 
    DIV do HTML. A insto se dá o nome de interpolação de texto, matéria do próximo 
    tópico
    Esta é a estrutura do VUE.
    Vamos a uma citação da nossa bibliografia:
    No núcleo do Vue.JS está um sistema que nos permite 
    declarativamente renderizar dados no DOM (Document Object Model) 
    usando uma sintaxe de template simples (EVAN YOU, 2020b)
    No decorrer deste material, os conceitos iniciais serão bastante repetidos 
    enquanto novos recursos serão adicionados. Então, relaxa, jovem!

A INTERPOLAÇÃO E AS DIRETIVAS DO VUE

    Podemos ver “diretivas” como funções do VUE que proporcionam 
    comportamentos ou, mais precisamente, a implementação de algum 
    comportamento no seu código VUE.
    Lembrando que o VUE é reativo: sempre que algo muda, as diretivas são 
    “avisadas” e refletem essas mudanças.

2.1.INTERPOLAÇÃO DE TEXTO

    Comecemos pelos “duplos bigodes”: também conhecidos como Mustache
    ou Chaves Duplas. Estes caracteres circundam uma variável a ser procurada 
    nos scripts do seu código.
    Foi assim no exemplo dado mais acima: a variável mensagemInicial foi 
    criada no arquivo de script e utilizada no HTML. É simples (como tem de ser) 
    mas pode ser utilizado de forma mais complexa, em meio a uma instrução 
    JavaScript, por exempl

2.2.O FRAMEWORK (CONTINUA SENDO) JAVASCRIPT

    Adoro frases de duplo sentido. O título aqui é para te lembrar de uma coisa 
    que é óbvia se lermos, mas que é fácil de ser desconsiderada. Um framework
    JavaScript contém rotinas prontas. mas essas rotinas foram escritas em 
    JavaScript. Nada mais natural que você continuar podendo misturar o JavaScript
    com o VUE.
    Temos um exemplo, Produção? Sim!
    Vamos partir do exemplo que temos comentado. Porém, vamos adicionar 
    uma variável em scripts e fazer uma manipulação mais direta. Você vai entender 
    com o exemplo abaixo, que é uma alteração do anterior

• index.html

<script src="http://unpkg.com/Vue@next"></script>
<DIV id="divPrincipal">
 <h1>{{ verMsg ? msgInicial : 'Sem mensagens!' }}</h1>
</DIV>
<script src="./meuScript.JS"></script>

• meuScript.js

const meuPrimeiroApp = Vue.createApp({
 data() {
 return {
 msgInicial: 'Bem-vindo ao VUE.JS',
 verMsg: false 
 }
 }
})
const mountedApp = meuPrimeiroApp.mount('#divPrincipal')

Note o trecho

<h1>{{ verMsg ? msgInicial : 'Sem mensagens!' }}</h1>

    Aqui temos parte JavaScript e parte VUE:
    Temos um if ternário do JavaScript que analisa a variável verMsg que, se 
    for true vai apresentar o conteúdo de msgInicial. Caso contrário, apresenta a 
    frase entre as aspas simples.
    Temos, na bibliografia deste material, um guia específico do JavaScript. 
    Lá você poderá tirar suas dúvidas a respeito das funções da linguagem. Por 
    exemplo, para este assunto aqui abordado, segue um trecho explicativo:
    O operador condicional é o único operador ternário (três operandos) de 
    JavaScript e às vezes é chamado de operador ternário. Esse operador 
    às vezes é escrito como ?:, embora não apareça dessa maneira em 
    código. Como esse operador tem três operandos, o primeiro fica antes 
    de ?, o segundo fica entre ? e : e o terceiro fica depois de :.
    (FLANAGAN, 2013, p. 181)
    Top, né?
    Se você modificar o conteúdo da variável verMsg vai ver que o código 
    funciona perfeitament

2.3.V-BIND V-MODEL

    Analisando o mesmo exemplo de código visto acima, podemos criar uma 
    forma de interação do usuário no código, com o objetivo de alterar o valor da 
    variável verMsg em tempo de execução.
    Para isso vamos adicionar um objeto do navegador: uma caixa de 
    combinação.
    Veja como vai ficar o HTML:

<script src="http://unpkg.com/vue@next"></script>
<DIV id="divPrincipal">
 <input type="checkbox"> Mostrar </input>
 <h1>{{ verMsg ? msgInicial : 'Sem mensagens!' }}</h1>
</DIV>
<script src="./meuScript.JS"></script>

    Ao renderizar, veremos um checkbox. Mas, para ser útil, devemos 
    interligar o valor do checkbox à variável verMsg: assim, como o VUE é reativo, a 
    mensagem vai ser gerida pelo valor o checkbox diretamente.
    Para tanto, utilizaremos uma diretiva: a v-mode

2.3.1. APLICANDO A DIRETIVA V-MODEL

Olha que simples a alteração que fizemos:

<script src="http://unpkg.com/vue@next"></script>
<DIV id="divPrincipal">
 <input type="checkbox" v-model="verMsg"> Mostrar </input>
 <h1>{{ verMsg ? msgInicial : 'Sem mensagens!' }}</h1>
</DIV>
<script src="./meuScript.JS"></script>

A diretiva v-model atribui uma variável ao valor do checkbox. Como o resto 
já é reativo e já está implementado, tudo funcionará corretamente!

2.3.1. APLICANDO A DIRETIVA V-BIND

    Vamos a mais uma alteração. Vamos supor um outro checkbox que 
    mudasse a cor da frase.
    Até agora temos em mente que podemos adicionar uma variável que irá 
    receber o valor de um componente HTML, como o checkbox. Certo. mas, como 
    o valor de retorno não é algo que podemos colocar dentro de bigodes duplos, já 
    que a cor seria uma característica de uma DIV, temos de usar a diretiva v-bind
    Um trecho de obra da nossa bibliografia poderá esclarecer:
    Chaves duplas não podem ser usadas em atributos HTML. Para isso, 
    utilize a diretiva v-bind: (EVAN YOU, 2020b)
    Bem simples também. Vamos ao exemplo:

    • index.html

<script src="http://unpkg.com/vue@next"></script>
<DIV id="divPrincipal">
 <input v-model="corMsg"> Cor do texto </input>
 <input type="checkbox" v-model="verMsg"> Ver Msg </input>
 <h1 v-bind:style=" { color: corMsg } ">
 {{ verMsg ? msgInicial : 'Sem mensagens!' }} </h1>
</DIV>
<script src="./meuScript.JS"></script>

• meuScript.js

const meuPrimeiroApp = Vue.createApp({
 data() {
 return {
 msgInicial: 'Bem-vindo ao VUE.JS',
 verMsg: false, 
 corMsg: false
 }
 }
})
const mountedApp = meuPrimeiroApp.mount('#divPrincipal')

    Observe que a alteração no script foi apenas a criação de mais uma 
    variável.
    Já no arquivo HTML, a alteração foi na criação da TAG H1 ao 
    acrescentarmos 
    v-bind:style=" { color: corMsg } antes do fechamento da TAG de criação.
    O v-bind e sucedido por um sinal de dois-pontos e então a propriedade da 
    TAG a qual se deseja alterar (no nosso caso a propriedade style). Após isso, o 
    sinal de chaves é necessário aqui por termos uma propriedade dentro da própria 
    propriedade style que é a propriedade color). então, após o nome da 
    propriedade, o nome da variável que contêm o valor a ser utilizado.
    Então você verá que, ao escrever “red” na caixa de texto, a TAG H1 ficará, 
    como se deve esperar, vermelha

2.4.LAÇOS E CONDICIONAIS

    Muito bem (estou orgulhoso de ver você bem até aqui...)
    Até agora vimos diretivas que sempre fazem as coisas da mesma forma. 
    Você pode discordar por causa dos if ternários, mas isso não é do VUE e, 
    portanto, não uma diretiva ou a capacidade de uma: aquilo é JavaScript, bebê.
    Nos casos em que o JavaScript por der mais complexo, temos o uso de 
    um if específico para o VUE, assim como um equivalente a um else. São as 
    diretivas v-if e v-else. Vai, de carona neste tópico, a diretiva v-show que se 
    assemelha muito ao v-if.
    Após vamos ver o equivalente ao for (v-for) e uma diretiva que intercepta 
    eventos de componentes HTML (a diretiva v-on). Todas com explicações e um 
    exemplo simples.

2.4.1. V-IF / V-ELSE-IF / V-ELSE

Vamos começar por este trio. Faremos, com estas diretivas, sempre o 
esquema “exemplo-explicação”.
Então observe as alterações apenas no HTML:

<script src="http://unpkg.com/vue@next"></script>
<DIV id="divPrincipal">
 <input v-model="corMsg"> digite uma cor para o texto 
</input>
 <h3 v-if="corMsg === 'red'"> Já sei! : VERMELHO</h3>
 <h3 v-else-if="corMsg === 'green'"> Já sei! : VERDE </h3>
 <h3 v-else-if="corMsg === 'blue'"> Já sei! : AZUL </h3>
 <h3 v-else> Esta cor eu não conheço</h3>
 <input type="checkbox" v-model="verMsg"> Ver </input>
 <h1 v-bind:style=" { color: corMsg } ">{{ verMsg ? 
msgInicial : 'Sem mensagens!' }}</h1>
</DIV>
<script src="./meuScript.JS"></script>

    Veja a sequência. É autoexplicativa, não é?
    Note que as tags H3 em questão só irão aparecer caso a condição 
    vinculada à diretiva retornar true.
    E, finalmente, note que v-else sempre irá considerar o v-if anterior mais 
    próximo.

2.4.2. V-SHOW

    Utilizar v-if e v-show não mudará nada visualmente. Apenas no código. 
    Enquanto v-if adiciona o conteúdo com a condição, v-show sempre o fará e 
    exibirá apenas com a condição verdadeira.
    E o que muda? Para pequenas coisas, nada. Para grandes blocos, 
    significa que, no caso do v-show, tudo será carregado na tela e então, após 
    carregado, ficará mais rápido exibir na tela. Também garante que, no caso do v-
    if, as coisas serão criadas e destruídas sempre que houver a alternância da 
    variável vinculada.
    Observe este (não muito curto) trecho de uma das nossas referências 
    bibliográficas que descreve a diferença entre v-show e v-if:
    v-if é a renderização condicional “real”, pois garante que eventos e 
    componentes filhos dentro do bloco condicional sejam devidamente 
    destruídos e recriados durante a alternância.
    v-if também é preguiçoso: se a condição for false na renderização 
    inicial, nada será feito - o bloco condicional não será processado até 
    que a condição se torne true pela primeira vez.
    Em comparação, v-show é mais simples - o elemento sempre será   
    renderizado independentemente da condição inicial, com alternância 
    baseada em CSS.
    De modo geral, v-if tem custo maior durante alternâncias de 
    visibilidade, enquanto v-show tem custo maior na renderização inicial. 
    Então prefira v-show se precisar alternar a visibilidade de algo com 
    muita frequência; e prefira v-if se a condição não tem tanta 
    probabilidade de se modificar durante a execução. (EVAN YOU, 2020c)

2.4.3. V-FOR

    Vamos ao exemplo, iniciando pela criação de um array no arquivo de 

scripts:
const meuPrimeiroApp = Vue.createApp({
 data() {
 return {
 msgInicial: 'Bem-vindo ao VUE.JS',
 verMsg: false, 
 corMsg: false,
 cores: [ 
 { ptbr: 'AZUL' },
 { ptbr: 'VERDE' },
 { ptbr: 'VERMELHO' }
 ]
 }
 }
})
const mountedApp = meuPrimeiroApp.mount('#divPrincipal')

Isto segue os princípios do JavaScript, e não deve parecer uma coisa 
estranha a você

Vamos agora ao arquivo HTML

<script src="http://unpkg.com/vue@next"></script>
<DIV id="divPrincipal">
 <input v-model="corMsg"> digite uma cor para o texto </input>
 <h3 v-if="corMsg === 'red'"> Já sei! : VERMELHO</h3>
 <h3 v-else-if="corMsg === 'green'"> Já sei! : VERDE </h3>
 <h3 v-else-if="corMsg === 'blue'"> Já sei! : AZUL </h3>
 <h3 v-else> Esta cor eu não conheço</h3>
 <input type="checkbox" v-model="verMsg"> Ver </input>
 <h1 v-bind:style=" { color: corMsg } ">{{ verMsg ? msgInicial 
: 'Sem mensagens!' }}</h1>
 <ul >
 <li v-for="cor in cores" :key="cor.ptbr">
 {{ cor.ptbr }}
 </li>
 </ul>
</DIV>
<script src="./meuScript.JS"></script> 

Perceba uma TAG de lista ordenada que receberá o v-for. É criada uma 
variável cor dinâmica e temporariamente para este for. Finalmente são exibidos 
os valores obtidos lá na variável.