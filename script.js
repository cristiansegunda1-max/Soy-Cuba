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

function nuevoEvento() {

  let eventos = [
    {
      titulo: "Campesinos ofrecen refugio",
      descripcion: "Un grupo campesino quiere ayudarte.",
      opciones: [
        {
          texto: "Aceptar ayuda",
          efecto: () => {
            game.apoyoPopular += 5;
            game.recursos += 5;
          }
        },
        {
          texto: "Desconfiar",
          efecto: () => {
            game.moral -= 5;
          }
        }
      ]
    }
  ];

  let evento = eventos[Math.floor(Math.random() * eventos.length)];

  document.getElementById("tituloEvento").textContent = evento.titulo;
  document.getElementById("descripcionEvento").textContent = evento.descripcion;

  let opcionesDiv = document.getElementById("opciones");
  opcionesDiv.innerHTML = "";

  evento.opciones.forEach(op => {
    let btn = document.createElement("button");
    btn.textContent = op.texto;
    btn.onclick = () => {
      op.efecto();
      game.turno++;
      actualizarUI();
      nuevoEvento();
    };
    opcionesDiv.appendChild(btn);
  });
}

actualizarUI();
nuevoEvento();
