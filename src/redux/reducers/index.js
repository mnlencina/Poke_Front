import { 
  ADD_POKEMON_DETAIL,
  FILTER_DB,
  FILTER_TYPE,
  GET_ALLPOKEMON,
  GET_ALL_NAMES,
  GET_POKEMON_NAME,
  GET_POKEMON_TYPES,
  ORDER_ATAQUE,
  ORDER_NAME,
  POST_POKEMON,
  RESET_DETAIL,
  } from '../actionsType/index';

const initialState = {
pokemon:[],
allPokemon:[],
filterTypes:[],
types:[],
detail:{},
allNames:[]
};


export default function rootReducer(state = initialState, {type,payload}) {
  switch (type) {
    case GET_ALLPOKEMON:
      return {
        ...state,
        pokemon: payload,
        allPokemon: payload,
        filterTypes: payload
        
      }
    case GET_ALL_NAMES:
      return {
        ...state,
        allNames: payload
      } 
    case GET_POKEMON_NAME:
      return {
        ...state,
        pokemon: payload.length === 0 ? [...state.pokemon] : payload
      }
    case ADD_POKEMON_DETAIL:
      return {
        ...state,
        detail: payload,
      }
    case RESET_DETAIL:
      return {
        ...state,
        detail: {},
      }
    
      case GET_POKEMON_TYPES:
      return {
        ...state,
        types: payload,
      }
    case ORDER_NAME:
      let orderName = [...state.pokemon].sort((a, b) => {
        if (a.name< b.name) return payload === 'asc' ? -1 : 1;
        if (a.name> b.name) return payload === 'asc' ? 1 : -1;
        return 0;
      });
      return {
        ...state,
        pokemon: payload === 'name' ? state.allPokemon : orderName,
      };
    case ORDER_ATAQUE:      
      const orderAtaque = [...state.pokemon].sort((a,b)=> payload === 'mayorAtaque' ? b.stroke-a.stroke : a.stroke-b.stroke );
      return {
        ...state,
        pokemon: payload === 'ataque' ? state.allPokemon : orderAtaque,
      };
    case FILTER_TYPE:
      const filterType = payload === "todos" 
        ? [...state.allPokemon]
        : [...state.filterTypes].filter((p)=> p.types.includes(payload))
      return {
        ...state,
        pokemon: filterType,
        filterTypes: payload === "todos" ? [...state.allPokemon] : [...state.filterTypes]
      }
    case FILTER_DB:
      let filteredDb =[]
      if (payload){
        filteredDb = [...state.allPokemon].filter( p => p.createdDB === payload)
      } else {
        filteredDb = [...state.allPokemon].filter( p => p.createdDB === payload)        
      }
      return {
          ...state,
          pokemon: filteredDb,
          filterTypes: filteredDb
        }      
    case POST_POKEMON:
        return {
          ...state,
      }
    
default: return {...state};
};
};
