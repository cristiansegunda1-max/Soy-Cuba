let game = {
  turno: 1,
  apoyoPopular: 40,
  fuerzaMilitar: 25,
  recursos: 50,
  moral: 50,
  controlTerritorial: 5
};

function actualizarUI() {
  document.getElementById("turno").textContent = game.turno;
  document.getElementById("popular").textContent = game.apoyoPopular;
  document.getElementById("militar").textContent = game.fuerzaMilitar;
  document.getElementById("recursos").textContent = game.recursos;
  document.getElementById("moral").textContent = game.moral;
  document.getElementById("territorio").textContent = game.controlTerritorial;
}

function resolverCombate(tipo) {

  let poderJugador = game.fuerzaMilitar + game.moral;
  let poderEnemigo = 40 + (Math.random() * 20);

  if(tipo === "emboscada"){
    poderJugador += 15;
  }

  if(tipo === "ataque"){
    poderJugador += 5;
    poderEnemigo += 10;
  }

  if(tipo === "sabotaje"){
    poderJugador += 10;
  }

  if(tipo === "retirada"){
    game.moral -= 5;
    return "Retirada sin combate.";
  }

  let resultado = poderJugador > poderEnemigo ? "victoria" : "derrota";

  if(resultado === "victoria"){
    game.controlTerritorial += 3;
    game.moral += 5;
    game.recursos += 5;
  } else {
    game.fuerzaMilitar -= 5;
    game.moral -= 10;
    game.apoyoPopular -= 5;
  }

  return resultado;
}

function nuevoEvento() {

  let evento = {
    titulo: "Convoy militar detectado",
    descripcion: "Un convoy enemigo transporta armas.",
    opciones: [
      {
        texto: "Emboscada rápida",
        tipo: "emboscada"
      },
      {
        texto: "Ataque frontal",
        tipo: "ataque"
      },
      {
        texto: "Sabotaje nocturno",
        tipo: "sabotaje"
      },
      {
        texto: "Retirada estratégica",
        tipo: "retirada"
      }
    ]
  };

  document.getElementById("tituloEvento").textContent = evento.titulo;
  document.getElementById("descripcionEvento").textContent = evento.descripcion;

  let opcionesDiv = document.getElementById("opciones");
  opcionesDiv.innerHTML = "";

  evento.opciones.forEach(op => {
    let btn = document.createElement("button");
    btn.textContent = op.texto;
    btn.onclick = () => {
      let r = resolverCombate(op.tipo);
      alert("Resultado: " + r);
      game.turno++;
      actualizarUI();
    };
    opcionesDiv.appendChild(btn);
  });
}

actualizarUI();
nuevoEvento();