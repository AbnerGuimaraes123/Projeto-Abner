
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
//import ItensLista from "./componentes/ItensLista";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./componentes/Main";
import Inicio from "./paginas/inicio";
import ItemPage from "./paginas/ItemPage";
import Melhores from "./paginas/Melhores";
import Erro from "./paginas/Erro";

function App() {





  return (
    <div >
     
      <BrowserRouter>
      <Header/>
      <Main>

      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/ItemPage/:id" element={<ItemPage/>} />
        <Route path="/Melhores" element={<Melhores/>} />
        <Route path="*" element={<Erro/>}/>
      </Routes>
      </Main>
      <Footer/>
      </BrowserRouter>


    </div>
  );
}
export default App;
