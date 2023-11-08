import axios from 'axios';
const endpointUsers = 'http://localhost:3001/usuarios';

export const FindUserByEmail = async (email) => {
    try {
        const response = await axios.get(endpointUsers+'/?correo='+email);
        if(response.status !== 200){
            throw new Error('Error en la respuesta HTTP: ' + response.status);
        }else{
            return response.data;
        }
    } catch(e) {
        console.error(e);
    }
}