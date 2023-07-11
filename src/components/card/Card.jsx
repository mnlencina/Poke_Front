import React from "react";
import styles from './Card.module.css'
import { imgUtil } from "../../Util/imgUtil";
import { Link } from "react-router-dom";
import { imgTypes } from "../../Util/imgTypes";

const Card = (props)=>{
    let imageDefault = '';  
    
    !props.imageDefault 
        ? imageDefault = props.imageF
        : imageDefault = props.imageDefault

    return(
    <>
    <Link to={`/detail/${props.id}`} className={styles.link}>
        <div className={styles.card}>
            <div className={styles.imgDefault}>
              
                {!imageDefault ? <img src={imgUtil.notImg} alt=""/> : <img src={imageDefault} alt=""/> } 
                            
            </div>
            <h2 className={styles.name}><span>{props.name}</span></h2>
            
            <div>
                <div className={styles.tipes}>
                    <div className={styles.typeDiv}>
                        <img src={imgTypes[props.types[0]]} alt="" />
                            <span>{props.types[0].toUpperCase()}</span>
                    </div>
                    {props.types[1] 
                        ? (<div className={styles.typeDiv}>
                            <img src={imgTypes[props.types[1]]} alt="" />
                            <span>{props.types[1].toUpperCase()}</span>
                            </div>)
                        : null}
                            
                </div>
                 
                <div className={styles.progresDiv}>
                    <progress value={props.stroke} max='250'/>
                    <p>ATTK</p>
                </div>
                
                
            </div>
            
            
        </div>
    </Link>
    </>
    )
}

export default Card;