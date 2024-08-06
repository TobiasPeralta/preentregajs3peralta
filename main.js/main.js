function elegirPreguntaAleatoria(){
    elegirPregunta(Math.floor(Math.random()))
}

function elegirPregunta (n) {
    let base_preguntas = readText("base-preguntas.json")
    let interprete_bp = JSON.parse(base_preguntas)
    pregunta = interprete_bp [n]
    select_id("numero").innerHTML = pregunta.numero
    select_id("pregunta").innerHTML = pregunta.pregunta
    select_id("btn1").innerHTML = pregunta.respuesta
    select_id("btn2").innerHTML = pregunta.incorrecta1
    select_id("btn3").innerHTML = pregunta.incorrecta2
    select_id("btn4").innerHTML = pregunta.incorrecta3
}