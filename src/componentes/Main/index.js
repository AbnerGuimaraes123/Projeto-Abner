import  estilos  from "./Main.module.css"
function Main(props) {
    return (
      <main className={estilos.corpo}>
        {props.children}
      </main>
    );
  }
  export default Main;