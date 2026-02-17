function nuevaPartida() {
    document.getElementById("menuPrincipal").style.display = "none";
    iniciarCinematica();
}

function continuar() {
    alert("No hay partida guardada todavía.");
}

function ajustes() {
    alert("Ajustes próximamente.");
}

function iniciarCinematica() {
    let cine = document.getElementById("cinematica");
    cine.style.display = "block";
    cine.style.background = "black";
    cine.style.color = "white";
    cine.style.height = "100vh";
    cine.style.display = "flex";
    cine.style.justifyContent = "center";
    cine.style.alignItems = "center";
    cine.innerHTML = "<h2>Comienza la historia...</h2>";
}