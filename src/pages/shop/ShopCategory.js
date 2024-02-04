import React, { useContext } from 'react'
import './ShopCategory.css'
// import banner from '../../assets/banner.png'
import { ContextData } from '../../context/ContextProvider'
const ShopCategory = ({banner, category}) => {
    const {products} = useContext(ContextData);
    // console.log(shopData)
  return (
    <div>
        <div className='shop-category'>
            <div className='shop'>{category}
                <h1 className='shop-heading'>FLAT 50% OFF </h1>
                <p></p>
                <button className="btn-section">Click Here</button>
            </div>
            <div className='category-banner'>
                <img src={banner} alt="" />
            </div>            
        </div>
    </div>
  )
}

export default ShopCategory