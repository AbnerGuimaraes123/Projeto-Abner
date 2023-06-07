import itens from "../../json/itens.json"
import { useNavigate, useParams } from "react-router-dom";
import estilos from "./ItemPage.module.css"
function ItemPage() {

  const navegar = useNavigate();
  const parametro = useParams();
  const item = itens.find((e) => (e.id === Number(parametro.id)))
  return (
    
    <div className={estilos.card}>
      <img src={item.linkImg} alt="Imagem 1" />
      <h1 className={estilos.tamanho}>{item.nome}</h1>
      <div>
        
        <h2>Ingredientes:</h2>
        {item.ingredientes.map((elemento) => (
          <span>{elemento}<br/></span>
          
        ))}
        <h2>Modo de preparo</h2>
        <p>{item.instrucoes}</p>
        <div onClick={()=>navegar(-1)} className={estilos.btBonito}>Voltar</div>
      </div>
    </div>
  );
}
export default ItemPage;