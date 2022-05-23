import ProdutosModel from "../models/ProdutosModel.js";

const getProdutos = async (req, res) =>{
    try{
        const produtosModels = await ProdutosModel.find();
        res.status(200).json(produtosModels);
    }catch(error){
        res.status(404).json({message: error.message})
    }
}

const novoProduto = (req, res) =>{
    res.send('Criando Produto');
}