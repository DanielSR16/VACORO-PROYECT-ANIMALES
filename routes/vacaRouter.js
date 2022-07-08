    const router = require('express').Router();
    const express = require('express')
    const usuario_DAO  = require('../controller/usuarioDAO')
    const vaca_DAO = require('../controller/vacaDAO')
    // const usuario_obj =  require('../controller/usuario')
    // const bcrypt = require('bcrypt');
    // const saltRounds = 10;
    // const myPlaintextPassword = 's0/\/\P4$$w0rD';
    // const someOtherPlaintextPassword = 'not_bacon';
    // const jwt = require('jsonwebtoken');
    
    router.get('/',(req,res)=>{
        res.send('Hola prueba vaca')

       
    });

router.post('/newVaca', async (req,res)=>{
    console.log('a')
    nombre = req.body.nombre
    descripcion = req.body.descripcion
    raza =  req.body.raza
    num_arete = req.body.num_arete
    url_img = req.body.url_img
    estado =  req.body.estado
    fecha_llegada = req.body.fecha_llegada

    

          
          const Vaca = {
            nombre : nombre,
            descripcion : descripcion,
            raza : raza,
            num_arete : num_arete,
            url_img : url_img,
            estado : estado,
            fecha_llegada : fecha_llegada,
    
        }
    
         
        const vaca = vaca_DAO.controller.newVaca(Vaca)
    
        res.json(vaca)
  
 
    // console.log('contrasenia has: '+contrasenia_a)


  
    })

    router.get('/allUsuarios',async(req,res)=>{
        const usuario =  await usuario_DAO.controller.getAll()
        res.send(usuario)
    })

    // router.post('/actualizarUsuario', async (req,res)=>{

    //     id = req.body.id
    //     nombre = req.body.nombre
    //     apellido = req.body.apellido
    //     correo_electronico =  req.body.correo_electronico
    //     contrasenia = req.body.contrasenia
    //     ciudad = req.body.ciudad
    //     estado =  req.body.estado
    //     edad = req.body.edad
    //     rancho = req.body.nombre_rancho
    //     url_image = req.body.url_image

    //     const Usuario = {
    //         id : id,
    //         nombre : nombre,
    //         apellido : apellido,
    //         correo_electronico : correo_electronico,
    //         contrasenia : contrasenia,
    //         ciudad : ciudad,
    //         estado : estado,
    //         edad : edad,
    //         rancho : rancho,
    //         url_image : url_image

    //     }

    //     const usuario = await usuario_DAO.controller.modificar(Usuario);
    //     res.json(usuario)
    // })


     //metodo que obtienes user, pasando JSON con correo y contraseña
    // router.get('/getUserlogin',async(req,res)=>{

    //     const payload = {
    //         check:true
    //     };
    //     const token = jwt.sign(payload,'clavesecreta123',{
    //         expiresIn:'7d'
    //     });
    //     console.log(token)

    //     correo_electronico =  req.body.correo_electronico
    //     contrasenia = req.body.contrasenia

    //     const Usuario = {
    //         correo_electronico : correo_electronico,
    //     }

    //     const usuario = await usuario_DAO.controller.getUserEmailPass(Usuario)
    //     if (usuario == null){
    //         console.log('Correo o contraseña incorrecta')
    //     }else{
    //         const resultado = await bcrypt.compare(contrasenia, usuario.contrasenia);
    //         if(resultado == true){
    //             console.log('paso login')
    //         }else{
    //             console.log('Correo o contraseña incorrecta');
    //         }
    //         // falsy: false
    //     }
  
    
    //     res.send(usuario)
    // });

    // const verificacion = express.Router()

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
              
    // });





    // router.get('/info',verificacion,(req,res)=>{
    //     res.json('Informacion importante entregada')
    // });




    module.exports = router;