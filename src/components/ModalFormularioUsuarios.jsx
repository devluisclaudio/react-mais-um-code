import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import styles from "../styles/ModalFormularioUsuarios.module.css"
import { FormGroup, FormControl, TextField, Card, CardContent, CardActionArea } from '@mui/material';
import { useState } from 'react';


function ModalFormularioUsuarios({ open, handleClose }) {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [status, setStatus] = useState(false)

    const enviarDados = () => {
        if( nome === "" || email === "" || senha === ""){
            
            console.log("Preencha todos os dados")
            return false
        }

        console.log("Dados enviados!")
        return true
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={styles.container}>
                <Card className={styles.card}>
                    <label className={styles.titulo}>Inserir Novo Usuário</label>
                    <CardContent>
                        <FormGroup className={styles.container} >
                            <FormControl className={styles.inputs} >
                                <TextField id="outlined-basic" label="Email" variant="outlined"
                                    value={email}
                                    onChange={(event) => {
                                        setEmail(event.target.value);
                                    }} />
                            </FormControl>
                            <FormControl className={styles.inputs}>
                                <TextField id="outlined-basic" label="Nome" variant="outlined"
                                    value={nome}
                                    onChange={(event) => {
                                        setNome(event.target.value);
                                    }} />
                            </FormControl>
                            <FormControl className={styles.inputs}>
                                <TextField id="outlined-basic" label="Senha" variant="outlined"
                                    value={senha}
                                    onChange={(event) => {
                                        setSenha(event.target.value);
                                    }} />
                            </FormControl>
                            <FormControl className={styles.inputs}>
                                <TextField id="outlined-basic" label="Status" variant="outlined"
                                    value={status}
                                    onChange={(event) => {
                                        setStatus(event.target.value);
                                    }} />
                            </FormControl>
                        </FormGroup>

                    </CardContent>
                    <CardActionArea>
                        <button onClick={enviarDados}>Salvar</button>
                    </CardActionArea>
                </Card>
            </Box>
        </Modal>

    )

}



export default ModalFormularioUsuarios