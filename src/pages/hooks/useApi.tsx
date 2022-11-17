import axios from 'axios';

export const baseUrl = 'http://localhost:8080';

const api = axios.create({
  baseURL: `http://localhost:8080`,
});
export const setToken = (token :string) => {
    api.defaults.headers.common.Authorization = token;
}
type loginData = {
    nome:string,
    username:string,
    password:string
}
export const requestLogin = async (usename: string, password:string) => {
 const {data} = await api.post(usename, password);
 return data;
}