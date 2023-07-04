import { Link } from "react-router-dom";
import estilos from "./Erro.module.css"
function Erro() {

    return (
<div className={estilos.erro}>
  <div className={estilos.mensagemErro}>
    <h2>Erro!</h2>
    <p>Ocorreu um erro ao carregar a página.</p>
    <p><Link to="/">Pagina Inicial</Link></p>
    
  </div>
</div>
    );
  }
  export default Erro;