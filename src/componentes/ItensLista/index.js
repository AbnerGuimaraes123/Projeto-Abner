import itens from "../../json/itens.json"
import Item from "../Item";

function ItensLista() {
  return (
    <>
      {
        itens.map((e) => <Item key={e.id} dado={e}></Item>)
      }
    </>
  );
}

export default ItensLista;