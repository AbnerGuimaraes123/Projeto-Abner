//import { Link } from "react-router-dom";
import estilos from "./Header.module.css"
import MenuNav from "../MenuNav";
function Header() {
  return (
    <header>
      <div className={estilos["logo"]}>
        <img src="https://images.vexels.com/media/users/3/235850/isolated/lists/c42a0f05d1c667d79c37432f680af08a-ilustracao-de-chapeu-de-cozinha-de-chef.png" alt="Logo" />
      </div>
      <MenuNav></MenuNav>
    </header>
  );
}
export default Header;