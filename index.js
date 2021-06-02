fetch(
  "https://api.tmb.cat/v1/ibus/stops/2775?app_id=144cc8a8&app_key=2133465667e9df90ee334b195f9cd5a4"
)
  .then((response) => response.json())
  .then((datos) => mostrado(datos));

const mostrado = (datos) => {
  const elementoTexto = document.querySelector(".jsonMostrar");
  elementoTexto.textContent = `Faltan ${datos.data.ibus[0]["text-ca"]}`;
};
