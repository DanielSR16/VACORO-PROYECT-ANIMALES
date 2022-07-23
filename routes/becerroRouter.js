const router = require('express').Router();
const becerro_DAO = require('../controller/becerroDAO')
verificacion = require("../validacion")

// verificacion.use((req,res,next)=>{
//     let token = req.headers['x-access-token'] || req.headers['authorization']
//     // console.log(token)
//     if(!token){
//         res.status(401).send(
//             {
//                 error: 'es necesario un token'
//             }
//         )
//         return
//     }
//     if(token.startsWith('Bearer ')){
//         token = token.slice(7,token.length);
//         console.log(token)
//     }
//     if(token){
//         jwt.verify(token,"clavesecreta123",(error,decode)=>{
//             console.log(error)
//             if(error){
//                 return res.json({
//                     message: 'el token no es valido'
//                 },)
//             }else{
//                 req.decode = decode;
//                 next();
//             }
//         },)
//     }
//
// });

router.get('/',(req,res)=>{
    res.send('Hola prueba becerro')
});


router.get('/all',verificacion,async(req,res)=>{
    console.log('aaaaaaaaaaaaaa')
    const becerro =  await becerro_DAO.controller.allBecerros()
    res.send(becerro)
    console.log(becerro)
})

router.post('/getBecerrosUsuario',verificacion,async(req,res)=>{
    id_usuario = req.body.id_usuario

    const usuario ={
        id_usuario :id_usuario
    }
    const toro =  await becerro_DAO.controller.getBecerrosbyIdUser(usuario)
    res.send(toro)
})

router.post('/new', verificacion,async (req,res)=>{
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


router.post('/update', verificacion,async (req,res)=>{
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
router.post('/delete', verificacion,async (req,res)=>{
    id = req.body.id

    const Becerro = {
        id : id,
    }

    const becerro = await becerro_DAO.controller.deleteBecerro(Becerro);
    res.send({status: 'ok'});
})

router.post('/getBecerrobyId',verificacion, async (req,res)=>{
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

router.post('/getBecerrosbyIdvaca',verificacion,async(req,res)=>{
    id_vaca = req.body.id_vaca

    const vacaid ={
        id_vaca :id_vaca
    }
    const vaca =  await becerro_DAO.controller.getBecerrosbyIdvaca(vacaid)
    res.send(vaca)
})


module.exports = router;