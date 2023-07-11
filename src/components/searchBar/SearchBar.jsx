import React, { useState } from "react";
import styles from "../searchBar/SearchBar.module.css"
import { useDispatch, useSelector } from "react-redux";
import { addPokemon } from "../../redux/actions";

const SearchBar = (props)=>{
    const {allNames} = useSelector((state)=>state)
    const dispatch = useDispatch()
    const[pokemon, setPokemon] = useState('')
    
    const handleChange =(e)=>{
        setPokemon(e.target.value)
    }

    const onSearch =()=>{
        if(!pokemon) return alert('Ingrese un Nombre')
        const filtered = allNames.filter(name => 
            name.includes(pokemon)
        )        
        dispatch(addPokemon(filtered))
    }
    
    
    const onSearchEnter =(e)=>{
        if (e.keyCode === 13) {
            const filtered = allNames.filter(name =>
                name.includes(pokemon)            
            )            
            dispatch(addPokemon(filtered))
        }
    }
    
    return(
    <>
        <div className={styles.inputGroup}>
		    <input onChange={handleChange} onKeyDown={onSearchEnter} placeholder="Enter name Pokemon" type="text" />
		    <button onClick={onSearch} className={styles.submitBtn}><span>BUSCAR</span></button>
	    </div>
    </>
    )
}

export default SearchBar;