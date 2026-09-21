// -------------------------
// PANTALLAS
// -------------------------

const pantallaInicio =
    document.getElementById("pantallaInicio");

const pantallaCarta =
    document.getElementById("pantallaCarta");

const pantallaApp =
    document.getElementById("pantallaApp");

const pantallaJardin =
    document.getElementById("pantallaJardin");

const pantallaPenseEnTi =
    document.getElementById("pantallaPenseEnTi");

const pantallaRecuerdos =
    document.getElementById("pantallaRecuerdos");

const pantallaRatito =
    document.getElementById("pantallaRatito");


// Todas las pantallas de Amarilla
const pantallas =
    document.querySelectorAll(".pantalla");


// -------------------------
// BOTONES
// -------------------------

const botonEntrar =
    document.getElementById("botonEntrar");

const botonContinuar =
    document.getElementById("botonContinuar");

const regresarInicio =
    document.getElementById("regresarInicio");

const regresarCarta =
    document.getElementById("regresarCarta");

const botonJardin =
    document.getElementById("botonJardin");

const botonPenseEnTi =
    document.getElementById("botonPenseEnTi");

const botonRecuerdos =
    document.getElementById("botonRecuerdos");

const botonRatito =
    document.getElementById("botonRatito");

const regresarJardin =
    document.getElementById("regresarJardin");

const regresarPenseEnTi =
    document.getElementById("regresarPenseEnTi");

const regresarRecuerdos =
    document.getElementById("regresarRecuerdos");

const regresarRatito =
    document.getElementById("regresarRatito");


// -------------------------
// CAMBIAR DE PANTALLA
// -------------------------

function mostrarPantalla(pantalla) {

    // Oculta todas las pantallas
    pantallas.forEach(function (elemento) {

        elemento.classList.add("oculto");

    });


    // Muestra solamente la seleccionada
    pantalla.classList.remove("oculto");


    // La pantalla nueva comienza desde arriba
    pantalla.scrollTop = 0;

}
// -------------------------
// RECUERDOS
// -------------------------

const listaRecuerdos =
    document.getElementById("listaRecuerdos");


const recuerdos = [

    {
        titulo: "Uno de mis momentos favoritos",
        fecha: "Nuestro primer 14 de febrero 💌",
        imagen: "imagenes/recuerdo1.jpg",
        descripcion: "Recuerdo lo bien que comimos ese día jaja, todos los días contigo se sienten San Valentín."
    },

    {
        titulo: "Una obra de terror, que no dio terror 🍃",
        fecha: "Un 1ro de Marzo de 2026",
        imagen: "imagenes/recuerdo2.jpg",
        descripcion: "Hay días que parecen normales hasta que tiempo después se convierten en recuerdos."
    },

    {
        titulo: "Nosotros en el rancho 🤠",
        fecha: "Un 4 de Abril de 2026",
        imagen: "imagenes/recuerdo3.jpg",
        descripcion: "Espero volver a tener un viaje juntos, pero solo nosotros dos jaja."
    }

];
function mostrarRecuerdos() {

    listaRecuerdos.innerHTML = "";


    recuerdos.forEach(function (recuerdo) {

        const tarjeta =
            document.createElement("div");

        tarjeta.classList.add("recuerdo");


        tarjeta.innerHTML = `

            <img
                class="foto-recuerdo"
                src="${recuerdo.imagen}"
                alt="${recuerdo.titulo}"
            >

            <div class="contenido-recuerdo">

                <span class="fecha-recuerdo">
                    ${recuerdo.fecha}
                </span>

                <h3>
                    ${recuerdo.titulo}
                </h3>

                <p>
                    ${recuerdo.descripcion}
                </p>

            </div>

        `;


        listaRecuerdos.appendChild(tarjeta);

    });

}

mostrarRecuerdos();

// -------------------------
// NAVEGACIÓN
// -------------------------

botonEntrar.addEventListener("click", function () {

    mostrarPantalla(pantallaCarta);

});


botonContinuar.addEventListener("click", function () {

    mostrarPantalla(pantallaApp);

});

regresarInicio.addEventListener("click", function () {

    mostrarPantalla(pantallaInicio);

});


regresarCarta.addEventListener("click", function () {

    mostrarPantalla(pantallaCarta);

});

botonJardin.addEventListener("click", function () {

    mostrarPantalla(pantallaJardin);

});


botonPenseEnTi.addEventListener("click", function () {

    mostrarPantalla(pantallaPenseEnTi);

});


botonRecuerdos.addEventListener("click", function () {

    mostrarPantalla(pantallaRecuerdos);

});


botonRatito.addEventListener("click", function () {

    mostrarPantalla(pantallaRatito);

});

regresarJardin.addEventListener("click", function () {

    mostrarPantalla(pantallaApp);

});


regresarPenseEnTi.addEventListener("click", function () {

    mostrarPantalla(pantallaApp);

});


regresarRecuerdos.addEventListener("click", function () {

    mostrarPantalla(pantallaApp);

});


regresarRatito.addEventListener("click", function () {

    mostrarPantalla(pantallaApp);

});



const actividadAleatoria =
    document.getElementById("actividadAleatoria");

const otraActividad =
    document.getElementById("otraActividad");


const actividades = [

    "Escoge una canción que te recuerde a nosotros.",

    "Busca una fotografía nuestra que te guste mucho.",

    "Piensa en tres cosas buenas que hayan pasado hoy.",

    "Tómate cinco minutos para descansar sin hacer absolutamente nada.",

    "Mándame una canción que hayas estado escuchando últimamente.",

    "Dime algo que quieras hacer conmigo algún día.",

    "Elige una película para nuestra próxima noche juntos.",

    "Busca una foto de algo bonito que hayas visto hoy.",

    "Piensa en algún lugar al que te gustaría viajar conmigo.",

    "Cuéntame algo pequeño que haya mejorado tu día."

];


otraActividad.addEventListener("click", function () {

    const posicion =
        Math.floor(Math.random() * actividades.length);

    actividadAleatoria.textContent =
        actividades[posicion];

});

// -------------------------
// JARDÍN
// -------------------------

const jardinFlores =
    document.getElementById("jardinFlores");

const numeroFlores =
    document.getElementById("numeroFlores");


function actualizarJardin() {

    jardinFlores.innerHTML = "";


    recuerdos.forEach(function () {

        const flor =
            document.createElement("div");

        flor.classList.add("flor-simple");

        flor.innerHTML = `
            <div class="flor-cabeza">
                <span class="petalo-simple petalo-arriba"></span>
                <span class="petalo-simple petalo-derecha"></span>
                <span class="petalo-simple petalo-abajo"></span>
                <span class="petalo-simple petalo-izquierda"></span>

                <span class="centro-simple"></span>
            </div>

            <div class="tallo-simple"></div>
        `;


        jardinFlores.appendChild(flor);

    });


    numeroFlores.textContent =
        recuerdos.length;

}


actualizarJardin();

function mostrarCartas() {

    contenedorCartas.innerHTML = "";


    cartas.forEach(function (carta, posicion) {

        const tarjeta =
            document.createElement("button");


        tarjeta.classList.add("tarjeta-carta");


        tarjeta.innerHTML = `

            <span class="sobre-carta">
                Para ti
            </span>

            <span class="titulo-tarjeta-carta">
                ${carta.titulo}
            </span>

            <span class="descripcion-tarjeta-carta">
                ${carta.subtitulo}
            </span>

        `;


        tarjeta.addEventListener("click", function () {

            abrirCarta(posicion);

        });


        contenedorCartas.appendChild(tarjeta);

    });

}


mostrarCartas();

function abrirCarta(posicion) {

    const cartaSeleccionada =
        cartas[posicion];


    tituloCartaEspecial.textContent =
        cartaSeleccionada.titulo;


    textoCartaEspecial.textContent =
        cartaSeleccionada.texto;


    mostrarPantalla(pantallaCartaEspecial);

}

regresarCartas.addEventListener("click", function () {

    mostrarPantalla(pantallaPenseEnTi);

});