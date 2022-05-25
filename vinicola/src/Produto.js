import React from 'react'
import Button from './Button'



    const Produto = (produto) => {
        const [contaClick, setContaClick] = React.useState(1);
        const [produtoCarrinho, setProdutoCarrinho] = React.useState({
            _id: '',
            nome: '',
            descricao: '',
            foto: '',
            preco: '',
            peso : '',
            qtd_vezes: 0,
        });

        const handleClick = () => {
            if(contaClick>=1){
                setProdutoCarrinho({produto: produto, qtd_vezes: contaClick} );
                window.localStorage.setItem(produto.nome, JSON.stringify(produtoCarrinho))
            }
            setContaClick(contaClick+1)

        }
        return(
                <div onClick={handleClick} className="group relative">
                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                        src={produto.foto}
                        alt={produto.nome}
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                    </div>
                    <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">

                            <span aria-hidden="true" className="absolute inset-0" />
                            {produto.nome}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500"></p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">R$ {produto.preco}</p>
                    </div>
                    <h3 className="text-sm text-gray-700">

                        <span aria-hidden="true" className="absolute inset-0" />
                            Peso:  {produto.peso} gramas
                            <Button  />
                        </h3>
                </div>
            
        )
}

export default Produto