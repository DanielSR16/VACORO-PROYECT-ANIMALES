const router = require('express').Router();
const becerro_DAO = require('../controller/becerroDAO')

router.get('/',(req,res)=>{
    res.send('Hola prueba becerro')
});


router.get('/all',async(req,res)=>{
    console.log('aaaaaaaaaaaaaa')
    const becerro =  await becerro_DAO.controller.allBecerros()
    res.send(becerro)
    console.log(becerro)
})
router.post('/new', async (req,res)=>{
    id_usuario = req.body.id_usuario
    nombre = req.body.nombre
    descripcion = req.body.descripcion
    raza =  req.body.raza
    num_arete = req.body.num_arete
    url_img = req.body.url_img
    estado =  req.body.estado
    edad = req.body.edad,
    id_vaca = req.body.id_vaca,
    fecha_llegada = req.body.fecha_llegada



    const Becerro = {
        id_usuario : id_usuario,
        nombre : nombre,
        descripcion : descripcion,
        raza : raza,
        num_arete : num_arete,
        url_img : url_img,
        estado : estado,
        edad : edad,
        id_vaca : id_vaca,
        fecha_llegada : fecha_llegada,

    }

    const becerro = becerro_DAO.controller.newBecerro(Becerro)

    return res.json({status: 'success'});

})


router.post('/update', async (req,res)=>{
    id = req.body.id,
    nombre = req.body.nombre
    descripcion = req.body.descripcion
    raza =  req.body.raza
    num_arete = req.body.num_arete
    url_img = req.body.url_img
    estado =  req.body.estado
    edad = req.body.edad,
        id_vaca = req.body.id_vaca,
        fecha_llegada = req.body.fecha_llegada



    const Becerro = {
        id : id,
        nombre : nombre,
        descripcion : descripcion,
        raza : raza,
        num_arete : num_arete,
        url_img : url_img,
        estado : estado,
        edad : edad,
        id_vaca : id_vaca,
        fecha_llegada : fecha_llegada,

    }

    const becerro = await becerro_DAO.controller.updateBecerro(Becerro);
    res.send({status: 'ok'});
})
router.post('/delete', async (req,res)=>{
    id = req.body.id

    const Becerro = {
        id : id,
    }

    const becerro = await becerro_DAO.controller.deleteBecerro(Becerro);
    res.send({status: 'ok'});
})

router.post('/getBecerrobyId', async (req,res)=>{
    id = req.body.id

    const Becerro = {
        id : id,
    }

    const becerro = await becerro_DAO.controller.getBecerrobyId(Becerro);
    data = {
        "general": [
            becerro
        ]
    };
    res.json(data);
});


module.exports = router;