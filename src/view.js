export const renderItems = (data) => {
  const ul = document.createElement('ul')  
  let tarjetaString = "";
  for (const lol in data) {
    tarjetaString += `
    <li class="card">
      <div class="front tarjeta">
      <img class="imagenlol" src=${data[lol].img}>
      <p> <br> ${data[lol].name}
      </div> 
      <div class="back tarjeta" >
        <p><br> Rol:<br> ${data[lol].tags}
        <br> Ataque:<br> ${data[lol].info["attack"]}
        <br>Defensa:<br> ${data[lol].info["defense"]} 
        <br>Magia:<br> ${data[lol].info["magic"]} 
        <br>Dificultad:<br> ${data[lol].info["difficulty"]}
      </div>
    </li>`;
  }
  ul.innerHTML = tarjetaString
  return ul;
};