const express = require("express");
const jwt = require("jsonwebtoken");
const verificacion = express.Router()

 verificacion.use((req,res,next)=>{
    let token = req.headers['x-access-token'] || req.headers['authorization']
    // console.log(token)
    if(!token){
        res.status(401).send(
            {
                error: 'es necesario un token'
            }
        )
        return
    }
    if(token.startsWith('Bearer ')){
        token = token.slice(7,token.length);

    }
    if(token){
        jwt.verify(token,"clavesecreta123",(error,decode)=>{
            if(error){
                return res.json({
                    message: 'el token no es valido'
                },)
            }else{
                req.decode = decode;
                next();
            }
        },)
    }

});
module.exports = verificacion;