import express from "express";

import vinhoController from "../controller/vinhosController.js";

const router = express.Router();


router
    .get("/vinhos/", vinhoController.listarVinhos)
    .get("/vinhos/:id", vinhoController.listarVinhosPorId)
    .post("/vinhos", vinhoController.cadastrarVinho)
    .put("/vinhos/:id", vinhoController.atualizarVinho)
    .delete("/vinhos/:id", vinhoController.excluirVinho)


export default router;