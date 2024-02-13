import React from 'react'
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
import './Card.scss'
import { Link } from 'react-router-dom';
const Card = ({item}) => {

  let url = "/product/";
  url = url + item.id;

  return (
    <div className='card'>
        <div className='left'>
            <img src={item.src[0]} alt={item.alt}/>
        </div>
        <div className='right'>
            <h1>{item.alt}</h1>
            <h3>{item.address}</h3>
            <span><AirlineSeatIndividualSuiteIcon/> rooms: {item.rooms}</span>
            <Link to={url}><button type='button'> View Details </button></Link>
        </div>
    </div>

  )
}

export default Card