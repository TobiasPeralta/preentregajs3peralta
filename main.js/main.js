const divPreguntas = document.getElementById("contenedor");

preguntas.forEach((e) => {
    divPreguntas.innerHTML += `
    <div id= "${e.id}">
        <p>${e.dificultad}</p>
        <p>${e.pregunta}</p>
        <img src="${e.imagen}" alt="Imagen relacionada con la pregunta">
    </div>
    `;
});
