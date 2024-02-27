import BoasVindas from "./components/BoasVindas"
import Navbar from "./components/Navbar"
import CardProduto from "./components/CardProduto"
import styles from "./App.module.css"
function App() {

  const name = "Luis"
  const sobrenome = "Claudio"

  const nomeCompleto = (name, sobrenome) => {
    return `${name} ${sobrenome}`
  }

  const lisProduto = [
    {
      titulo: "",
      describe: "",
      preco: "",
    },
    {
      titulo: "",
      describe: "",
      preco: "",
    },
    {
      titulo: "",
      describe: "",
      preco: "",
    }
  ]


  return (
    <div>
      <Navbar />
      <div className={styles.centro}>
        <BoasVindas nome={nomeCompleto(name, sobrenome)} idade={26} />
        <CardProduto />
        <CardProduto titulo="Livro 1" describe="Descrição Livro 1" preco="3,50"/>
      </div>
    </div>
  );
}



export default App;
