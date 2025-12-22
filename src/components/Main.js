import React from 'react'
import FilterControl from './FilterControl'
import GetProducts from './GetProducts'

const Main = () => {
  return (
    <main className='main-container'>
        <div className='main-header-container'>
            <h1>DISCOVER OUR PRODUCTS</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
            </p>
        </div>

        <FilterControl />
        <GetProducts />
    </main>
  )
}

export default Main