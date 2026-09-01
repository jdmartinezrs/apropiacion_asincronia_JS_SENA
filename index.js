import { explorandoAsincronia,
     cicloMuyGrande,
     crearCita,
     logCita,
     solicitudServidor,
     obtenerResultados,
    tomarDatos,
    procesarDatos,
    mostrarResultado
    } from './ejercicios/index.js';

explorandoAsincronia();
cicloMuyGrande(1000000000);
crearCita("Come tus vegetales", logCita);
crearCita("Come tus vegetales", (cita)=>{
    console.log(cita);
});

solicitudServidor("El vaso está medio lleno ",obtenerResultados);

tomarDatos((datos)=>{
    procesarDatos(datos, (resultado)=>{
        mostrarResultado(resultado)
    });
});