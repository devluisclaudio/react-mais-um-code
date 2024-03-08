
const usuarios = {

    getAllUsuarios: () => {
        return [
            {
                name: 'Luis Claudio',
                email: 'luis@email.com',
                status: true,
            },
            {
                name: 'Luis Felipe',
                email: 'felipe@email.com',
                status: true,
            },
            {
                name: 'Felipe Claudio',
                email: 'caludio@email.com',
                status: false,
            }
        ]
    },


    getUsuariosId: (id) => {
        return {
            name: 'Luis Claudio',
            email: 'luis@email.com',
            status: true,
        }
    }

}


export default usuarios