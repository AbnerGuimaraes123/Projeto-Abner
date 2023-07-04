import { Link, useLocation } from "react-router-dom";
import estilos from "../MenuNav/MenuNav.module.css"

function MenuLink(props) {
  const localizacao = useLocation();
  return (
    

      
        <Link to={props.to} className={`${localizacao.pathname === props.to? estilos.destaque : ''}`}>{props.children}</Link>
        
    
  );
}
export default MenuLink;