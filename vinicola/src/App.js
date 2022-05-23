import React from 'react';
import Header from './Header';
import Produtos from './Produtos';
import './index.css';
import Home from './Home';
import Carrinho from './Carrinho';
import Form from './Form/Form';

const App = () => {
  const {pathname} = window.location;

  let Component;
  if (pathname === '/') {
    Component = Produtos;
  } else if(pathname === "/carrinho") {
    Component = Carrinho;
  }else{
    Component = Form; 
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
