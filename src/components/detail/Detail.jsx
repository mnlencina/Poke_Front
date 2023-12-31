import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addPokDetail } from "../../redux/actions";
import styles from '../detail/Detail.module.css'
import { imgTypes } from "../../Util/imgTypes";
import { imgUtil } from "../../Util/imgUtil";

const Detail = (props)=>{
    const {detail} = useSelector((state)=> state)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {idDetail} = useParams()
        
    useEffect(()=>{
        console.log(dispatch(addPokDetail(idDetail)));
        
    },[dispatch, idDetail])
    
    
    
   
     
    return(
    <div className={styles.cont}>
            { !detail.name ? (<div><img src={imgUtil.loanding} alt="" /></div>) : (<>
            <button className={styles.submitBtn} onClick={()=> navigate(-1)}><span>Volver</span></button>
        <div className={styles.container}>
            <div>
                <h1 className={styles.name}><span>{detail.name}</span></h1>
                <div className={styles.container2}>
                    <div>
                        <img className={styles.img} src={(!detail.imageDefault ? detail.imageDefault = detail.imageF : true) ? detail.imageDefault : imgUtil.notImg} alt="" />
                    </div>  
                    <div>
                        <div className={styles.tipes}>
                            <div className={styles.typeDiv}>
                                <img src={imgTypes[detail.types[0]]} alt="" />
                                <span>{detail.types[0].toUpperCase()}</span>
                            </div>
                            {detail.types[1] 
                            ? (<div className={styles.typeDiv}>
                                    <img src={imgTypes[detail.types[1]]} alt="" />
                                    <span>{detail.types[1].toUpperCase()}</span>
                               </div>)
                            : null}
                            
                        </div>
                        <p>Vida: </p>
                        <div className={styles.progresDiv}>
                            <progress value={detail.life} max='250'/>
                            <p>{detail.life}</p>
                        </div>
                        <p>Ataque: </p>
                        <div className={styles.progresDiv}>
                            <progress value={detail.stroke} max='250'/>
                            <p>{detail.stroke}</p>
                        </div>
                        <p>Defensa: </p>
                        <div className={styles.progresDiv}>
                            <progress value={detail.defending} max='250'/>
                            <p>{detail.defending}</p>
                        </div>
                        <p>Velocidad: </p>
                        <div className={styles.progresDiv}>
                            <progress value={detail.speed} max='250'/>
                            <p>{detail.speed}</p>
                        </div>
                        <div className={styles.container3}>
                            <p>{`Peso: ${detail.weight/10}Kg`}</p>
                            <p>{`Altura: ${detail.height/10}m`}</p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        </>)}
    </div>
    )
}

export default Detail;