import Image from 'next/image';
import React from 'react';
import brand from '@/assets/images/brand.png';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function NavBar() {
	return (
		<div className="bg-white md:shadow-lg md:p-2 shadow-slate-700/5 md:fixed w-full z-10 relative">
			<div className="md:flex justify-between items-center max-w-6xl mx-auto hidden">
				<Image
					src={brand}
					alt="Logo représentant une entreprise de nettoyage"
					height={100}
					width={100}
				/>

				<Button
					className="rounded-full cursor-pointer p-6 text-md font-heading text-md"
					asChild
				>
					<Link href={'https://wa.link/wa3emf'}>05 05 40 48 66</Link>
				</Button>
			</div>
		</div>
	);
}
