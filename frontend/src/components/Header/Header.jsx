import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>
                Choose from a diverse menu featuring a delectable array of dishes
                crafted by our expert chefs, each dish is prepared with the finest ingredients 
                sourced locally and globally, ensuring a culinary experience that tantalizes 
                the taste buds and delights the senses.
            </p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header