let menuVisible = false;
// Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    // Oculta el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades //

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("css");
        habilidades[2].classList.add("html");
        habilidades[3].classList.add("react");
        habilidades[4].classList.add("node");
        habilidades[5].classList.add("communication");
        habilidades[6].classList.add("teamwork");
        habilidades[7].classList.add("creativity");
        habilidades[8].classList.add("focus");
        habilidades[9].classList.add("project");
    }

}

// Detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}


// Codigo para descargar pdf
document.querySelector("button").addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "/pdf/cvricardo23ingles.pdf";
    link.setAttribute("download", "document.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();
});

