const api = {

    async recebeDoBack() {
        try {
          const resposta = await fetch('http://localhost:3000/pensamentos');
          return await resposta.json();
        } catch (error) {
          alert("Falha ao pegar dados do servidor");
          throw error;
        }
   }
};

export default api;