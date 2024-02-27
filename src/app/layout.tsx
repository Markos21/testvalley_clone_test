import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';

export const pretendard = localFont({
	src: [
		{
			path: '../../public/fonts/Pretendard-Black.otf',
			weight: '900',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Pretendard-Bold.otf',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Pretendard-ExtraBold.otf',
			weight: '800',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Pretendard-ExtraLight.otf',
			weight: '100',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Pretendard-Light.otf',
			weight: '200',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Pretendard-Medium.otf',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Pretendard-Regular.otf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Pretendard-SemiBold.otf',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Pretendard-Thin.otf',
			weight: '100',
			style: 'normal',
		},
	],
});

export const metadata: Metadata = {
	title: '테스트밸리 - 전자제품 사는게 즐겁다',
	description:
		'테스트밸리,전자제품,전자제품 체험,무료 체험,렌탈,전자제품 렌탈,전자제품 중고,중고,리퍼,리퍼브,중고나라,번개장터,당근마켓,파손 보험,애플케어,전자제품 쇼핑몰,전자제품 할인,전자제품 최저가',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className={pretendard.className}>
			<body className={pretendard.className + ' flex justify-center'}>
				{children}
			</body>
		</html>
	);
}
