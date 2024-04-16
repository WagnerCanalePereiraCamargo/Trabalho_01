PASSOS PARA TODA A CRIAÇÃO 

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




