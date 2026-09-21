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
    
const pantallaRepisa =
    document.getElementById("pantallaRepisa");


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

const botonAbrirRepisa =
    document.getElementById("abrirRepisa");

const botonRegresarRepisa =
    document.getElementById("regresarRepisa");
    
const contenedorObjetosRepisa =
    document.getElementById("objetosRepisa");

const textoMovimientosRepisa =
    document.getElementById("movimientosRepisa");

const textoMejorRepisa =
    document.getElementById("mejorRepisa");

const textoMensajeRepisa =
    document.getElementById("mensajeRepisa");

const botonReiniciarRepisa =
    document.getElementById("reiniciarRepisa");

const objetosJuegoRepisa =
    document.querySelectorAll(".objeto-repisa");

const espaciosJuegoRepisa =
    document.querySelectorAll(".espacio-repisa");

let objetoSeleccionadoRepisa = null;
let movimientosJuegoRepisa = 0;
let objetosColocadosRepisa = 0;

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

botonAbrirRepisa.addEventListener("click", function () {

    mostrarPantalla(pantallaRepisa);

    iniciarJuegoRepisa();

});

botonRegresarRepisa.addEventListener("click", function () {

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

botonRegresarRepisa.addEventListener("click", function () {

    mostrarPantalla(pantallaRatito);

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
// -------------------------
// CARTAS - PENSÉ EN TI
// -------------------------

const pantallaCartaEspecial =
    document.getElementById("pantallaCartaEspecial");

const contenedorCartas =
    document.getElementById("contenedorCartas");

const tituloCartaEspecial =
    document.getElementById("tituloCartaEspecial");

const textoCartaEspecial =
    document.getElementById("textoCartaEspecial");

const regresarCartas =
    document.getElementById("regresarCartas");


const cartas = [

    {
        titulo: "Para cuando estés cansada",

        subtitulo: "Puedes descansar aquí un momento.",

        texto: `
            No tienes que poder con todo todos los días.

            Hay días para avanzar muchísimo y hay otros en los que simplemente
            levantarte y continuar ya es suficiente.

            Espero que hoy puedas darte un pequeño descanso.

            No importa cuánto hayas hecho hoy, sigo estando orgulloso de ti.

            Descansa un ratito. Mañana continuamos.
        `
    },


    {
        titulo: "Para cuando estés triste",

        subtitulo: "Por si hoy no fue un buen día.",

        texto: `
            No sé exactamente qué estará pasando cuando leas esto.

            Tal vez tuviste un día difícil, algo salió mal o simplemente
            hoy no te sientes bien.

            No quiero decirte que tienes que estar feliz.

            Solamente quiero recordarte que no tienes que pasar por todo sola.

            Estoy aquí.

            Incluso en los días que no son bonitos.
        `
    },


    {
        titulo: "Para cuando dudes de ti",

        subtitulo: "Quiero que recuerdes algo.",

        texto: `
            A veces somos muchísimo más duros con nosotros mismos
            de lo que seríamos con cualquier otra persona.

            Así que si hoy estás dudando de ti, quiero prestarte por un
            momento la forma en la que yo te veo.

            Veo todo lo que has aprendido.

            Todo lo que has superado.

            Todo lo que sigues intentando incluso cuando las cosas cuestan.

            Tal vez todavía no estés donde quieres estar.

            Pero has avanzado mucho más de lo que a veces puedes ver.
        `
    },


    {
        titulo: "Para cuando me extrañes",

        subtitulo: "Estoy un poquito más cerca de lo que parece.",

        texto: `
            Si abriste esta carta porque me extrañas,
            entonces probablemente yo también quisiera estar contigo ahora.

            Por eso hice este pequeño lugar.

            Para que incluso cuando no estemos juntos puedas encontrar
            algo mío esperándote aquí.

            Y mientras lees esto, imagina que te estoy dando
            uno de esos abrazos que duran un poquito más de lo normal.
        `
    },


    {
        titulo: "Para cuando quieras recordar cuánto te quiero",

        subtitulo: "Esta puedes abrirla todas las veces que quieras.",

        texto: `
            Te quiero en los días especiales.

            Pero también te quiero en los días normales.

            Cuando estamos haciendo algo divertido y cuando simplemente
            estamos juntos sin hacer nada.

            Me gusta conocerte un poquito más con cada día que pasa.

            Y precisamente por eso existe Amarilla.

            Porque quería hacerte algo que pudiera seguir creciendo
            junto con nosotros.

            Esta es solamente la primera flor.
        `
    }

];

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

// =====================================================
// JUEGO: ACOMODA LA REPISA
// =====================================================
objetosJuegoRepisa.forEach(function (objeto) {

    objeto.addEventListener("click", function () {

        if (objeto.classList.contains("colocado")) {
            return;
        }

        objetosJuegoRepisa.forEach(function (otroObjeto) {

            otroObjeto.classList.remove("seleccionado");

        });

        objetoSeleccionadoRepisa = objeto;

        objeto.classList.add("seleccionado");

        textoMensajeRepisa.textContent =
            "Ahora elige dónde colocarlo.";

    });

});

espaciosJuegoRepisa.forEach(function (espacio) {

    espacio.addEventListener("click", function () {

        if (objetoSeleccionadoRepisa === null) {

            textoMensajeRepisa.textContent =
                "Primero selecciona un objeto.";

            return;

        }


        if (espacio.classList.contains("ocupado")) {

            textoMensajeRepisa.textContent =
                "Ese lugar ya está ocupado.";

            return;

        }


        movimientosJuegoRepisa++;

        actualizarMovimientosRepisa();


        const objetoCorrecto =
            espacio.dataset.correcto;

        const objetoElegido =
            objetoSeleccionadoRepisa.dataset.objeto;


        if (objetoCorrecto === objetoElegido) {

            colocarObjetoRepisa(espacio);

        } else {

            marcarErrorRepisa(espacio);

        }

    });

});

function colocarObjetoRepisa(espacio) {

    objetoSeleccionadoRepisa.classList.remove("seleccionado");

    objetoSeleccionadoRepisa.classList.add("colocado");

    objetoSeleccionadoRepisa.disabled = true;


    espacio.appendChild(objetoSeleccionadoRepisa);

    espacio.classList.add("ocupado");


    objetoSeleccionadoRepisa = null;

    objetosColocadosRepisa++;


    if (objetosColocadosRepisa === 4) {

        terminarJuegoRepisa();

    } else {

        textoMensajeRepisa.textContent =
            "Ese era su lugar. Sigue acomodando.";

    }

}

function marcarErrorRepisa(espacio) {

    espacio.classList.remove("error");

    void espacio.offsetWidth;

    espacio.classList.add("error");


    textoMensajeRepisa.textContent =
        "Creo que ese objeto va en otro lugar.";

}

function actualizarMovimientosRepisa() {

    textoMovimientosRepisa.textContent =
        "Movimientos: " + movimientosJuegoRepisa;

}

function terminarJuegoRepisa() {

    textoMensajeRepisa.textContent =
        "Listo. Nuestro rinconcito volvió a quedar bonito.";

    guardarMejorRepisa();

}

function guardarMejorRepisa() {

    const mejorGuardado =
        localStorage.getItem("amarillaMejorRepisa");


    if (
        mejorGuardado === null ||
        movimientosJuegoRepisa < Number(mejorGuardado)
    ) {

        localStorage.setItem(
            "amarillaMejorRepisa",
            movimientosJuegoRepisa
        );

    }


    mostrarMejorRepisa();

}

function mostrarMejorRepisa() {

    const mejorGuardado =
        localStorage.getItem("amarillaMejorRepisa");


    if (mejorGuardado === null) {

        textoMejorRepisa.textContent =
            "Mejor: --";

    } else {

        textoMejorRepisa.textContent =
            "Mejor: " + mejorGuardado;

    }

}

function iniciarJuegoRepisa() {

    objetoSeleccionadoRepisa = null;

    movimientosJuegoRepisa = 0;

    objetosColocadosRepisa = 0;


    textoMensajeRepisa.textContent = "";

    actualizarMovimientosRepisa();

    mostrarMejorRepisa();


    espaciosJuegoRepisa.forEach(function (espacio) {

        espacio.classList.remove(
            "ocupado",
            "error"
        );

    });


    objetosJuegoRepisa.forEach(function (objeto) {

        objeto.classList.remove(
            "seleccionado",
            "colocado"
        );

        objeto.disabled = false;

        contenedorObjetosRepisa.appendChild(objeto);

    });


    mezclarObjetosRepisa();

}

function mezclarObjetosRepisa() {

    const objetos =
        Array.from(
            contenedorObjetosRepisa.querySelectorAll(".objeto-repisa")
        );


    for (let i = objetos.length - 1; i > 0; i--) {

        const posicionAleatoria =
            Math.floor(
                Math.random() * (i + 1)
            );


        const temporal =
            objetos[i];

        objetos[i] =
            objetos[posicionAleatoria];

        objetos[posicionAleatoria] =
            temporal;

    }


    objetos.forEach(function (objeto) {

        contenedorObjetosRepisa.appendChild(objeto);

    });

}

botonReiniciarRepisa.addEventListener("click", function () {

    iniciarJuegoRepisa();

});

// Animación del jardín al entrar
function activarAnimacionJardin() {
    const floresJardin = document.querySelectorAll(".jardin-flores > *");

    floresJardin.forEach(function (flor, indice) {
        flor.style.animation = "none";
        flor.offsetHeight;
        flor.style.animation = "emergerFlor 0.9s ease both";
        flor.style.animationDelay = (indice * 0.08) + "s";
    });
}

// si ya tienes el botón del jardín:
botonJardin.addEventListener("click", function () {
    setTimeout(function () {
        activarAnimacionJardin();
    }, 120);
});