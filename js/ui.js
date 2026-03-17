import api from "./api.js" 

const listaDeElementos = document.querySelector('#');

const ui = {

    async renderizaDadosBack() {
        try {
            const pensamentos = await api.recebeDoBack();
            pensamentos.forEach(pensamento => {
                listaDeElementos.innerHTML = ``

                
            });
        } catch (error) {
            alert("Erro ao renderizar os dados do back");
            throw error;
        }
    }
}

export default ui;