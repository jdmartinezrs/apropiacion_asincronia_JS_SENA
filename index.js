import { explorandoAsincronia, cicloMuyGrande, crearCita, logCita} from './ejercicios/index.js';

explorandoAsincronia();
cicloMuyGrande(1000000000);
crearCita("Come tus vegetales", logCita);
crearCita("Come tus vegetales", (cita)=>{
    console.log(cita);
});