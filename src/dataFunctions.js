//attack: 8, defense: 4, magic: 3, difficulty: 4 //
//Asumir que parámetro data es un tipo array
export const filtrarRol = (data, rol) => {
  const dataFiltrada = data.filter((lol)=>lol.tags.includes(rol)
  );
  return dataFiltrada

}


export const filtrarDificultad =(data, dificultad) => {
  let dataFiltrada = []
  if (dificultad === 'baja'){
    dataFiltrada = data.filter((lol) => lol.info.difficulty>=0 && lol.info.difficulty<=3)
  } else if (dificultad === 'media'){
    dataFiltrada = data.filter((lol) => lol.info.difficulty>=4 && lol.info.difficulty<=6)
  } else if ( dificultad === 'alta'){
    dataFiltrada = data.filter((lol) => lol.info.difficulty>=7 && lol.info.difficulty<=10)
  } else {
    dataFiltrada = data
  }
  return dataFiltrada
}

export const buscarPorNombre = (data, campeones) => {
  const withoutSpaces = campeones.trim().toLowerCase();
  const dataFiltrada = data.filter((lol) => {
    const  campeon = lol.name.toLowerCase()
    return campeon.startsWith(withoutSpaces)
  })
  return dataFiltrada
};

export function abcOrder(data, order) {
  const orderArray = data.slice().sort((a, b) => {
    const nameA = a.name;
    const nameB = b.name;
    if (nameA < nameB) {
      return -1;
    }
    else {
      return 1;
    }
  })
  if (order === 'asc') {
    return orderArray
  } else {
    const inverso = orderArray.reverse();
    return inverso
  }
}
