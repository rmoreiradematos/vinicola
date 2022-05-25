import mongoose from "mongoose";

const vinhoSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String},
        descricao: {type: String},
        foto: {type: String},
        preco: {type: Number},
        peso: {type: Number},
    }
)

const vinhos = mongoose.model('vinhos', vinhoSchema);

export default vinhos;