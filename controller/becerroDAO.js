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


controller = {}
controller.allBecerros = allBecerros
controller.newBecerro = newBecerro
controller.updateBecerro = updateBecerro
controller.deleteBecerro = deleteBecerro

module.exports = {controller}
