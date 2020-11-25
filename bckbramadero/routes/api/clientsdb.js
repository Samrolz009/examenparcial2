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

router.get('/one/:id', async (req, res)=>{
    try{
      let { id } = req.params;
      let oneDocument = await mdbClientModel.getById(id);
      res.status(200).json(oneDocument);
    } catch(ex){
      console.log(ex);
      res.status(500).json({ "msg": "Algo Paso Mal." });
    }
  });

router.put('/upd/:id', async (req, res)=>{
  try{
    let {id} = req.params;
    let {status} = req.body;
    let rslt = await mdbClientModel.updateById(id,status);
    res.status(200).json(rslt);
  }catch(ex){
    console.log(ex);
    res.status(500).json({ "msg": "Algo Paso Mal." });
  }
});


router.delete('/del/:id',async (req, res)=>{
  let {id} = req.params;
  try{
    let rslt = await mdbClientModel.removeById(id);
    res.status(200).json(rslt);
  }catch(ex){
    console.log(ex);
    res.status(500).json({ "msg": "Algo Paso Mal." });
  }
  
});



module.exports = router;
