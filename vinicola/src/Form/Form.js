import React from 'react'
import Header from '../Header'
import ButtonForm from './ButtonForm'
import Input from './Input'

const Form = () => {
  const [dataForm, setDataForm] = React.useState({
    nome: '',
    preco: '',
    fotoTitulo: '',
    fotoSrc: '',
  });
  
  const onChangeInput = e =>setDataForm({...dataForm, [e.target.name] : e.target.value})
  
  const handleSubmit = async e =>{
    try{
      await fetch('/api/produtos/novo',{
        method: "POST",
        body: JSON.stringify(dataForm),
        headers: {'Content-Type': 'application/json'}
      })
    } catch(error){
      console.log(error.message);
    }
  }
  console.log(dataForm);
  return (
    <>
      < Header />
      <form method="POST" onSubmit={handleSubmit} action="/api/produtos/novo/">
          <p>
              <label htmlFor="nome" >Nome</label>
              <input type="text" name="nome" required onChange={(e) => {onChangeInput(e)}} />
          </p>
          <p>
              <label htmlFor="preco">Preco</label>
              <input type="text" name="preco" value={dataForm.preco} required onChange={(e) => {onChangeInput(e)}} />
          </p>
          <p>
              <label htmlFor="fotoTitulo">Titulo Foto</label>
              <input type="text" name="fotoTitulo" value={dataForm.fotoTitulo} required onChange={(e) => {onChangeInput(e)}} />
          </p>
          <p>
              <label htmlFor="fotoSrc">Url Foto</label>
              <input type="text" name="fotoSrc"value={dataForm.fotoSrc} required onChange={(e) => {onChangeInput(e)}} />
          </p>
          <ButtonForm type="submit"/>
      </form>
    </>
  )
}

export default Form