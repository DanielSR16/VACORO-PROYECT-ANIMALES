const coneccionDB =  require('../db/connection')

const vaca = coneccionDB.db.vaca

    async function allVacas(){
        try {
            all_usuarios = await vaca.findAll();
            return all_usuarios;
            
        } catch (error) {
            
        }
    }
    async function newVaca(vaca_json){
            // console.log('estoy en metodo')
            
            try{
                 crearVaca = await vaca.create(vaca_json)
                 return crearVaca
                
            }catch(err){
                return err
            }
    }

    async function updateUsuario(vaca_json){
        // console.log(vaca_json)
        // console.log('estoy en actualizar')
        try{
            resultado = await vaca.update(vaca_json, {
                where: {
                    id: vaca_json.id
                }
            })
        }catch(err){
            return err
        }
    }

    
controller = {}
controller.allVacas = allVacas
controller.newVaca = newVaca
controller.modificar = updateUsuario

// controller.getUserEmailPass = getUserbyEmailAndPassword








module.exports = {controller}
