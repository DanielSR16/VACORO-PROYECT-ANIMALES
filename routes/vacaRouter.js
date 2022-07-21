    const router = require('express').Router();
    const vaca_DAO = require('../controller/vacaDAO')
    const toro_DAO = require("../controller/toroDAO");
    const express = require("express");

    verificacion = require("../validacion")



    router.get('/',(req,res)=>{
        res.send('Hola prueba Vaca')

       
    });

router.post('/new', verificacion,async (req,res)=>{
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

    router.get('/all',verificacion,async(req,res)=>{
        const vaca =  await vaca_DAO.controller.allVacas()
        res.send(vaca)
    })

    router.post('/update', verificacion,async (req,res)=>{
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

    router.post('/getVacasbyIdUser',verificacion, async (req,res)=>{
        id_usuario = req.body.id_usuario

        const Vaca = {
            id_usuario : id_usuario,
        }
        console.log(Vaca);

        const vaca = await vaca_DAO.controller.getVacasbyIdUser(Vaca);
        vaca.unshift(
            {
                "id": -1,
                "id_usuario": -1,
                "nombre": "Sin madre",
                "descripcion": "NULL",
                "raza": "NULL",
                "num_arete": "NULL",
                "url_img": "https://image-vacoro.s3.amazonaws.com/d2b9e08f-322b-4d98-8322-2569665e523c.jpg",
                "estado": -1,
                "edad": -1,
                "fecha_llegada": "0000-00-00"
            },
        )
        res.json(vaca)
    });

    router.post('/getVacabyId', verificacion,async (req,res)=>{
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

    router.post('/getVacaUsuario',verificacion,async(req,res)=>{
        id_usuario = req.body.id_usuario

        const usuario ={
            id_usuario :id_usuario
        }
        const vaca =  await vaca_DAO.controller.getVACAbyIdUser(usuario)
        res.send(vaca)
    })







    module.exports = router;