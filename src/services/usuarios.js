import api from "./api";


const usuarios = {

    getAllUsuarios: async () => {

       return api.get('/usuarios')
    },


    getUsuariosId: (id) => {
        return {
            login: 'Luis Claudio',
            email: 'luis@email.com',
            status: true,
        }
    }

}


export default usuarios