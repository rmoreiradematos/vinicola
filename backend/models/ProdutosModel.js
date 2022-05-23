import mongoose from 'mongoose';

const ProdutoSchema = mongoose.Schema({
    nome: String,
    preco: String,
    fotos: {
        titulo: String,
        src: String,
    }
});

const ProdutosModel = mongoose.model('ProdutosModel', ProdutoSchema);

export default ProdutosModel;