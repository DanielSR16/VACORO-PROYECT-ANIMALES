    const router = require('express').Router();
    const vaca_DAO = require('../controller/vacaDAO')

    router.get('/',(req,res)=>{
        res.send('Hola prueba Vaca')

       
    });

router.post('/new', async (req,res)=>{

    nombre = req.body.nombre
    descripcion = req.body.descripcion
    raza =  req.body.raza
    num_arete = req.body.num_arete
    url_img = req.body.url_img
    estado =  req.body.estado
    edad = req.body.edad
    fecha_llegada = req.body.fecha_llegada


        const Vaca = {
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
    
        res.json(vaca)
  
 
    // console.log('contrasenia has: '+contrasenia_a)

    })

    router.get('/all',async(req,res)=>{
        const vaca =  await vaca_DAO.controller.allVacas()
        res.send(vaca)
    })

    router.post('/update', async (req,res)=>{
        id = req.body.id
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
        res.json(vaca)
    })
    router.post('/delete', async (req,res)=>{
        id = req.body.id

        const Vaca = {
            id : id,
        }

        const vaca = await vaca_DAO.controller.deleteVaca(Vaca);
        res.json(vaca)
    })



    module.exports = router;