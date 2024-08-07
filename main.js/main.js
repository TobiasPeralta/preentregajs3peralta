const divPreguntas = document.getElementById("contenedor");

preguntas.forEach((e) => {
    divPreguntas.innerHTML += `
    <div id= "${e.id}">
        <div class= "pregunta">
            <p>${e.dificultad}</p>
            <p>${e.pregunta}</p>
            <img class="imagen" src="${e.imagen}" alt="Imagen pregunta">
            <div class="botones">
            <button class= "btn" id= "btn1">${e.respuesta}</button>
            <button class= "btn" id= "btn2">${e.incorrecta1}</button>
            <button class= "btn" id= "btn3">${e.incorrecta2}</button>
            <button class= "btn" id= "btn4">${e.incorrecta3}</button>
        </div>
    </div>
    `;
});

document.getElementById('btn1').addEventListener('click', function() {
    this.classList.toggle('click');
});
document.getElementById('btn2').addEventListener('click', function() {
    this.classList.toggle('clickear');
});
document.getElementById('btn3').addEventListener('click', function() {
    this.classList.toggle('clickear');
});
document.getElementById('btn4').addEventListener('click', function() {
    this.classList.toggle('clickear');
});