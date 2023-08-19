import React from 'react'
import Slider from 'react-slick'
import '../../styles/testimonial.css'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
import ava04 from '../../assets/images/ava-4.jpg'

const Testimonials = () => {

    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    }

    return <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p className="section__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi molestias quisquam officia! Quos ipsam odit voluptatibus in, omnis voluptatum qui quis non ea repellendus officia minus eum nesciunt dolore ab?
            </p>

            <div className="mt-3 d-flex align-items-center gap-4">
                <img src={ava01} alt="" className='w-25 h-25 rounded-2' />

                <div>
                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p className="section__description">Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p className="section__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi molestias quisquam officia! Quos ipsam odit voluptatibus in, omnis voluptatum qui quis non ea repellendus officia minus eum nesciunt dolore ab?
            </p>

            <div className="mt-3 d-flex align-items-center gap-4">
                <img src={ava02} alt="" className='w-25 h-25 rounded-2' />

                <div>
                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p className="section__description">Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p className="section__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi molestias quisquam officia! Quos ipsam odit voluptatibus in, omnis voluptatum qui quis non ea repellendus officia minus eum nesciunt dolore ab?
            </p>

            <div className="mt-3 d-flex align-items-center gap-4">
                <img src={ava03} alt="" className='w-25 h-25 rounded-2' />

                <div>
                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p className="section__description">Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p className="section__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi molestias quisquam officia! Quos ipsam odit voluptatibus in, omnis voluptatum qui quis non ea repellendus officia minus eum nesciunt dolore ab?
            </p>

            <div className="mt-3 d-flex align-items-center gap-4">
                <img src={ava04} alt="" className='w-25 h-25 rounded-2' />

                <div>
                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p className="section__description">Customer</p>
                </div>
            </div>
        </div>
    </Slider>
}

export default Testimonials