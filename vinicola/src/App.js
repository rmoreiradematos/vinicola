import React from 'react';
import Produtos from './Produtos';
import './index.css';
import Carrinho from './Carrinho';

const App = () => {
  const {pathname} = window.location;
  
  let Component;
  if (pathname === '/') {
    Component = Produtos;
  } else if(pathname === "/carrinho") {
    Component = Carrinho;
  }
  return (
    <>
      <div>
        < Component />
      </div>
    </>
  )

}

export default App;
