const meuPrimeiroApp = Vue.createApp({
    data() {
      return {
        corClara: "#fff",
        corEscura: "#000",
        mode: false,
        showImage: true,
        pessoas:[{nome:'',ra:'',nCurso:'',aCurso:'',img:''}]
      }
    },
    methods: {
      onFileChange(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
          this.pessoas[0].img = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }
  })
  const mountedApp = meuPrimeiroApp.mount('#divPrincipal')
  