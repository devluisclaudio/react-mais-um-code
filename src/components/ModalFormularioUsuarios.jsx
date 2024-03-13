import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import styles from "../styles/ModalFormularioUsuarios.module.css"
import { FormGroup, FormControl, TextField, Card, CardContent, CardActionArea, Button, FormControlLabel, Checkbox } from '@mui/material';
import { useState } from 'react';
import api from '../services/api';


function ModalFormularioUsuarios({ open, handleClose }) {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [status, setStatus] = useState(false)

    const enviarDados = () => {
        if (nome === "" || email === "" || senha === "") {

            console.log("Preencha todos os dados")
            return false
        }

        let form = {
            nome: nome,
            senha: senha,
            email: email,
            status: status
        }

        api.post('/usuarios', form).then((response) => {
            console.log(response)
        }).catch((erro) => console.log(erro))

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
                        <FormGroup className={styles.box} >
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
                                <FormControlLabel control={
                                    <Checkbox
                                        value={status}
                                        onChange={(event) => {
                                            setStatus(event.target.checked);
                                        }}
                                    />
                                }
                                    label="Status"
                                />
                            </FormControl>
                        </FormGroup>

                    </CardContent>
                    <CardActionArea className={styles.botao}>
                        <Button onClick={enviarDados} variant="contained">Salvar</Button>
                    </CardActionArea>
                </Card>
            </Box>
        </Modal>

    )

}



export default ModalFormularioUsuarios