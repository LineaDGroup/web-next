// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

import Image from 'next/image';
import { useEffect, useState } from 'react';


export default function ClientsCarousel({inverted} : any) {
    const slides = [
      '/images/clients/history.png',
      '/images/clients/AE_Networks_2017-2.png',
      '/images/clients/viacom-1.png',
      '/images/clients/boca.png',
      '/images/clients/teatrix.png',
      '/images/clients/biobarica.png',
      '/images/clients/river.png',
      '/images/clients/toyota.png',
      '/images/clients/popular.png',
      '/images/clients/tv_publica.png',
    '/images/clients/personal.png',
    '/images/clients/spirax.png',
    '/images/clients/gedyt.png',
    '/images/clients/novartis.png',
    '/images/clients/lifetime.png',
    '/images/clients/takeda.png'
  ];

    const [render,setRender] = useState(false);

    useEffect(()=> setRender(true),[])
    console.log(typeof window);
    return (
      <div>
        {render && <Swiper
          spaceBetween={30}
          slidesPerView={3}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            "1024": {
              slidesPerView: 8
            },"720": {
              slidesPerView: 6
            },"460": {
              slidesPerView: 4
            }
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          loop={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {slides.map((slide,index) => 
          
          <SwiperSlide key={index}>
            <div className={`${inverted && 'invert contrast-50'}`}>
              <Image alt='LineaD Group clients' width="400" height="400" src={slide} />
            </div>
          </SwiperSlide>
          )}
        </Swiper>}
      </div>
    );
  };