import React from 'react'
import tarobun from './bread/tarobun.jpg'
import saltedbutter from './bread/saltedbutter.jpg'
import milkpudding from './bread/milkpudding.jpg'
import chocobun from './bread/chocobun.jpg'

function Bread() {
  return (
    <div className='menu-page'>
      <div className='menu-title'>
        Bread <hr/></div>
      <table className='menu-table'>
        <tr>
          <td className='menu-item'>
            <img className='item item-img' src={tarobun} alt='tarobun' />
            <div className='item item-text'>
              <div className='item-title'>Taro Marble</div>
              <div className='item-price'>$5.00</div>
              <div className='item-desc'>Our top seller Marble Taro is a 
                sweet bread made with mixed grains and filled with 
                signature taro filling.</div>
              </div>
          </td>
          <td className='menu-item'>
            <img className='item item-img' src={milkpudding} alt='milkpudding' />
            <div className='item item-text'>
              <div className='item-title'>Milk Pudding</div>
              <div className='item-price'>$5.00</div>
              <div className='item-desc'>A traditional Japanese style soft 
              bread with vanilla custard inside.</div>
              </div>
          </td>
        </tr>
        <tr>
          <td className='menu-item'>
          <img className='item item-img' src={saltedbutter} alt='saltedbutter' />
            <div className='item item-text'>
              <div className='item-title'>Salted Butter Bread</div>
              <div className='item-price'>$5.00</div>
              <div className='item-desc'>Golden bread baked with salted butter. 
                Sprinkled with sea salt to make it simply delicious.</div>
              </div>
          </td>
          <td className='menu-item'>
            <img className='item item-img' src={chocobun} alt='chocobun' />
            <div className='item item-text'>
              <div className='item-title'>Choco Bun</div>
              <div className='item-price'>$5.00</div>
              <div className='item-desc'>A petite bun made of 
                chocolate dough filled with chocolate chips. A chocolate 
                lover's heaven.</div>
              </div>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Bread