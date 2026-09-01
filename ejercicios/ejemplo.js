/**1. Explorando la asincronía básica
Ejercicio:
Escribe un código que imprima “Inicio”, luego una operación con setTimeout que tarde 2 segundos
y finalmente “Fin”.
Meta: que reconozcan el orden real de ejecución. */

export const explorandoAsincronia =()=>{
  console.log("Inicio")
  setTimeout (()=>{
    console.log("Fin")
  },'2000');
}

/**
 * 2. Identificando código bloqueante
Ejercicio:
Crea un ciclo muy grande (por ejemplo, uno que cuente hasta millones) y observa cómo afecta la
ejecución del programa.
Meta: evidenciar cómo una tarea pesada bloquea el hilo principal.
 */
export const cicloMuyGrande =(cantidad)=>{
  for(let i =0; i<cantidad; i++){
  }
    console.log("Terminado")
}