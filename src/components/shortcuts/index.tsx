'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { TShortcut } from '../../../declaration';
import { getShortcuts } from '@/services/HomeService';

function Shortcuts() {
	const [data, setData] = useState<TShortcut[]>([]);

	useEffect(() => {
		const fetchData=async ()=>{
			try {
				const response= await getShortcuts() as TShortcut[];
				setData(response);
			} catch (error) {
				
			}
		}
		fetchData();
	}, []);

	return (
		<div className='w-full grid grid-cols-5 gap-x-[24px] gap-y-[12px] md:grid-cols-10 gap-2 px-5 md:px-0 py-4 md:mt-[40px] items-center justify-between'>
			{data.map((shortcut, i) => (
				<div
					key={shortcut?.sort ?? i}
					className='flex flex-col gap-[8px] justify-center items-center'>
					<Image
						src={shortcut?.imageUrl}
						className='flex md:hidden w-[48px] h-[48px]'
						width={48}
						height={48}
						alt='shortcut'
					/>
					<Image
						src={shortcut?.imageUrl}
						className='hidden md:flex w-[62px] h-[62px]'
						width={62}
						height={62}
						alt='shortcut'
					/>
					<div className='text-[11px] md:text-[13px]'>
						{shortcut?.title ?? 'Shortcut'}
					</div>
				</div>
			))}
		</div>
	);
}

export default Shortcuts;