import React from 'react'
import Header from './Header';
import Produto from './Produto';

const Produtos = () => {
    const [dados, setDados] = React.useState(null);
    React.useEffect(() =>{
        fetch('/api/produtos/listar').then((response) => response.json().then(json => setDados(json))).catch((error) => console.log(error.message));
    }, []);

    if(dados !== null && dados !== undefined){
        return (
            <>
                <Header />
                <div className="bg-white">
                    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Seção de Vinhos</h2> 
                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {dados.produto.map((produto,i) => (
                                <Produto key={i}  {...produto}/>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Produtos