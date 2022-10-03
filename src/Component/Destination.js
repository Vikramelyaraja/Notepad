import React from 'react'
import image1 from '..//Asserts/Images/screen1.png'
import image2 from '..//Asserts/Images/screen2.png'
import image3 from '..//Asserts/Images/Screen3.png'

const Destinations = () => {
  return (
    <section className='destinations'>
      <p style={{fontSize:25,fontWeight:'bold'}}>Sample Screen Shots</p>
      <div className='grid'>
        <div>
          <img src={image1} alt='destination-1' />
          
        </div>

        <div>
          <img src={image2} alt='destination-2' />
         
        </div>

        <div>
          <img src={image3} alt='destination-3' />

        </div>
      </div>
    </section>
  )
}

export default Destinations