import Image from 'next/image';
import React from 'react';

function BottomMenu() {
	const menu = [
		{
			id: 1,
			title: '홈',
			icon: 'https://www.testvalley.kr/navibar/ico-home-on.svg',
		},
		{
			id: 2,
			title: '홈검색',
			icon: 'https://www.testvalley.kr/navibar/ico-search-off.svg',
		},
		{
			id: 3,
			title: '카테고리',
			icon: 'https://www.testvalley.kr/navibar/ico-category-off.svg',
		},
		{
			id: 4,
			title: '좋아요',
			icon: 'https://www.testvalley.kr/navibar/ico-likelist-off.svg',
		},
		{
			id: 5,
			title: '마이페이지',
			icon: 'https://www.testvalley.kr/navibar/ico-mypage-off.svg',
		},
	];
	return (
		<div className='sticky bottom-0 md:hidden h-[70px] py-[13px] px-[12px] bg-white w-full row items-center grid grid-cols-5'>
			{menu.map((o) => (
				<div key={o.id} className='flex flex-col gap-[7px] items-center'>
					<Image src={o.icon} width={21} height={21} priority alt='menu' />
					<p>{o.title}</p>
				</div>
			))}
		</div>
	);
}

export default BottomMenu;
