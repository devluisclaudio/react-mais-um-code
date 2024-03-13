import styles from "../styles/ListagemUsuarios.module.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import ServiceUsuarios from "../services/usuarios"
import { useEffect, useState } from "react";


function ListagemUsuarios() {
    const [rows, setRows] = useState([])

    useEffect(()=> {
        ServiceUsuarios.getAllUsuarios().then((response) => {
            setRows(response.data)
        }).catch((erro) => {
            console.log(erro)
            setRows([])
        })
    }, [])

    return (<>
        <div className={styles.titulo}>
            <h1>
                Tabela de Usuários
            </h1>
        </div>
        <div className={styles.tabela}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.length > 0 ? rows.map((row) => (
                            <TableRow
                                key={row.login}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.login}
                                </TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.status ? 'Ativo': 'Inativo' }</TableCell>
                            </TableRow>
                        ))
                        : 
                        (<></>)
                    }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    </>)
}

export default ListagemUsuarios