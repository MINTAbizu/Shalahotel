import axios from 'axios'

const API_URL='https://shalahotel-4.onrender.com/api';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authservices={
    register: async(userdata)=>{
        const response =api.post('/register',userdata)
         return (await response).data
    },
    login:async(Credential)=>{
        const response= api.post('/login',Credential)
        return (await response)
    }
}


export default api