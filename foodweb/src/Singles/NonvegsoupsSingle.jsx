import React from 'react'
import { useParams } from 'react-router-dom'
import { nonVegSoups } from '../stores/fooddata/nonvegsoups'
import Navbar from '../stores/Components/Navbar'

const NonvegsoupsSingle = () => {
    const {id}=useParams()
    const product=nonVegSoups.find((item)=>item.id===id)
  return (
    <>
    <Navbar/>
    <div className="ind-page">
    <div className="ind-image">
            <img src={product.image} alt=""/>
        </div>
        <div className="ind-details">
            <div className="ind-company">
                <h2>{product.product}</h2>

            </div>
        </div>
        <div className="ind-model">
            <h3>{product.model}</h3>
        </div>
        <div className="ind-price">
            <h2>Price:{product.price}</h2>
        </div>
        <div className="ind-description">
            <p>
                {product.description}
            </p>
        </div>
        <button>Add To Cart</button>
    
    </div>
    </>
  )
}

export default NonvegsoupsSingle