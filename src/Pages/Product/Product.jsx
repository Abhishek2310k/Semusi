import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import './Product.scss'
import { useState ,useEffect} from 'react';
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Product = ({data}) => {
    const [index,setIndex] = useState(0);
    let {id} = useParams();
    let url = "/contact/";
    url = url + id;
    id = id-1;
    const item = data[id];
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);

    const prev = () => {
      index === 0 ? setIndex(1) : setIndex(0);
    }
    
    const next = () => {
      index === 1 ? setIndex(0) : setIndex(1);
    }

  return (
    <div className='product'>
      <div className='col1'>
        <img src={item.src[0]} alt='' onClick={()=>setIndex(0)}/>
        { item.src[1] === "" ? <></> : <img src={item.src[1]} alt='' onClick={()=>setIndex(1)}/>}
      </div>
      <div className='right'>
      <div className='col2'>
        <div className={item.src[1] === "" ? "prev hidden" : "prev displayed"} onClick={()=>prev()}><ArrowBackIcon/></div>
        <img src={item.src[index]} alt=''/>
        <div className={item.src[1] === "" ? "next hidden" : "next displayed"} onClick={()=>next()}><ArrowForwardIcon/></div>
      </div>
      <div className='col3'>
        <h3>{item.alt}</h3>
        <span>{item.address}</span>
        <div className='rooms'><AirlineSeatIndividualSuiteIcon/> <span>{item.rooms} Rooms</span></div>
        <Link to={url}>
        <button type='button'>Contact</button>
        </Link>
      </div>
      </div>
    </div>
  )
}

export default Product