import React from 'react'
import Carousel from '../../Components/Carousel/Carousel'
import { Link } from 'react-router-dom'
import './Home.scss'
const Home = () => {
  return (
    <div className='home'>
      <Carousel/>
      <div className='category'>
        <div className='choice'>
          <img src='https://imgs.search.brave.com/L_B9mcMz2m08PovP4cPA7KogjT1q2moQpG2K8znDeWI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI4/ODk0MTY3OC9waG90/by9idWlsZGluZy1h/cGFydG1lbnRzLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz15/UHFLSHNwVTlFaFpJ/em9wLWJFcDdwR3Nk/djRBd1VMbUNBTzBr/SGE2VXFrPQ' alt='apartment'/>
          <Link to="/products/apartment">
          <div className='content'><h3>Apartment</h3></div>
          </Link>
        </div>
        <div className='choice'>
          <img src='https://media.istockphoto.com/id/1171100210/photo/group-of-male-college-students-in-shared-house-kitchen-washing-up-and-hanging-out-together.jpg?s=612x612&w=0&k=20&c=RrJJEE6T_IPS0sSMcNyj6C7IyxJvKY7sA2BcGoOlpgQ=' alt='roommates'/>
          <Link to="/products/roommate">
          <div className='content'><h3>Roomate</h3></div>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default Home