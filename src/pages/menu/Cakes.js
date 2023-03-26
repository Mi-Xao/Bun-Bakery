import React from 'react'
import chocosponge from './cakes/chocosponge.png'
import custardsponge from './cakes/custardsponge.png'
import matcharoll from './cakes/matcharoll.png'

function Cakes() {
  return (
    <div className='menu-page'>
      <div className='menu-title'>
        Cakes <hr/></div>
      <table className='menu-table'>
        <tr>
          <td className='menu-item'>
            <img className='item item-img' src={chocosponge} alt='chocosponge' />
            <div className='item item-text'>
              <div className='item-title'>Chocolate Sponge Roll</div>
              <div className='item-price'>$20.00</div>
              <div className='item-desc'>Chocolate flavored sponge cake rolled 
                with fresh cream.</div>
              </div>
          </td>
          <td className='menu-item'>
            <img className='item item-img' src={custardsponge} alt='custardsponge' />
            <div className='item item-text'>
              <div className='item-title'>Coconut Custard Sponge Roll</div>
              <div className='item-price'>$20.00</div>
              <div className='item-desc'>Vanilla flavored sponge cake rolled with 
                fresh cream and vanilla custard. Topped with coconut shavings.</div>
              </div>
          </td>
        </tr>
        <tr>
          <td className='menu-item'>
            <img className='item item-img' src={matcharoll} alt='matcharoll' />
            <div className='item item-text'>
              <div className='item-title'>Matcha Red Bean Roll</div>
              <div className='item-price'>$20.00</div>
              <div className='item-desc'>Matcha (Japanese green tea) flavored 
              sponge cake rolled with sweet cream and red bean.</div>
              </div>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Cakes