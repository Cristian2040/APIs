var rutas = require("express").Router();
var {mostrarUsuarios, nuevoUsuario, borrarUsuarios, buscarPorId} = require("../bd/usuariosBD");
//var {Router} = require("express");

rutas.get("/mostrarUsuarios", async (req, res)=>{
    //res.send("Hola estas en raiz");
    var usuariosValidos = await mostrarUsuarios();
    console.log(usuariosValidos);
    res.json(usuariosValidos);
    
});

rutas.delete("/borrarUsuarios/:id", async (req, res) => {
    console.log(id);
    var id = req.params.id;
    await borrarUsuarios(id);
    res.json(borrarUsuarios);
});

rutas.get("/buscarPorId/id", async (req, res)=>{
    console.log("req.body:", req.body);
    var usuariosValidos = await buscarPorId(req.params.id);
    res.json(usuariosValidos);
});

rutas.post("/nuevoUsuario", async(req, res)=>{
    console.log("req.body:", req.body);
    //console.log("usuarioGuardado:", usuarioGuardado);
    var usuarioGuardado = await nuevoUsuario(req.body);
    res.json(usuarioGuardado);
})

module.exports = rutas;