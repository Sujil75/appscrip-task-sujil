import React from 'react'
import {FilterData} from './Data'

const FilterComponent = () => {
  return (
    <div className='filter-content-container'>
        <div className='customizable-container'>
            <input id='customizableId' type='checkbox' />
            <label htmlFor='customizableId'>CUSTOMIZABLE</label>
        </div>

        <ul>
            {FilterData.map(item => (
                <li key={item.id} className="filter-group">
                    <label htmlFor={item.id}>{item.heading}</label>
                    <select id={item.id} name={item.heading}>
                        <option value={item.value}>{item.value}</option>
                        {/* Add other options dynamically or statically here */}
                    </select>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default FilterComponent