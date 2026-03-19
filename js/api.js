const api = {
  async recebeDoBack() {
    try {
      const resposta = await fetch("http://localhost:3000/pensamentos");
      return await resposta.json();
    } catch (error) {
      alert("Falha ao pegar dados do servidor");
      throw error;
    }
  },

  async enviaProBack(pensamento) {
    try {
      const resposta = await fetch("http://localhost:3000/pensamentos", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(pensamento),
      });
      return await resposta.json();
    } catch (error) {
      alert("Falha ao enviar dados pro servidor");
      throw error;
    }
  },
};

export default api;
