const express = require("express");
let router = express.Router();

const ClientModelClass = require('../../models/clients/clients.model');
const mdbClientModel = new ClientModelClass();

router.get('/all', async (req, res)=>{
  try{
    const rslt = await mdbClientModel.getAll()
    res.status(200).json(rslt);
  }catch(ex){
    console.log(ex);
    res.status(500).json({"msg":"Algo Paso Mal."});
  }
});


router.post('/new', async (req, res)=>{
  try{
    let { nombre, correo, telefono, producto, formapago, estado} = req.body;
    var rslt = await mdbClientModel.addOne({ nombre, correo, telefono, producto, formapago, estado});
    res.status(200).json(rslt);
  }catch(ex){
    console.log(ex);
    res.status(500).json({ "msg": "Algo Paso Mal." });
  }
});



module.exports = router;
