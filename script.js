const meuPrimeiroApp = Vue.createApp({
    data() {
      return {
        msgInicial: 'Olá, mundo!', // Alteração do valor inicial
        verMsg: false 
      }
    }
  });

  const mountedApp = meuPrimeiroApp.mount('#divPrincipal'); 