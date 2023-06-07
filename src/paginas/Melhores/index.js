import Item from "../../componentes/Item";
import itens from "../../json/itens.json"
function Melhores() {
  const filtrado = itens.filter((e)=>{
    return e.qtdEstrela === 5
  })
    return (
      <>
      {
        filtrado.map((e) => <Item key={e.id} dado={e}></Item>)
      }
    </>
    );
  }
  export default Melhores;