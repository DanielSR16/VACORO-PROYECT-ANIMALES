const router = require('express').Router();
const { jsPDF } = require("jspdf");
const { autotable } = require("jspdf-autotable");
const becerro_DAO = require('../controller/becerroDAO')
const vaca_DAO = require('../controller/vacaDAO')
const toro_DAO = require('../controller/toroDAO')


router.get('/globalReportVaca', async (req,res)=>{
    const vacas =  await vaca_DAO.controller.allVacas()
    const dataVacas = vacas.map((node) => node.get({ plain: true }));
    let resultado = dataVacas.map(({nombre,descripcion,num_arete,edad,fecha_llegada}) => ({nombre,descripcion,num_arete,edad,fecha_llegada}));
    generateReportGlobal("Reporte De Vacas",resultado,res)
});

router.get('/globalReportToro', async (req,res)=>{
    const toros =  await toro_DAO.controller.allBecerros()
    const dataToros = toros.map((node) => node.get({ plain: true }));
    let resultado = dataToros.map(({nombre,descripcion,num_arete,edad,fecha_llegada}) => ({nombre,descripcion,num_arete,edad,fecha_llegada}));
    generateReportGlobal("Reporte De Toros",resultado,res)
});

router.get('/globalReportBecerro', async (req,res)=>{
    const becerros =  await becerro_DAO.controller.allBecerros()
    const dataBecerros = becerros.map((node) => node.get({ plain: true }));
    let resultado = dataBecerros.map(({nombre,descripcion,num_arete,edad,fecha_llegada}) => ({nombre,descripcion,num_arete,edad,fecha_llegada}));
    generateReportGlobal("Reporte De Becerros",resultado,res)
});

function generateReportGlobal(tituloReporte,resultado,respuesta) {
    var doc = new jsPDF();
    var col = Object.keys(resultado[0]);
    var rows = [];

    for (var i=0; i<resultado.length; i++){
        rows.push(Object.values(resultado[i]))
    }
 
    doc.setFontSize(18)
    doc.text(tituloReporte, 14, 22)
    doc.setFontSize(10)
    doc.setTextColor(100)
  
    doc.autoTable(col,rows,{
        startY: 40,
        theme: 'grid',
    })

    respuesta.send(doc.output());
};

module.exports = router;