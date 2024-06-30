function saludo (nombre){
    alert(`Bienvenido ${nombre}, esto es un quiz de cultura general!`);
}
let nombre = prompt(`Introduce tu nombre`);

saludo(nombre);

let pregunta1;
let pregunta2;
let pregunta3;
let pregunta4;
let mensaje;


do {
    mensaje = prompt(`Si no deseas jugar escribe SALIR`).toUpperCase();
    
    if (mensaje === 'SALIR') {
        alert(`Gracias por jugar`);
    } else {       
        let pregunta1 = prompt('¿Cuál es la capital de Guatemala? \n 1. Madrid \n 2. Ciudad de Guatemala \n 3. Buenos Aires').toLocaleLowerCase();
        if (pregunta1 !== 'ciudad de guatemala') {
            alert(`Vuelve a intentarlo, ${nombre}`);
        } else {
            alert(`¡Bien hecho ${nombre}!`);
            
            let pregunta2 = prompt('¿Quién de los siguientes no juega en la NBA? \n 1. LeBron James \n 2. Jimmy Butler \n 3. Lionel Messi').toLocaleLowerCase();
            if (pregunta2 !== 'lionel messi') {
                alert(`Vuelve a intentarlo, ${nombre}`);
            } else {
                alert(`¡Bien hecho ${nombre}!`);
                
                let pregunta3 = prompt('¿Cuántos elementos contiene la tabla periódica? \n 1. 118 \n 2. 114 \n 3. 120');
                if (pregunta3 !== '118') {
                    alert(`Vuelve a intentarlo ${nombre}`);
                } else {
                    alert(`¡Bien hecho ${nombre}!`);
                    
                    let pregunta4 = prompt('¿Cuál de las siguientes películas no es de Tarantino? \n 1. Pulp Fiction \n 2. Inglourious Bastards \n 3. Taxi Driver').toLocaleLowerCase();
                    if (pregunta4 !== 'taxi driver') {
                        alert(`Vuelve a intentarlo ${nombre}`);
                    } else {
                        alert(`¡Felicidades ${nombre}, haz completado todas las preguntas del quiz!`);
                    }
                }
            }
        }
    }
} while (mensaje !== 'SALIR');


const despedir = nombre =>{nombre;}
alert(`adios ${nombre}`);
