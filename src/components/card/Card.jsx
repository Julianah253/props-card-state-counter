import React from 'react'
import { FaCartPlus } from "react-icons/fa";
const Card = ({pix, title, description}) => {
  return (
    <div>
        <div className="card " style={{width: "18rem"}}>
        <img src={pix} class="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="card-title"> {title} </h5>
      <p className="card-text"> {description} </p>
      <a href="#" class="btn btn-danger w-100 d-flex align-items-center justify-content-evenly"> <FaCartPlus/>Add to Cart </a>
       </div>
    </div>
    
    </div>
  )
}

export default Card