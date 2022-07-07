import React from 'react';
import '../styles/propertyCard.css'
import { IoBedOutline } from 'react-icons/io5';
import {BiBath } from 'react-icons/bi';
import { TbArrowAutofitWidth } from "react-icons/tb";


function PopertyCard({property:{adress,title,bed,bathroom,price,coverSrc,area}}) {
   // console.log(id)
    return (
        <div className='propertyFrame'>
            <img src={coverSrc} alt={title} />
            <div className="details">

            <h2 ><span className='violate'>${price}</span><span className='small'>/month</span></h2>
            
            <h2 className='title'>{title}
            </h2>
            <p className='adress small'>{adress}</p>
            <div className="microDetails small">
                <div className="align">
                 <IoBedOutline className='violate'/> <h4> &nbsp;{bed} Beds</h4>
                </div>

                <div className="align">
                <BiBath className='violate'/> <h4>    &nbsp;{bathroom } Bathrooms</h4>
                </div>

                <div className="align">
                <TbArrowAutofitWidth className='violate'/>   <h4>  &nbsp;{area} m²</h4>
                </div>
               
               
               
            </div>
            

            </div>
            
            
        </div>
    );
}

export default PopertyCard;