import Image from 'next/image';
import React from 'react';
import logo from '@/assets/images/logo.png';
import { Button } from '../ui/button';

export default function NavBar() {
	return (
		<div className="bg-white md:shadow-lg md:p-2 shadow-slate-700/5 md:fixed w-full z-10 relative">
			<div className="md:flex justify-between items-center max-w-6xl mx-auto hidden">
				<Image
					src={logo}
					alt="Logo représentant une entreprise de nettoyage"
					height={100}
					width={100}
				/>

				<Button className="rounded-full cursor-pointer p-6 text-md font-heading text-md">
					07 11 22 33 44
				</Button>
			</div>
		</div>
	);
}
