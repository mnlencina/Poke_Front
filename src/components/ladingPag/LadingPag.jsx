import React from "react";
import {useNavigate} from "react-router-dom"
import Styles from './LadingPag.module.css'
import { imgUtil } from "../../Util/imgUtil"


const LadingPag = (props)=>{
    const navigate = useNavigate()
    const {allPokemon} = props
    
    return(
    
        <div className={Styles.pagDiv}> 
        
            <video autoPlay playsInline muted loop>
                <source src={imgUtil.startVideo} type="video/mp4"/>
            </video>
            
            <div className={Styles.imgs}>
                <img className={Styles.startPag2} src={imgUtil.LOGO} alt="" />
                {allPokemon.length !== 0 && <img className={Styles.startPag} type='button' onClick={()=>navigate('/home')} src={imgUtil.loanding} alt="" />}
            </div>           
                
                            
        </div>
    
    )
    
}

export default LadingPag