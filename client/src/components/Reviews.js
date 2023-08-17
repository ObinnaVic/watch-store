import React from 'react';
import { reviews } from './reveiwData';
import AliceCarousel from "react-alice-carousel";

const Reviews = () => {

    const items = reviews.map((item) => {
        const {id, review, name} = item;
        return (
          <div key={id} className='d-flex justify-content-center'>
            <div className="review-sec bg-light text-center">
                <p>{review}</p>
                <h6 className='fw-bold text-danger'>-{name}</h6>
            </div>
          </div>
        );
    })

    const responsive = {
      0: {
        items: 1,
      },
      512: {
        items: 1,
      },
    };

    return (
      <div>
        <h4 className='text-center text-danger'>WHAT PEOPLE SAY ABOUT US</h4>
        <AliceCarousel
          mouseTracking
          infinite
          autoPlayInterval={3000}
          animationDuration={1500}
          disableButtonsControls
        //   disableDotsControls
          responsive={responsive}
          autoPlay
          items={items}
        />
      </div>
    );
}

export default Reviews;