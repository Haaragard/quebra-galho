import axios from 'axios';

//Klaiton on my NTBK as ROUTER
// const endereco = 'https://192.168.137.185:3001/api';

//Home
// const endereco = 'https://zzz/api';

//MY NTBK
// const endereco = 'https://zzz/api';


const api = axios.create({
    baseURL: 'http://192.168.137.185:3001/api',
});

export default api;