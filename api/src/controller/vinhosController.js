import vinhos from "../models/vinho.js"

class vinhoController {
    
    static listarVinhos = (req, res) =>{
        vinhos.find((err, vinhos) =>{
            res.status(200).json(vinhos);
        });
    } 

    static listarVinhosPorId = (req,res) =>{
        const id = req.params.id;
        vinhos.findById(id, (err, vinhos) =>{
            if(err){
                res.status(400).send({message: `${err.message} - id do vinho não localizado`});
            }else{
                res.status(200).send(vinhos);
            }
        })
    }

    static cadastrarVinho = (req,res) =>{
        let vinho = new vinhos(req.body);
        vinho.save((err) =>{
            if(err){
                res.status(500).send({message: `${err.message} falha ao cadastrar o vinho`});
            }else{
                res.status(201).send(vinho.toJSON());
            }
        })
    }

    static atualizarVinho = (req, res) =>{
        const id = req.params.id;

        vinhos.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
            if(!err) {
                res.status(200).send({message: "vinho atualizado com sucesso"})
            }else{
                res.status(500).send({message: err.message})
            }
        });
    }

    static excluirVinho = (req,res) =>{
        const id = req.params.id;
        vinhos.findByIdAndDelete(id,(err) =>{
            if(!err){
                res.status(200).send({message: "vinho excluido com sucesso"});
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }
}


export default vinhoController;