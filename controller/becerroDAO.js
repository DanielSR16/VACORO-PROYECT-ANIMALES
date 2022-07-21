const coneccionDB =  require('../db/connection')

const becerro = coneccionDB.db.becerro

async function allBecerros(){
    try {
        all_becerros = await becerro.findAll();

        return all_becerros;

    } catch (error) {
        return  error
    }
}
async function newBecerro(becerro_json){

    try{
        crearBecerro = await becerro.create(becerro_json)
        return crearBecerro

    }catch(err){
        return err
    }
}

async function updateBecerro(becerro_json){

    try{
        resultado = await becerro.update(becerro_json, {
            where: {
                id: becerro_json.id
            }
        })
    }catch(err){
        return err
    }
}

async function deleteBecerro(becerro_json){
    try {
        resultado = await becerro.destroy(
            {
                where:{
                    id:becerro_json.id
                }
            }
        );

    }catch (err) {
        return err
    }
}
async function getBecerrobyId(becerro_json){
    try {
        resultado = await  becerro.findByPk(
            becerro_json.id
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

async function getBecerrosbyIdUser(usuario){
    console.log(usuario)

    try{
        resultado = await becerro.findAll({
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

controller = {}
controller.allBecerros = allBecerros
controller.newBecerro = newBecerro
controller.updateBecerro = updateBecerro
controller.deleteBecerro = deleteBecerro
controller.getBecerrobyId = getBecerrobyId
controller.getBecerrosbyIdUser = getBecerrosbyIdUser
module.exports = {controller}
