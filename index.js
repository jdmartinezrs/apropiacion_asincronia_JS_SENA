import { explorandoAsincronia,
     cicloMuyGrande,
     crearCita,
     logCita,
     solicitudServidor,
     obtenerResultados,
   // tomarDatos,
    procesarDatos,
    manejoErroresPromesas,
    //mostrarResultado,
    } from './ejercicios/index.js';

explorandoAsincronia();
cicloMuyGrande(1000000000);
crearCita("Come tus vegetales", logCita);
crearCita("Come tus vegetales", (cita)=>{
    console.log(cita);
});
/*
solicitudServidor("El vaso está medio lleno ",obtenerResultados);

tomarDatos((datos)=>{
    procesarDatos(datos, (resultado)=>{
        mostrarResultado(resultado)
    });
});*/

//Encadenamiento de Promesas

solicitudServidor("sERVIDOR: dATOS ")
.then((respuesta)=>{
    console.log("pROMESA -> dATOS reCIBIDOS: " + respuesta);
    return procesarDatos(respuesta);
})
.then((resultado)=>{
    console.log("pROMESA -> pROCESAMIENTO Terminado");
    obtenerResultados(resultado);
})


//uso de catch para manejo de errores
manejoErroresPromesas()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
