import React from 'react';
import Header from './componentes/header';
import Footer from './componentes/footer';
import Main from "./componentes/main";
import Home from './paginas/home';
import Produtos from './paginas/produtos';
import Cadastro from './paginas/cadastro';
import FechaModal from './paginas/fechaModal';
import home from './paginas/home';




const App = () => {
  const [modal, setModal] = React.useState(false)
  const [info, setInfo] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);
  async function HandleClick(event) {
    setCarregando(true);
    const response = await fetch(`http://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    const json = await response.json();
    setInfo(json);
    setCarregando(false);
  }


  const { pathname } = window.location;
  let Paginas;

  if (pathname === "/produto.js") {
    Paginas = Produtos
  }
  else {
    Paginas = Home;
  };


  return (
    <>
 

      <h1>Este é o aplicatico</h1>

      <div className='hbtn'>
        <button onClick={HandleClick}>Notebook</button>
        <button onClick={HandleClick}>Smartphone</button>
        <button onClick={HandleClick}>Tablet</button>
      </div>
      {carregando && <div>carregando ...</div>}
      {!carregando && info && <Home info={info} />}


      <Footer />


    </>

  );
}

export default App;
