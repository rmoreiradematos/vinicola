import React from 'react'


    const Produto = ({nome, preco, fotos}) => {
        /*const [dados, setDados] = React.useState(null);
        
        React.useEffect(() =>{
            fetch('/api/mensagem').then((response) => response.json().then(json => setDados(json)))
        }, []);
*/
        return(    
            <div className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                    src={fotos[0].src}
                    alt={fotos[0].titulo}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
                </div>
                <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">

                        <span aria-hidden="true" className="absolute inset-0" />
                        {nome}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500"></p>
                </div>
                <p className="text-sm font-medium text-gray-900">{preco}</p>
                </div>
            </div>
        )
}

export default Produto