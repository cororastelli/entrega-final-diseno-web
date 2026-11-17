let contenedor = document.querySelector("#menu-afiches");
let detalles = document.querySelector("#detalles-afiche");

fetch("js/afiches.json")
  .then(respuesta => respuesta.json())
  .then(afiches => {
    afiches.forEach(afiche => {
      contenedor.innerHTML += `
        <button class="btn btn-secondary border border-secondary text-start"
                onclick="mostrarAfiche('${afiche.titulo}')">
          ${afiche.titulo}
        </button>
      `;
    });

    mostrarAfiche(afiches[0].titulo);
  });

function mostrarAfiche(titulo) {
  fetch("js/afiches.json")
    .then(respuesta => respuesta.json())
    .then(afiches => {
      const afiche = afiches.find(afiche => afiche.titulo === titulo);

      detalles.innerHTML = `
        <div class="card-body p-4 p-md-5">
          <p class="text-uppercase fw-bold mb-2">${afiche.categoria}</p>
          <h2 class="mb-4 card-title">${afiche.titulo}</h2>
          <img
            src="${afiche.imagen}"
            class="card-img-top img-fluid mb-4"
            alt="${afiche.titulo}"
          >
          <p class="card-text">${afiche.descripcion}</p>
        </div>
      `;
    });
}
