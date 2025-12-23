import React, {useState} from 'react'
import FilterControl from './FilterControl'
import GetProducts from './GetProducts'
import FilterComponent from './FilterComponent'

const Main = () => {
  const [showFilter, setShowFilter] = useState(true)
  
  return (
    <main className='main-container'>
        <div className='main-header-container'>
            <h1>DISCOVER OUR PRODUCTS</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
            </p>
        </div>

        <FilterControl showFilter={setShowFilter} filter={showFilter} />
        <div className='main-content-container'>
          {showFilter && <FilterComponent />}
          <GetProducts />
        </div>
    </main>
  )
}

export default Main