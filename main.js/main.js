let nombre = prompt('Ingrese su nombre');
let edad = parseInt(prompt('Ingrese su edad'));

console.log(`Hola ${nombre}, bienvenido a Mini-Block-Buster, elije las peliculas que desees ver y compralas! (precios en pesos argentinos)`);

const peliculas = [
    { nombre: 'La Tumba de las luciernagas', genero: 'drama', precio: 1000 },
    { nombre: 'Terrifier', genero: 'terror', precio: 1500 },
    { nombre: 'El Ladron de Orquideas', genero: 'drama', precio: 1200 },
    { nombre: 'Star Wars: el imperio contraataca', genero: 'ficcion', precio: 1800 },
    { nombre: 'Smile', genero: 'terror', precio: 800 },
    { nombre: 'John Wick', genero: 'accion', precio: 1600 },
    { nombre: 'Godzilla', genero: 'ficcion', precio: 1300 },
    { nombre: 'El Show de Truman', genero: 'drama', precio: 1700 },
    { nombre: 'Son como niños', genero: 'comedia', precio: 1400 },
    { nombre: 'Hereditary', genero: 'terror', precio: 1500 },
    { nombre: 'Duro de Matar', genero: 'accion', precio: 1900 },
    { nombre: 'Scary movie 3', genero: 'comedia', precio: 1100 },
    { nombre: 'Hellboy', genero: 'ficcion', precio: 2000 },
    { nombre: 'Top Gun: Maverick', genero: 'accion', precio: 1600 },
    { nombre: 'Ted', genero: 'comedia', precio: 1300 },
];

let peliculasSeleccionadas = [];

function filtrarPorGenero(genero) {
    return peliculas.filter(pelicula => pelicula.genero === genero);
}

function mostrarPeliculas(peliculas) {
    peliculas.forEach((pelicula, index) => {
        console.log(`${index + 1}. ${pelicula.nombre} - ${pelicula.genero} - $${pelicula.precio}`);
    });
}

function seleccionarPeliculas() {
    let seguirComprando = true;
    
    while (seguirComprando) {
        let genero = prompt('Ingrese el género de películas que desea ver (drama, terror, ficcion, accion, comedia) o "salir" para terminar la compra:');
        
        if (genero.toLowerCase() === 'salir') {
            seguirComprando = false;
            break;
        }
        
        let peliculasFiltradas = filtrarPorGenero(genero.toLowerCase());
        
        if (peliculasFiltradas.length === 0) {
            console.log('No hay películas disponibles en ese género.');
        } else {
            console.log(`Películas disponibles en el género ${genero}:`);
            mostrarPeliculas(peliculasFiltradas);
            
            let seleccion = parseInt(prompt('Ingrese el número de la película que desea comprar (o 0 para cancelar):'));
            
            if (seleccion > 0 && seleccion <= peliculasFiltradas.length) {
                peliculasSeleccionadas.push(peliculasFiltradas[seleccion - 1]);
                console.log(`Has seleccionado: ${peliculasFiltradas[seleccion - 1].nombre}`);
            } else {
                console.log('Selección inválida.');
            }
        }
    }
}

function calcularTotal() {
    return peliculasSeleccionadas.reduce((total, pelicula) => total + pelicula.precio, 0);
}

seleccionarPeliculas();

let totalAPagar = calcularTotal();
console.log(`Has seleccionado las siguientes películas:`);
peliculasSeleccionadas.forEach(pelicula => {
    console.log(`${pelicula.nombre} - $${pelicula.precio}`);
});
console.log(`Total a pagar: $${totalAPagar}`);
