import React from 'react'
import { CirclesWithBar } from 'react-loader-spinner'

export default function Loader() {
  return (
<div className=' flex  w-full'>
<div className='justify-center items-center mt-48  mx-auto'>
<CirclesWithBar
  height="100"
  width="100"
  color="#4fa94d"
  outerCircleColor="#4fa94d"
  innerCircleColor="#4fa94d"
  barColor="#4fa94d"
  ariaLabel="circles-with-bar-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
</div>
</div>

)  
}

