import React from 'react'
import coffee from './drinks/coffee.jpg'
import bobamt from './drinks/bobamt.jpg'

function Drinks() {
  return (
    <div className='menu-page'>
      <div className='menu-title'>
       Drinks <hr/></div>
       <table className='menu-table'>
        <tr>
          <td className='menu-item'>
            <img className='item item-img' src={coffee} alt='coffee' />
            <div className='item item-text'>
              <div className='item-title'>Coffee</div>
              <div className='item-price'>$4.00</div>
              <div className='item-desc'>Bun Bakery signature coffee made 
                with espresso shots with cream and sugar.</div>
              </div>
          </td>
          <td className='menu-item'>
            <img className='item item-img' src={bobamt} alt='bobamt' />
            <div className='item item-text'>
              <div className='item-title'>Boba Milk Tea</div>
              <div className='item-price'>$4.00</div>
              <div className='item-desc'>Black tea with non-dairy creamer 
                and boba.</div>
              </div>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Drinks