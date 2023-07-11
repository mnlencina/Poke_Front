import axios from 'axios';
import { ADD_POKEMON_DETAIL, FILTER_DB, FILTER_TYPE, GET_ALLPOKEMON, GET_ALL_NAMES, GET_POKEMON_NAME, GET_POKEMON_TYPES, ORDER_ATAQUE, ORDER_NAME, POST_POKEMON, RESET_DETAIL } from '../actionsType';
const urlDB = 'https://pokeback-production-1b7c.up.railway.app/'

export function addAllPokemon(){
  const endpoint = `${urlDB}pokemon`  //'http://localhost:3001/pokemon'
  return async function (dispatch){
    let {data} = await axios(endpoint)
    dispatch({
      type:GET_ALLPOKEMON,
      payload: data
    })
  }
}

export function addAllNames(){
  const endpoint = `${urlDB}pokemon/allNames`  //'http://localhost:3001/pokemon/allNames'
  return async function (dispatch){
    let {data} = await axios(endpoint)
    
    dispatch({
      type:GET_ALL_NAMES,
      payload: data
    })
  }
}

export function addAllTypes(){
  const endpoint = `${urlDB}tipo`  //'http://localhost:3001/tipo'
  return async function (dispatch){
    let {data} = await axios(endpoint)
    
    dispatch({
      type:GET_POKEMON_TYPES,
      payload: data
    })
  }
}

export function postPokemon(newPoke){
  const endpoint = `${urlDB}pokemon`   //'http://localhost:3001/pokemon'
  return async function (dispatch){
    try {
      const createPok = await axios.post(endpoint, newPoke);
      dispatch({
        type:POST_POKEMON,
        payload: createPok
      })          
    } catch (error) {
      alert ('Verifique si el Pokemon ya Existe')
    }
  }   
};

export function addPokemon(names){
  const endpoint = `${urlDB}pokemon?name=`   //`http://localhost:3001/pokemon?name=`
  return async (dispatch) => {
    try {
      const allpok = await Promise.all(names.map(name => axios.get(`${endpoint}${name}`)))      
      const filtered = allpok.map(pok => pok.data)
      if(filtered.length === 0) alert ('No hay Coincidencias en la Busqueda')
        return dispatch({
          type: GET_POKEMON_NAME,
          payload: filtered
        })      
    } catch (error) {
      alert ('Pokemon NOT FOUND!!!')
    }
  }
}

export function addPokDetail(id){
  const endpoint = `${urlDB}pokemon/${id}`     //'http://localhost:3001/pokemon/'+id;
  return async (dispatch) => {
    try {
      const {data} = await axios.get(endpoint)
        return dispatch({
          type: ADD_POKEMON_DETAIL,
          payload: data
        })      
    } catch (error) {
      console.log(error.message);
    }
  }
}

export function orderNamePok(payload) {
  return {
    type: ORDER_NAME,
    payload
  };
};

export function orderAtackPok(payload){
  return{
    type: ORDER_ATAQUE,
    payload
  }
}

export function filterTypePok(payload){
  return{
    type: FILTER_TYPE,
    payload
  }
}

export function filterDB(payload){
  return{
    type: FILTER_DB,
    payload
  }
}

export function resetDetail(payload){
  return{
    type: RESET_DETAIL,
    payload
  }
}
