import React, { InputHTMLAttributes, ReactNode } from 'react';

type TInput = {
	prefix?: ReactNode;
	postfix?: ReactNode;
	containerStyle?: string;
	inputStyle?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'postfix'>;

function Input({
	prefix,
	postfix,
	containerStyle,
	inputStyle,
	...props
}: TInput) {
	return (
		<div
			className={
				'flex relative bg-white row items-center h-[42px] py-[9px] px-[40px] w-[335px] ml-[70px] justify-center border border-gray-300 rounded-[4px] focus:outline-none hover:border-[#00D094] focus:border-[#00D094]' +
				' ' +
				containerStyle
			}>
			{prefix && <span className='absolute left-3 top-[10px]'>{prefix}</span>}
			<input
				className={
					'block w-full text-[14px] focus:outline-none' + ' ' + inputStyle
				}
				{...props}
			/>
			{postfix && (
				<span className='absolute right-3 top-[10px]'>{postfix}</span>
			)}
		</div>
	);
}

export default Input;
