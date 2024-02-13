import React from 'react'
import Card from '../../Components/Card/Card'
import './Products.scss'
import { useEffect } from 'react'
const Product = ({type,data}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='products'>
        {data.length === 0 ? <p>Loading</p> : data.map(item => type === "" || item.type === type ? <Card key={item.id} item = {item} /> : <></>)}
    </div>
  )
}

export default Product