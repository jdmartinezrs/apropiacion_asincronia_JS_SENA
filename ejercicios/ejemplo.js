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


