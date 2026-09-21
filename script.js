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

const abrirCrearRecuerdo =
    document.getElementById("abrirCrearRecuerdo");

const modalCrearRecuerdo =
    document.getElementById("modalCrearRecuerdo");

const cerrarCrearRecuerdo =
    document.getElementById("cerrarCrearRecuerdo");

const cancelarCrearRecuerdo =
    document.getElementById("cancelarCrearRecuerdo");

const formNuevoRecuerdo =
    document.getElementById("formNuevoRecuerdo");

const fotoNuevoRecuerdo =
    document.getElementById("fotoNuevoRecuerdo");

const previewNuevoRecuerdo =
    document.getElementById("previewNuevoRecuerdo");

const tituloNuevoRecuerdo =
    document.getElementById("tituloNuevoRecuerdo");

const fechaNuevoRecuerdo =
    document.getElementById("fechaNuevoRecuerdo");

const descripcionNuevoRecuerdo =
    document.getElementById("descripcionNuevoRecuerdo");

const guardarNuevoRecuerdo =
    document.getElementById("guardarNuevoRecuerdo");


const recuerdos = [

    {
        titulo: "Uno de mis momentos favoritos de toda la vida 😭",
        fecha: "14-02-2026",
        imagen: "imagenes/recuerdo1.jpg",
        descripcion: "Recuerdo lo bien que comimos ese día jaja, todos los días contigo se sienten San Valentín."
    },

    {
        titulo: "Una obra de terror, que no dio terror 🍃",
        fecha: "01-03-2026",
        imagen: "imagenes/recuerdo2.jpg",
        descripcion: "Hay días que parecen normales hasta que tiempo después se convierten en recuerdos."
    },

    {
        titulo: "Nosotros en el rancho 🤠",
        fecha: "04-04-2026",
        imagen: "imagenes/recuerdo3.jpg",
        descripcion: "Espero volver a tener un viaje juntos, pero solo nosotros dos jaja."
    },

    {
        titulo: "Partido de basketball ⛹️‍♂️",
        fecha: "14-05-2026",
        imagen: "imagenes/recuerdo4.jpg",
        descripcion: "Quiero que se repita estoooo, estuvo increíble!."
    },

    {
        titulo: "Boda de Boti 💒",
        fecha: "06-06-2026",
        imagen: "imagenes/recuerdo5.jpg",
        descripcion: "Todos los días contigo estan super divertidos oye."
    },

    {
        titulo: "Primera vez en el antro wuuuuu 🥳",
        fecha: "27-06-2026",
        imagen: "imagenes/recuerdo6.jpg",
        descripcion: "Que no pare la fiestaaaa, Don´t stop the partyyyyy 😆."
    }

];

/* =====================================================
   RECUERDOS CREADOS POR EL USUARIO
===================================================== */

const CLAVE_RECUERDOS_USUARIO =
    "amarillaRecuerdosUsuario";


function cargarRecuerdosUsuario() {

    try {

        const guardados =
            JSON.parse(
                localStorage.getItem(
                    CLAVE_RECUERDOS_USUARIO
                )
            ) || [];


        if (Array.isArray(guardados)) {

            guardados.forEach(function (recuerdo) {

                recuerdos.push(recuerdo);

            });

        }

    } catch (error) {

        console.error(
            "No se pudieron cargar los recuerdos guardados:",
            error
        );

    }

}


function guardarRecuerdosUsuario() {

    const recuerdosUsuario =
        recuerdos.filter(function (recuerdo) {

            return recuerdo.creadoPorUsuario === true;

        });


    try {

        localStorage.setItem(
            CLAVE_RECUERDOS_USUARIO,
            JSON.stringify(recuerdosUsuario)
        );

        return true;

    } catch (error) {

        console.error(
            "No se pudo guardar el recuerdo:",
            error
        );

        return false;

    }

}


cargarRecuerdosUsuario();
const modalRecuerdo =
    document.getElementById("modalRecuerdo");

const imagenModalRecuerdo =
    document.getElementById("imagenModalRecuerdo");

const cerrarModalRecuerdo =
    document.getElementById("cerrarModalRecuerdo");


function abrirRecuerdo(recuerdo) {

    imagenModalRecuerdo.src =
        recuerdo.imagen;

    imagenModalRecuerdo.alt =
        recuerdo.titulo;

    modalRecuerdo.classList.remove("oculto");

}


function cerrarRecuerdo() {

    modalRecuerdo.classList.add("oculto");

    imagenModalRecuerdo.src = "";

}

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
        
        const imagen =
            tarjeta.querySelector(".foto-recuerdo");


        imagen.addEventListener("click", function () {

            abrirRecuerdo(recuerdo);

        });

        listaRecuerdos.appendChild(tarjeta);

    });

}

mostrarRecuerdos();

function abrirFormularioRecuerdo() {

    modalCrearRecuerdo.classList.remove("oculto");

    setTimeout(function () {

        tituloNuevoRecuerdo.focus();

    }, 100);

}


function cerrarFormularioRecuerdo() {

    modalCrearRecuerdo.classList.add("oculto");

    formNuevoRecuerdo.reset();

    previewNuevoRecuerdo.src = "";

    previewNuevoRecuerdo.classList.add("oculto");

}

cerrarModalRecuerdo.addEventListener("click", function () {

    cerrarRecuerdo();

});


modalRecuerdo.addEventListener("click", function (evento) {

    if (evento.target === modalRecuerdo) {

        cerrarRecuerdo();

    }

});


document.addEventListener("keydown", function (evento) {

    if (
        evento.key === "Escape" &&
        !modalRecuerdo.classList.contains("oculto")
    ) {

        cerrarRecuerdo();

    }

});

fotoNuevoRecuerdo.addEventListener(
    "change",
    function () {

        const archivo =
            fotoNuevoRecuerdo.files[0];


        if (!archivo) {

            previewNuevoRecuerdo.src = "";

            previewNuevoRecuerdo.classList.add(
                "oculto"
            );

            return;

        }


        const lector =
            new FileReader();


        lector.onload = function (evento) {

            previewNuevoRecuerdo.src =
                evento.target.result;

            previewNuevoRecuerdo.classList.remove(
                "oculto"
            );

        };


        lector.readAsDataURL(archivo);

    }
);

function comprimirImagen(
    archivo,
    tamañoMaximo = 900,
    calidad = 0.76
) {

    return new Promise(function (
        resolve,
        reject
    ) {

        const lector =
            new FileReader();


        lector.onload = function (evento) {

            const imagen =
                new Image();


            imagen.onload = function () {

                let ancho =
                    imagen.width;

                let alto =
                    imagen.height;


                const ladoMayor =
                    Math.max(
                        ancho,
                        alto
                    );


                if (
                    ladoMayor >
                    tamañoMaximo
                ) {

                    const escala =
                        tamañoMaximo /
                        ladoMayor;

                    ancho =
                        Math.round(
                            ancho *
                            escala
                        );

                    alto =
                        Math.round(
                            alto *
                            escala
                        );

                }


                const canvas =
                    document.createElement(
                        "canvas"
                    );


                canvas.width =
                    ancho;

                canvas.height =
                    alto;


                const contexto =
                    canvas.getContext("2d");


                contexto.drawImage(
                    imagen,
                    0,
                    0,
                    ancho,
                    alto
                );


                const imagenComprimida =
                    canvas.toDataURL(
                        "image/jpeg",
                        calidad
                    );


                resolve(
                    imagenComprimida
                );

            };


            imagen.onerror =
                reject;


            imagen.src =
                evento.target.result;

        };


        lector.onerror =
            reject;


        lector.readAsDataURL(
            archivo
        );

    });

}

function formatearFechaRecuerdo(
    valorFecha
) {

    const partes =
        valorFecha
            .split("-")
            .map(Number);


    const fecha =
        new Date(
            partes[0],
            partes[1] - 1,
            partes[2]
        );


    return fecha.toLocaleDateString(
        "es-MX",
        {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    );

}

formNuevoRecuerdo.addEventListener(
    "submit",
    async function (evento) {

        evento.preventDefault();


        const archivo =
            fotoNuevoRecuerdo.files[0];


        if (!archivo) {

            return;

        }


        guardarNuevoRecuerdo.disabled =
            true;

        guardarNuevoRecuerdo.textContent =
            "Guardando...";


        try {

            const imagenComprimida =
                await comprimirImagen(
                    archivo
                );


            const nuevoRecuerdo = {

                titulo:
                    tituloNuevoRecuerdo
                        .value
                        .trim(),

                fecha:
                    formatearFechaRecuerdo(
                        fechaNuevoRecuerdo.value
                    ),

                imagen:
                    imagenComprimida,

                descripcion:
                    descripcionNuevoRecuerdo
                        .value
                        .trim(),

                creadoPorUsuario:
                    true

            };


            recuerdos.push(
                nuevoRecuerdo
            );


            const guardadoCorrecto =
                guardarRecuerdosUsuario();


            if (!guardadoCorrecto) {

                recuerdos.pop();

                alert(
                    "No se pudo guardar el recuerdo. Puede que el almacenamiento de la página esté lleno."
                );

                return;

            }


            mostrarRecuerdos();


            /*
             Al aumentar recuerdos.length,
             también aparecerá una flor nueva.
            */
            actualizarJardin();


            cerrarFormularioRecuerdo();


        } catch (error) {

            console.error(
                error
            );

            alert(
                "No se pudo procesar la fotografía."
            );

        } finally {

            guardarNuevoRecuerdo.disabled =
                false;

            guardarNuevoRecuerdo.textContent =
                "Guardar recuerdo";

        }

    }
);

abrirCrearRecuerdo.addEventListener(
    "click",
    abrirFormularioRecuerdo
);


cerrarCrearRecuerdo.addEventListener(
    "click",
    cerrarFormularioRecuerdo
);


cancelarCrearRecuerdo.addEventListener(
    "click",
    cerrarFormularioRecuerdo
);


modalCrearRecuerdo.addEventListener(
    "click",
    function (evento) {

        if (
            evento.target ===
            modalCrearRecuerdo
        ) {

            cerrarFormularioRecuerdo();

        }

    }
);


document.addEventListener(
    "keydown",
    function (evento) {

        if (
            evento.key === "Escape" &&
            !modalCrearRecuerdo
                .classList
                .contains("oculto")
        ) {

            cerrarFormularioRecuerdo();

        }

    }
);

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

const escenaCartaAbierta =
    document.getElementById("escenaCartaAbierta");


const cartas = [

    {
        titulo: "Para cuando estés cansada",

        subtitulo: "Owwwww mi bebé esta cansada😭❤️.",

        texto: `
            No tienes que poder con todo todos los días bro, a veces solo hay que tomarte un respiro amor, auque digas lo que siempre dices (descansar de que bro jaja), te amo muchisimo corazón recuerda siempre priorizar tu salud y eso incluye tomar breaks de vez en cuando oye, me gusta imaginarme a tu lado mientras descansas, abrazarte por la espalda y que descanses en mis brazos, son los momentos más tranquilos de mi vida, espero que tu sientas la misma tranquilidad.
            Recuerda siempre priorizar tu salud mi niña hermosa❤️😘.
        `
    },


    {
        titulo: "Para cuando estés triste",

        subtitulo: "Por si hoy no fue un buen día❤️🥺.",

        texto: `
            No sé exactamente qué estará pasando cuando leas esto, pero lo más seguro es que no estés triste por qué la leíste antes de tiempo jajaja, pero solo quiero que sepas que en el momento que me permitiste ser tu novio no estás sola amor, me gusta pensar que te metas a leer esta carta porque buscas tener tu espacio pero al mismo tiempo quieres recordar lo mucho que te amo, quiero que sepas que a pesar de todo yo siempre estaré para ti, así como también si necesitas espacio para pasar el malo rato y se te olvide, yo te esperaré lo que sea necesario.
            Solo echale ganas bro jaja, ntc amor está bien estar mal oye, yo siempre estaré para levantarte o para acostarme un ratito contigo❤️
        `
    },


    {
        titulo: "Para cuando dudes de ti",

        subtitulo: "Quiero que recuerdes algo😡❤️.",

        texto: `
            Aquí si me disculpas pero te voy a regañar canijilla, como alguien tan inteligente, creativa, super social, super cool, con la personalidad más bonita y los sentimientos más bonito de todo el mundo va dudar de si misma oye, no seas tan dura contigo misma amor, cuando algo te abrume hablemos las cosas oye, tal vez no sean tan grandes como aparentan.
            Recuerda que somos tan diminutos en el espacio y tiempo como para preocuparnos por cosas más pequeñas🦧.
        `
    },


    {
        titulo: "Para cuando me extrañes",

        subtitulo: "Estoy un poquito más cerca de lo que parece😁❤️.",

        texto: `
            Si le picaste a esta carta es porque hay dos razones: eres una chismosilla jaja o realmente me extrañas owwwwwwwww, yo siempre estoy a tu lado mi niña, la mayor parte del tiempo no será de manera presencial pero ten por seguro que estoy contigo en cada pensamiento y sentimiento, cuando me extrañes y no podamos hablar, solo recuerda que yo tmb lo estoy haciendo.
            Me gusta pensar que estamos conectados por nuestros pensamientos😌❤️
        `
    },


    {
        titulo: "Para cuando quieras recordar cuánto te quiero",

        subtitulo: "Esta puedes abrirla todas las veces que quieras, las demás tmb en realidad jaja.",

        texto: `
            Te quiero, Te adoro, Te amo, Me fascinas, Te quiamodoro jaja, No se realmente si existan palabras para describan lo mucho que me gustas y la verdad no soy muy bueno con las palabras y menos con la redacción de una carta jaja, pero me gustas tanto que hacerlo no me cuesta (no digo que soy bueno jajaja) pero estando contigo las palabras me salen solas, el hecho de amarte me nace cada instante , cada momento; Es injusto hacerte estas cartas y que no estés a mi lado para poder besarte y abrazarte jaja, siento que dandote toda mi vida no basta, así como las palabras para describirte amor, pero voy a intentarlo, eres la persona más graciosa, más carismatica, siento que haces hablar hasta los mudos jaja, me gusta tu sonrisa y ni se diga tu risa, es la más contagiosa del condado 🤠, tus ojitos que son ventanas a tu alma porque son lo más bello que he visto en toda mi vida, esa nariz que me encanta besar y tocarla para molestar jaja, tus cachetes owwwwwwwwwwwwwwww, es que te amooo muchoooooo.
            Tengo muchisimas más cosas que decirte, permirteme estar a tu lado toda la vida para poder decirtelas ❤️❤️❤️❤️.
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


    mostrarPantalla(
        pantallaCartaEspecial
    );


    /*
        Reinicia la animación cada vez
        que se abre una carta.
    */

    escenaCartaAbierta.classList.remove(
        "animar-carta"
    );


    void escenaCartaAbierta.offsetWidth;


    escenaCartaAbierta.classList.add(
        "animar-carta"
    );

}

regresarCartas.addEventListener("click", function () {

    escenaCartaAbierta.classList.remove(
        "animar-carta"
    );

    mostrarPantalla(
        pantallaPenseEnTi
    );

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