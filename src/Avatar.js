import React from 'react'
import image from "./img/1.jpg"
import "./Style.css"

export default function Avatar({size="m",type="square"}) {
    /* const {size,type}=props */
        return (
        <div className="card">
            <div className="image">
                {/*<img className={`${proops.size}${proops.type} `} src={image}alt="image"/>  */}
                <img className={`${size} ${type}`} src={image} alt="image"/>
            </div>
            <div className="content">
                <p className={`${size}`}>size <span>{size}</span></p>
                <p className={`${size}`}>tipe: <span>{type}</span></p>


            </div>
            
        </div>
    )
}
