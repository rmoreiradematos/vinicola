import express from "express";

import vinhos from "./vinhoRoutes.js";



const routes = (app) =>{
    app.route("/",).get((req,res) =>{
        res.status(200).send({titulo: "teste" })
    })

    app.use(
        express.json(),
        vinhos
    )

   
}

export default routes;