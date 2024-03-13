import Modal from '@mui/material/Modal';
import styles from "../styles/ModalFormularioUsuarios.module.css"
import { Box } from '@mui/material';


function ModalGenerico({ open, handleClose, children }) {


    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={styles.container}>
                {children}
            </Box>
        </Modal>

    )

}



export default ModalGenerico