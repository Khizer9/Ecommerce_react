import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import MainSliderImg1 from '../Assets/mainslider1.jpg'
import MainSliderImg2 from '../Assets/mainslide2.jpg'
import MainSliderImg3 from '../Assets/mainslider3.jpg'

const MainSlider = () => {
  return (
    <div>
      <MDBCarousel>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={MainSliderImg1}
        alt='...'
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={MainSliderImg2}
        alt='...'
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={MainSliderImg3}
        alt='...'
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>
    </div>
  )
}

export default MainSlider
