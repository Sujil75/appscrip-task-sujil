import React, {useState} from 'react'
import { FaRegHeart, FaHeart } from "react-icons/fa"

const ProductItem = ({product}) => {
    const {image, title, category} = product
    const [isLiked, setIsLiked] = useState(false)
    
    return (
        <li className='product-container'>
            <img src={image} alt={category} />
            <div>
                <p>{title}</p>
                <button type='button' onClick={() => setIsLiked(!isLiked)}>
                    {isLiked ? <FaHeart size="20" color="red" /> : <FaRegHeart size="20" />}
                </button>
            </div>
        </li>
    )
}

export default ProductItem