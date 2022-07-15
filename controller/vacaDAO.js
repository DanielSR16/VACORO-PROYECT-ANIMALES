const coneccionDB =  require('../db/connection')

const vaca = coneccionDB.db.vaca

    async function allVacas(){
        try {
            all_vacas = await vaca.findAll();
            return all_vacas;
            
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

    async function updateVaca(vaca_json){
        // console.log(vaca_json)
        // console.log('estoy en actualizar')
        try{
            resultado = await vaca.update(vaca_json, {
                where: {
                    id: vaca_json.id
                },
            })
            return  resultado;
        }catch(err){
            return err
        }
    }

    async function deleteVaca(vaca_json){
        try {
            resultado = await  vaca.destroy(
                {
                    where:{
                        id:vaca_json.id
                    }
                }
            );

        }catch (err) {
            return err
        }
    }
    async function getVacasbyIdUser(usuario){
        console.log(usuario)

        try{
            resultado = await vaca.findAll({
                where: {
                    id_usuario : usuario.id_usuario,
                },
            })
            if (resultado === null) {
                return null
            } else {
                return resultado
            }
        }catch(err){
            return err
        }
    }

    async function getVacabyId(vaca_json){
        try {
            resultado = await  vaca.findByPk(
                vaca_json.id
            );

            if (resultado === null) {

                return null
            } else {

                return resultado
            }

        }catch (err) {
            console.log(err)
            return err
        }
    }



controller = {}
controller.allVacas = allVacas
controller.newVaca = newVaca
controller.updateVaca = updateVaca
controller.deleteVaca = deleteVaca
controller.getVacasbyIdUser =getVacasbyIdUser
controller.getVacabyId = getVacabyId
module.exports = {controller}
