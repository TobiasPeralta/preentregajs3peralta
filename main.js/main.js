const divPreguntas = document.getElementById("contenedor");

preguntas.forEach((e, index) => {
    divPreguntas.innerHTML += `
    <div id="pregunta-${index}">
        <div class="pregunta">
            <p class= "dificultad">${e.dificultad}</p>
            <p class="preguntas">${e.pregunta}</p>
            <img class="imagen" src="${e.imagen}" alt="Imagen pregunta">
            <div class="botones">
                <button class="btn" data-correct="true">${e.respuesta}</button>
                <button class="btn" data-correct="false">${e.incorrecta1}</button>
                <button class="btn" data-correct="false">${e.incorrecta2}</button>
                <button class="btn" data-correct="false">${e.incorrecta3}</button>
            </div>
        </div>
    </div>
    `;
});

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        if (this.getAttribute('data-correct') === 'true') {
            this.classList.toggle('click'); // Cambia de clase si es correcto
        } else {
            this.classList.toggle('clickear'); // Cambia de clase si es incorrecto
        }
    });
});



