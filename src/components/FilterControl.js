import React from 'react'
import {RecommendedOptions} from './Data'

const FilterControl = () => {
  return (
    <div className='filter-control-container'>
        <div className='filter-content'>
            <h5>0000 ITEMS</h5>

            <div>
                <p>{'<'}</p>
                <button type="button">HIDE FILTER</button>
            </div>
        </div>

        <select>
            {RecommendedOptions.map(option =>
                <option value={option.value} key={option.id}>{option.value}</option>)}
        </select>
    </div>
  )
}

export default FilterControl