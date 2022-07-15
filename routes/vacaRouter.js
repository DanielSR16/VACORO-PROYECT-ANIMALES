    const router = require('express').Router();
    const vaca_DAO = require('../controller/vacaDAO')

    router.get('/',(req,res)=>{
        res.send('Hola prueba Vaca')

       
    });

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


        const Vaca = {
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
        console.log(Vaca)
        const vaca = vaca_DAO.controller.newVaca(Vaca)

        return res.json({status: 'success'});

    })

    router.get('/all',async(req,res)=>{
        const vaca =  await vaca_DAO.controller.allVacas()
        res.send(vaca)
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


        const Vaca = {
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

        const vaca = await vaca_DAO.controller.updateVaca(Vaca);
        res.send({status: 'ok'});
    })
    router.post('/delete', async (req,res)=>{
        id = req.body.id

        const Vaca = {
            id : id,
        }

        const vaca = await vaca_DAO.controller.deleteVaca(Vaca);
        res.send({status: 'ok'});
    })

    router.post('/getVacasbyIdUser', async (req,res)=>{
        id_usuario = req.body.id_usuario

        const Vaca = {
            id_usuario : id_usuario,
        }

        const vaca = await vaca_DAO.controller.getVacasbyIdUser(Vaca);
        res.json(vaca)
    });

    router.post('/getVacabyId', async (req,res)=>{
        id = req.body.id

        const Vaca = {
            id : id,
        }

        const vaca = await vaca_DAO.controller.getVacabyId(Vaca);
        data = {
            "general": [
                vaca
            ]
        };
        res.json(data);
    });

    module.exports = router;