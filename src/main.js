import dataLol from "./data/lol/lol.js";
import { filtrarRol, filtrarDificultad, buscarPorNombre, abcOrder } from "./dataFunctions.js";
import { renderItems } from "./view.js";

const data = Object.values(dataLol.data)

//Selectores del DOM
const bloqueTarjetas = document.querySelector("#bloqueTarjetas");
const buscarCampeones = document.getElementById("buscarCampeones")
const seleccionRol= document.querySelector("select[data-testid='select-filter']")
const seleccionDificultad = document.querySelector("select[data-testid='select-filter2']")
const seleccionOrdenarNombre = document.querySelector("select[data-testid='select-sort']");
const cleanButton = document.querySelector("#cleanButton")

bloqueTarjetas.appendChild(renderItems(data));

//Eventos

//Barra de búsqueda
buscarCampeones.addEventListener('input', (event)=>{
  const resultado = buscarPorNombre(data, event.target.value)
  bloqueTarjetas.innerHTML = ''
  bloqueTarjetas.appendChild(renderItems(resultado))
})

//Filtrar Rol
seleccionRol.addEventListener('change', (event)=> {
  const resultado = filtrarRol(data, event.target.value)
  bloqueTarjetas.innerHTML = ''
  bloqueTarjetas.appendChild(renderItems(resultado))
})

seleccionDificultad.addEventListener('change', (event) =>{
  const resultado = filtrarDificultad(data, event.target.value)
  bloqueTarjetas.innerHTML = ''
  bloqueTarjetas.appendChild(renderItems(resultado))
})

seleccionOrdenarNombre.addEventListener('change', (event) =>{
  const resultado = abcOrder(data, event.target.value)
  bloqueTarjetas.innerHTML = ''
  bloqueTarjetas.appendChild(renderItems(resultado))
})

cleanButton.addEventListener('click',() =>{
  seleccionDificultad.value = 'todos'
  seleccionRol.value = 'todos'
  seleccionOrdenarNombre.value = 'todos'
  buscarCampeones.value = ''
  bloqueTarjetas.innerHTML = ''
  bloqueTarjetas.appendChild(renderItems(data));
})
