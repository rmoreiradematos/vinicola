var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const ProdutoSchema = mongoose.Schema({
    nome: String,
    preco: String,
    fotos: {
        titulo: String,
        src: String,
    }
});

let ProdutosModel = mongoose.model('ProdutosModel', ProdutoSchema);

const getProdutos = async (req, res) =>{
  try{    
    const produtosModels = await ProdutosModel.find();
    res.status(200).json(produtosModels);
  }catch(error){
    res.status(404).json({message: error.message})
  }
}

const novoProduto = async (req, res) =>{
  try{
    const produtosModels = await ProdutosModel.insert(res.body);
    console.log(produtosModels);
    res.send('Produto Criado com Sucesso');
  }catch(error){
    res.status(404).json({message: error.message})
  }
}



const produto = [
  {
  nome: "Vinho Tinto",
  preco: "R$ 50,00",
  fotos: [
      {
        src: "https://images.tcdn.com.br/img/img_prod/1056339/vinho_cabernet_sauvignon_conceito_marco_luigi_750ml_303_1_3537f99541eb0ad7d33411141d2c1dd2.jpg",
        titulo: "Cabernet Sauvignon"
      }
    ],
  },
  {
    nome: "Vinho Rosè",
    preco: "R$ 30,00",
    fotos: [
        {
          src: "https://m.media-amazon.com/images/I/61c5S-n3x-L._AC_SY741_.jpg",
          titulo: "Vinho Concha y Toro Rose 750ML"
        }
      ],
  },
  {
    nome: "Vinho Seco",
    preco: "R$ 49,67",
    fotos: [
        {
          src: "https://m.media-amazon.com/images/I/61ypj+kFCdL._AC_SY741_.jpg",
          titulo: "Concha y Toro Carmenere 750ML"
        }
      ],
  },
  {
    nome: "Vinho Tinto",
    preco: "R$ 50,00",
    fotos: [
        {
          src: "https://images.tcdn.com.br/img/img_prod/1056339/vinho_cabernet_sauvignon_conceito_marco_luigi_750ml_303_1_3537f99541eb0ad7d33411141d2c1dd2.jpg",
          titulo: "Cabernet Sauvignon"
        }
      ],
  },
  {
    nome: "Vinho Deme Seco",
    preco: "R$ 35,50",
    fotos: [
        {
          src: "https://m.media-amazon.com/images/I/61mE8qATUaL._AC_SY741_.jpg",
          titulo: "Vinho Concha y Toro Reservado Sweet Red 750 Ml"
        }
      ],
  },
  {
    nome: "Vinho Branco",
    preco: "R$ 39,90",
    fotos: [
        {
          src: "https://m.media-amazon.com/images/I/61Uioyq9OGL._AC_SY741_.jpg",
          titulo: "Vinho Concha y Toro Sauvignon Blanc 750 Ml"
        }
      ],
  },
  {
    nome: "Vinho Portugues",
    preco: "R$ 40,19",
    fotos: [
        {
          src: "https://m.media-amazon.com/images/I/51xfgDepjLL._AC_SX679_.jpg",
          titulo: "Vinho Gato Negro Cabernet Sauvignon 750 Ml"
        }
      ],
  },

]
/* GET home page. */

router.get('/api/produtos/listar', function(req, res) {
  console.log("OIII");
  res.send({produto})
});

router.get('/api/produtos/listarqqqq', getProdutos);
router.post('/api/produtos/novo', novoProduto);

module.exports = router;
