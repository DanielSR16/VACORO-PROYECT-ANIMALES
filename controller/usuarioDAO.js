const coneccionDB =  require('../db/connection')

const vaca = coneccionDB.db.vaca


    async function allUsuarios(){
        try {
            all_usuarios = await vaca.findAll();
            return all_usuarios;
            
        } catch (error) {
            
        }
    }
    async function newUsuario(usuario){
            // console.log('estoy en metodo')
            
            try{
                 crearUuario = await Usuario.create(usuario)
                
            }catch(err){
                return err
            }
    }

    // async function updateUsuario(usuario){
    //     console.log(usuario)
    //     console.log('estoy en actualizar')
    //     try{
    //         resultado = await Usuario.update(usuario, {
    //             where: {
    //                 id: usuario.id
    //             }
    //         })
    //     }catch(err){
    //         return err
    //     }
    // }

    // async function getUserbyEmailAndPassword(usuario){
    //     console.log(usuario)
        
    //     try{
    //         resultado = await Usuario.findOne({
    //             where: {
    //                 correo_electronico : usuario.correo_electronico,
    //             },
    //             attributes: ['id','contrasenia']
    //         })
    //         if (resultado === null) {
    //             return null
    //           } else {
    //             return resultado 
              
    //           }
    //     }catch(err){
    //         return err
    //     }
    // }

    

controller = {}
controller.create = newUsuario
controller.getAll = allUsuarios
// controller.modificar = updateUsuario
// controller.getUserEmailPass = getUserbyEmailAndPassword








module.exports = {controller}