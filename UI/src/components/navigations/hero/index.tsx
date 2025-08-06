import bgdonut1 from './image/bg-donut-1.png'
import bgdonut2 from './image/bg-donut-2.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules'
import { SLIDER } from '../contants'

import 'swiper/css'
import 'swiper/css/pagination'
import './Carousel.css'

const Carousel = () => {
  return (
    <div className='carousel'>
      <div>
        <div className='carousel-content'>
          <span>discover</span>
          <h1>Sweet Donut Heaven</h1>
          <hr />
          <p>
            Our Donut Collection Offers a Mouthwatering Array of Flavors,
            Toppings, and Shapes for Every Craving and Occasion.
          </p>
          <a href="#" className='slider-btn'>download app</a>
        </div>
      </div>

      <Swiper
        className='myswiper'
        modules={[Pagination, EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1560: {
            slidesPerView: 3,
          },
        }}
      >
        {SLIDER.map((data, index) => (
          <SwiperSlide
            key={index}
            style={{ backgroundImage: `url(${data.url})` }}
            className='myswiper-slider'
          >
            <div>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              <a href={data.url} target='_blank' rel='noopener noreferrer' className='slider-btn'>
                explore
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <img src={bgdonut1} alt="bg image" className='bgdonut1' />
      <img src={bgdonut2} alt="bg image" className='bgdonut2' />
    </div>
  )
}

export default Carousel
