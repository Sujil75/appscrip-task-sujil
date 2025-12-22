import React, {useState, useEffect} from 'react'
import ProductItem from './ProductItem'

const GetProducts = () => {
    const [productsList, setProductsList] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products')
                const fetchedData = await response.json()

            if (response.ok) {
                setProductsList(fetchedData)
            }
            } catch (err) {
                console.log("message: ", err.message)
            }
        }

        getProducts()
    }, [])

    return (
        <ul className='products-list-container'>
            {productsList.map(product => 
                <ProductItem key={product.id} product={product}/>
            )}
        </ul>
    )
}

export default GetProducts