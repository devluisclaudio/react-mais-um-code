import styles from "../styles/BoasVindas.module.css"

function BoasVindas({ nome, idade}) {

    return (
        <div>
            <h1 className={styles.titulo}>Ola, {nome}!</h1>
            <h3>Idade: {idade}</h3>
        </div>
    )

}

export default BoasVindas