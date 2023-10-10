//Experiencia
fetch("https://my-json-server.typicode.com/leandrofinten123/Leandro-Finten-entrega01/Experiencias")
.then((respuesta) => {
    console.log(respuesta);
    if(!respuesta.ok) throw new Error(`${respuesta.status}`);
    return respuesta.json();
})
.then((experiencias) => {
    console.log(experiencias);
    const div1 = document.querySelector(".desktop4__1");
    div1.innerHTML = experiencias
    .map((exp) => `
    <div class="desktop4__2">
                    <div class="desktop4__3"><img class="imagenadidas" src="${exp.adidas}" alt="adidas">
                        <div class="desktop4__4"><p> ${exp.titulo}</p>
                        <h3>${exp.Subtitulo}</h3></div>
                    </div>
                    <div class="desktop4__5">
                    <p>${exp.Lorem}</p></div>
                </div>`
      )
    .join("");
})
.catch((error) => {
    console.log("catch", error);
});

//Certificados
fetch("https://my-json-server.typicode.com/leandrofinten123/Leandro-Finten-entrega01/Certificados")
.then((respuesta) => {
    console.log(respuesta);
    if(!respuesta.ok) throw new Error(`${respuesta.status}`);
    return respuesta.json();
})
.then((certificados) => {
    console.log(certificados);
    const div2 = document.querySelector(".desktop2__1");
    div2.innerHTML= certificados
    .map((cert) => `
                <div class="desktop2__2">
                    <img src="${cert.certificado}" alt=demo1>
                <div class="desktop2__3">
                    <h3>${cert.Subtitulo}</h3>
                    <p class="desktop2__4">${cert.titulo}1</p></div>
                </div>          
    `).join("");
});


//Proyectos
const section = document.querySelector(".evento");
const div3 = document.querySelector(".desktop6");
fetch("https://my-json-server.typicode.com/leandrofinten123/Leandro-Finten-entrega01/Proyectos")
.then((respuesta) => {
    console.log(respuesta);
    if(!respuesta.ok) throw new Error(`${respuesta.status}`);
    return respuesta.json();
})
.then((proyectos) => {
    section.addEventListener("click" , (e) => {
        const {
            target: { id} , } = e;
                const botonClick = document.getElementById(id);
                if (botonClick) {
                const botones = document.querySelectorAll('.desktop5 button');
                botones.forEach((boton) => {
                boton.classList.remove('activo');
                 });
                botonClick.classList.add('activo');
                }
    switch (id) {
        case "desktop5__2":
            const proyectosResponsivo = proyectos.filter((proyecto) => 
            proyecto.tipo === "Responsivo");
            mostrarProyectos(proyectosResponsivo);
            break; 
        case "desktop5__3":
            const proyectosJs = proyectos.filter((proyecto) => 
            proyecto.tipo === "JS");
            mostrarProyectos(proyectosJs);
            break;
        case "desktop5__4":
            const proyectosReact = proyectos.filter((proyecto) =>
            proyecto.tipo === "React");
            mostrarProyectos(proyectosReact);
            break;
            }
})
})

function mostrarProyectos(proyectos) {
    if (proyectos.length < 4) {
        imprimirProyectos(proyectos);
        return;
    }
}

function imprimirProyectos(proyectos) {
    div3.innerHTML = proyectos
    .map((pro) => `<section class="desktop6_separador">
    <div class="desktop6__1">
    <img src="${pro.certificado}" alt=demo1>
    <h3 class="desktop6__2">${pro.subtitulo}</h3>
    <h2>${pro.nombre}</h2>
    <p class="desktop6__3">${pro.Lorem}</p>
    <div class="desktop6__4">
    <button class="desktop6__5">Demo</button>
    <button class="desktop6__6">Code</button></div>
    </section>`).join("")
}

fetch("https://my-json-server.typicode.com/leandrofinten123/Leandro-Finten-entrega01/Proyectos2")
.then((respuesta) => {
    console.log(respuesta);
    if(!respuesta.ok) throw new Error(`${respuesta.status}`);
    return respuesta.json();
})
.then((proyectos3) =>{
    div3.innerHTML= proyectos3
    .map((pro2) => `<section class="desktop6_separador">
    <div class="desktop6__1">
    <img src="${pro2.certificado}" alt=demo1>
    <h3 class="desktop6__2">${pro2.subtitulo}</h3>
    <h2>${pro2.nombre}</h2>
    <p class="desktop6__3">${pro2.Lorem}</p>
    <div class="desktop6__4">
    <button class="desktop6__5">Demo</button>
    <button class="desktop6__6">Code</button></div>
    </section>`).join("")
})


//Paginado
const div4= document.querySelector(".paginado")
fetch("https://my-json-server.typicode.com/leandrofinten123/Leandro-Finten-entrega01/Paginado")
.then((respuesta) => {
    console.log(respuesta);
    if(!respuesta.ok) throw new Error(`${respuesta.status}`);
    return respuesta.json();})
.then((proyectos) => {
     section.addEventListener("click" , (e) => {
        const {
             target: { id} , } = e;
                    const botonClick = document.getElementById(id);
                    if (botonClick) {
                    const botones = document.querySelectorAll('.desktop7 button');
                    botones.forEach((boton) => {
                    boton.classList.remove('activo');
                     });
                    botonClick.classList.add('activo');
                    }
        switch (id) {
            case "desktop7__2":
                const proyectosResponsivo = proyectos.filter((proyecto) => 
                proyecto.tipo === "Responsivo");
                mostrarProyectos(proyectosResponsivo);
                break; 
            case "desktop7__3":
                const proyectosJs = proyectos.filter((proyecto) => 
                proyecto.tipo === "JS");
                mostrarProyectos(proyectosJs);
                break;
            case "desktop7__4":
                const proyectosReact = proyectos.filter((proyecto) =>
                proyecto.tipo === "React");
                mostrarProyectos(proyectosReact);
                break;
                }
    })
    })
