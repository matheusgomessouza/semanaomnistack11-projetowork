//Cliente HTTP, responsável por fazer as 'chamadas' da API do back-end e obter as repostas
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333', //Definindo a base da URL em todas as chamadas
})

export default api; //exportando a variável