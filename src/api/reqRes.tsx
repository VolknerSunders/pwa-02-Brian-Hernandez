import axios from "axios";
export const reqRespApi = axios.create({
    baseURL: 'https://reqres.in/api'
})
export interface ReqRespUsuarioListado {
    page:        number;
    per_page:    number;
    total:      number;
    total_pages: number;
    data:        Usuario[];
    support:    Support;
}

export interface Usuario {
    id:        number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:    string;
}

export interface Support {
    url:  string;
    text: string;
}