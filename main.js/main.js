do {
    let nombre;
    do {
        nombre = prompt(`Introduce tu nombre`);
        if (nombre === '') {
            alert('Introduce tu nombre por favor');
        }
    } while (nombre === ''); 

    function saludo(nombre) {
        alert(`Bienvenido ${nombre}, esto es un quiz de cultura general, escribe la respuesta o el nûmero de la respuesta que creas correcta!`);
    }

    saludo(nombre);

    let mensaje;
    do {
        mensaje = prompt(`Si deseas jugar escribe CONTINUAR, sino escribe SALIR`).toUpperCase();
        
        if (mensaje === 'SALIR') {
            alert(`Gracias por jugar`);
        } else {
            let pregunta1 = prompt('¿Cuál es la capital de Guatemala? \n 1. Madrid \n 2. Ciudad de Guatemala \n 3. Buenos Aires').toLocaleLowerCase();
            if (pregunta1 !== 'ciudad de guatemala' && pregunta1!== '2') {
                alert(`Vuelve a intentarlo, ${nombre}`);
            } else {
                alert(`¡Bien hecho ${nombre}!`);

                let pregunta2 = prompt('¿Quién de los siguientes no juega en la NBA? \n 1. LeBron James \n 2. Jimmy Butler \n 3. Lionel Messi').toLocaleLowerCase();
                if (pregunta2 !== 'lionel messi' && pregunta2 !== '3') {
                    alert(`Vuelve a intentarlo, ${nombre}`);
                } else {
                    alert(`¡Bien hecho ${nombre}!`);

                    let pregunta3 = prompt('¿Cuántos elementos contiene la tabla periódica? \n 1. 118 \n 2. 114 \n 3. 120');
                    if (pregunta3 !== '118' && pregunta3 !=='1') {
                        alert(`Vuelve a intentarlo ${nombre}`);
                    } else {
                        alert(`¡Bien hecho ${nombre}!`);

                        let pregunta4 = prompt('¿Cuál de las siguientes películas no es de Tarantino? \n 1. Pulp Fiction \n 2. Inglourious Bastards \n 3. Taxi Driver').toLocaleLowerCase();
                        if (pregunta4 !== 'taxi driver' && pregunta4 !== '3') {
                            alert(`Vuelve a intentarlo ${nombre}`);
                        } else {
                            alert(`¡Felicidades ${nombre}, has completado todas las preguntas del quiz!`);
                        }
                    }
                }
            }
        }
    } while (mensaje !== 'SALIR');

    alert(`Adiós ${nombre}`);

} while (true); 