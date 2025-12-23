import React from 'react'
import { CiSearch, CiHeart, CiUser } from "react-icons/ci"
import { PiHandbagSimpleLight } from "react-icons/pi"
import { RxHamburgerMenu } from "react-icons/rx"

import { HeadersList, HeaderLang } from './Data'

const Headers = () => {
  return (
    <header className='headers-container'>
        <div className='logo-container'>
            <button>
                <RxHamburgerMenu size="20" className='header-hamburger' />
            </button>
            <img src="https://res.cloudinary.com/dh1akzmfk/image/upload/v1766410366/images_cc4ob7.jpg" alt="website logo" className='website-logo' />
        </div>

        <div className='headers-content-container'>
            <h2>L O G O</h2>
            
            <nav>
                <ul>
                    {HeadersList.map(item => <li key={item.id}>{item.content}</li>)}
                </ul>
            </nav>
        </div>

        <div className='header-logos-container'>
            <CiSearch size="20" />
            <CiHeart size="21" />
            <PiHandbagSimpleLight size="25" />
            <CiUser size="20" className='header-user-acc' />

            <select>
                {HeaderLang.map(item => <option value={item.lang} key={item.id}>{item.content}</option>)}
            </select>
        </div>
    </header>
  )
}

export default Headers