const router = require('express').Router();
const toro_DAO = require('../controller/toroDAO')

router.get('/',(req,res)=>{
    res.send('Hola prueba Toro')


});

router.get('/all',async(req,res)=>{
    const toro =  await toro_DAO.controller.allToros()
    res.send(toro)
})
router.post('/new', async (req,res)=>{
    id_usuario = req.body.id_usuario
    nombre = req.body.nombre
    descripcion = req.body.descripcion
    raza =  req.body.raza
    num_arete = req.body.num_arete
    url_img = req.body.url_img
    estado =  req.body.estado
    edad = req.body.edad
    fecha_llegada = req.body.fecha_llegada


    const Toro = {
        id_usuario : id_usuario,
        nombre : nombre,
        descripcion : descripcion,
        raza : raza,
        num_arete : num_arete,
        url_img : url_img,
        estado : estado,
        edad : edad,
        fecha_llegada : fecha_llegada,

    }

    const toro = toro_DAO.controller.newToro(Toro)

    //res.json(toro)
    return res.json({status: 'success'});



})


router.post('/update', async (req,res)=>{
    id = req.body.id
    id_usuario = req.body.id_usuario
    nombre = req.body.nombre
    descripcion = req.body.descripcion
    raza =  req.body.raza
    num_arete = req.body.num_arete
    url_img = req.body.url_img
    estado =  req.body.estado
    edad = req.body.edad
    fecha_llegada = req.body.fecha_llegada


    const Toro = {
        id : id,
        id_usuario : id_usuario,
        nombre : nombre,
        descripcion : descripcion,
        raza : raza,
        num_arete : num_arete,
        url_img : url_img,
        estado : estado,
        edad : edad,
        fecha_llegada : fecha_llegada,
    }

    const toro = await toro_DAO.controller.updateToro(Toro);

    res.send({status: 'ok'});
})
router.post('/delete', async (req,res)=>{
    id = req.body.id

    const Toro = {
        id : id,
    }

    const toro = await toro_DAO.controller.deleteToro(Toro);
    res.send({status: 'ok'});
})

router.post('/getTorobyId', async (req,res)=>{
    id = req.body.id

    const Toro = {
        id : id,
    }

    const toro = await toro_DAO.controller.getTorobyId(Toro);
    data = {
        "general": [
            toro
        ]
    };
    res.json(data);
});


module.exports = router;