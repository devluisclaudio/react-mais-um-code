import Navbar from "../components/Navbar"
import ListagemUsuarios from "../components/ListagemUsuarios"
import BotaoFlutuante from "../components/BotaoFlutuante"
import ModalFormularioUsuarios from "../components/ModalFormularioUsuarios"
import { useState } from "react"


function Usuarios() {
    const [abreModal, setAbreModal] = useState(false)

    const abrirModal = () => {
        setAbreModal(true)
    }

    return (<>
        <Navbar />
        <ListagemUsuarios />
        <BotaoFlutuante aoClicar={abrirModal} />
        <ModalFormularioUsuarios open={abreModal}  handleClose ={ () => setAbreModal(false)}/>
    </>
    )
}


export default Usuarios