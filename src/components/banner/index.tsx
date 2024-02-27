'use client';
import React, { useEffect, useState,useMemo } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa6';
import Image from 'next/image';
import { TBanner } from '../../../declaration';
import useWindowDimensions from '@/helpers/getWindowSize';

const SwiperButtonNext = () => {
	const swiper = useSwiper();

	return (
		<button
			className='w-11 h-11 p-[10px] bg-[#33333380] flex justify-center items-center rounded-full  text-white top-[140px] z-10'
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
	const { width } = useWindowDimensions();
	const isMobile = useMemo(() => width < 960, [width]);
	const slidesPerView = useMemo(() => {
	  const result = width / 960;
	  return result < 1 ? 1 : result;
	}, [width]);
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
		fetch(`${process.env.BASE_URL}/main-banner/all`).then(async (res) => {
			const response = (await res.json()) as TBanner[];
			setBanners(response);
		});
	}, []);

	const [currentIdx, setCurrentIdx] = useState(0);

	return (
		<div className='relative w-full h-[210px] md:h-[320px]'>
			<Swiper
    className='h-[210px] md:h-[320px] mx-auto overflow-visible'
    modules={[Autoplay, Pagination]}
    pagination={pagination}
    scrollbar={{ draggable: true }}
    spaceBetween={15}  
    slidesPerView={slidesPerView} 
    centeredSlides
    watchOverflow
    breakpoints={{
        320: {
            slidesPerView: 1,
            spaceBetween: 5,  
        },
        960: {
            slidesPerView: 2,
            spaceBetween: 5, 
        },
        1440: {
            slidesPerView: 5,
            spaceBetween: 10,  
        },
    }}
    onRealIndexChange={(swiper) => {
        setCurrentIdx(swiper.realIndex);
    }}
    autoplay={{ delay: 3000, disableOnInteraction: false }}>
				<div className=' w-full absolute z-30 hidden md:block md:top-[140px] h-[320px] mx-auto'>
					<div className='max-w-[960px] min-w-[320px] px-4 mx-auto flex flex-row items-center justify-between'>
						<SwiperButtonPrevious />
						<SwiperButtonNext />
					</div>
				</div>

				{banners.map((o, i) => (
    <SwiperSlide key={o.mainBannerId.toString()} className='mr-0'>
        <div className='relative max-w-[960px] h-[320px] mx-auto'>
            <Image
                src={window.innerWidth >= 960 ? o?.pcImageUrl : o?.mobileImageUrl}
                alt='banner'
                priority
                layout="fill"
                objectFit="cover"
                className='absolute inset-0 md:relative'
                style={{ opacity: i === currentIdx ? 1 : 0.4 }}
            />
        </div>
    </SwiperSlide>
))}



			</Swiper>
		</div>
	);
}