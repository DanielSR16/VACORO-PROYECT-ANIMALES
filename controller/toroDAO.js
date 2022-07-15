const coneccionDB =  require('../db/connection')

const toro = coneccionDB.db.toro

async function allToros(){
    try {
        all_toros = await toro.findAll();
        return all_toros;

    } catch (error) {

    }
}
async function newToro(toro_json){
    // console.log('estoy en metodo')

    try{
        crearToro = await toro.create(toro_json)
        return crearToro

    }catch(err){
        return err
    }
}

async function updateToro(toro_json){
    // console.log(vaca_json)
    // console.log('estoy en actualizar')
    try{
        resultado = await toro.update(toro_json, {
            where: {
                id: toro_json.id
            }
        })
    }catch(err){
        return err
    }
}

async function deleteToro(toro_json){
    try {
        resultado = await toro.destroy(
            {
                where:{
                    id:toro_json.id
                }
            }
        );

    }catch (err) {
        return err
    }
}

    async function getTorobyId(toro_json){
        try {
            resultado = await  toro.findByPk(
                toro_json.id
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
controller.allToros = allToros
controller.newToro = newToro
controller.updateToro = updateToro
controller.deleteToro = deleteToro
controller.getTorobyId = getTorobyId

module.exports = {controller}
