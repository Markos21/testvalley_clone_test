import Banner from '@/components/banner';
import BottomMenu from '@/components/bottom-menu';
import Collections from '@/components/collections';
import Shortcuts from '@/components/shortcuts';
import Toolbar from '@/components/toolbar';

export default async function Home() {
	return (
		<main className='flex min-h-screen flex-col min-w-[360px] max-w-[420px] md:w-full md:max-w-full bg-white items-center justify-center'>
			<Toolbar />
			<Banner />
			<div className='max-w-[420px] md:max-w-[960px] md:flex-col min-h-screen w-full md:flex md:items-center justify-center font-mono text-sm lg:flex'>
				<Shortcuts />
				<Collections />
				<BottomMenu />
			</div>
		</main>
	);
}
