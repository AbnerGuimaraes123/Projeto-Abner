//import { Link, useLocation } from "react-router-dom";
import estilos from "./MenuNav.module.css"
import MenuLink from "../MenuLink";
function MenuNav() {

  //const localizacao = useLocation();
  return (
    

      <nav className={estilos.nave}>
        <MenuLink to="/">Inicial</MenuLink>
        <MenuLink to="/Melhores">Melhores</MenuLink>

      </nav>
    
  );
}
export default MenuNav;