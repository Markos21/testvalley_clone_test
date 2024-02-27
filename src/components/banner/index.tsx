'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa6';
import Image from 'next/image';
import { TBanner } from '../../../declaration';
import { getBanners } from '@/services/HomeService';

const SwiperButtonNext = () => {
	const swiper = useSwiper();
  
	return (
	  <button
		className='w-11 h-11 p-[10px] bg-[#33333380] flex justify-center items-center rounded-full text-white top-[140px] z-10'
		onClick={() => swiper.slideNext()}>
		<FaChevronRight color='white' size={24} />
	  </button>
	);
  };
  
  const SwiperButtonPrevious = () => {
	const swiper = useSwiper();
  
	return (
	  <button
		className='w-11 h-11 p-[10px] bg-[#33333380] flex justify-center items-center rounded-full text-white top-[140px] z-10'
		onClick={() => swiper.slidePrev()}>
		<FaChevronLeft color='white' size={24} />
	  </button>
	);
  };
  
  export default function Banner() {
	const pagination = {
	  clickable: true,
	  renderBullet: function (_: any, className: string) {
		return (
		  '<span class="' +
		  className +
		  '" style="background-color: white;"></span>'
		);
	  },
	};
  
	const [banners, setBanners] = useState<TBanner[]>([]);
  
	useEffect(() => {
	  const fetchData = async () => {
		try {
		  const response = await getBanners() as TBanner[];
		  console.log('RESPONSE', response);
		  setBanners(response);
		} catch (err) {
		  console.error(err);
		}
	  };
  
	  fetchData();
	}, []);
  
	const [currentIdx, setCurrentIdx] = useState(0);
  
	return (
	  <div className='relative w-full '>
		<Swiper
  className='swiper-container  my-swiper'
  modules={[Autoplay, Pagination]}
  pagination={pagination}
  scrollbar={{ draggable: true }}
  spaceBetween={30}
  slidesPerView={1.33}
  centeredSlides
  watchOverflow
  loop={true}
  breakpoints={{
    320: {
      slidesPerView: 'auto',
      width: 320, // Set a specific width for the container
    },
    960: {
      slidesPerView: 1.33,
      width: 960, 
    },
    1440: {
      slidesPerView: 1.5,
      width: 1440, 
    },
  }}
  onRealIndexChange={(swiper) => {
    setCurrentIdx(swiper.realIndex);
  }}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  effect={'flip'}
  flipEffect={{
    slideShadows: true,
  }}
>
			<div className=' w-full absolute z-30 hidden md:block md:top-[140px] h-[320px]'>
			  <div className='max-w-[960px] min-w-[320px] px-4 mx-auto flex flex-row items-center justify-between'>
				<SwiperButtonPrevious />
				<SwiperButtonNext />
			  </div>
			</div>
  
			{banners.map((o, i) => (
          <SwiperSlide
            key={o.mainBannerId.toString()}
            className={`swiper-slide${currentIdx === i ? ' active' : ''}`}
          >
            <div className="max-w-[960px] mx-auto flex flex-row items-center justify-between h-full">
              <div className="w-full flex items-center justify-center">
                <img
                  className='max-w-full h-auto'
                  src={window.innerWidth < 960 ? o.mobileImageUrl : o.pcImageUrl}
                  alt={`Banner ${i + 1}`}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
		  </Swiper>
		</div>
	);
  }
  

