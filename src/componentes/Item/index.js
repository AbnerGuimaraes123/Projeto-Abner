
import { Link } from "react-router-dom";
import  estilos  from "./Item.module.css"
function Item(props) {
  return (
    <Link to={`/ItemPage/${props.dado.id}`} className={estilos.semEstilo}>
      <div className={estilos.card}>
        <img src={props.dado.linkImg} alt="Imagem 1" />
        <div>
          <h1>{props.dado.nome}</h1>
          <p><strong>{props.dado.tempoPreparo}</strong> de preparo e serve ate <strong>{props.dado.rendimento}</strong></p>
          <h1 className={estilos.destaque}>{props.dado.qtdEstrela} Estrelas</h1>
        </div>
      </div>
      </Link>

  );
}
export default Item;