import React from 'react'
import './Page_not_found.scss'
import MatrixParallax from "react-matrix-parallax";
const Page_not_found = () => {
  return (
    // <div className='page_not_found'>
    //     <h1>404 Page Not Found</h1>
    //     <Link to="/"><button>Home</button></Link>
    // </div>
    <MatrixParallax color="#6699cc" backgroundColor="rgba(0,0,0,1)">
      <div style={{ fontSize: "1.7rem" }} className='page_not_found'>
        <h2>404 Page Not Found</h2>
      </div>
    </MatrixParallax>
  )
}

export default Page_not_found