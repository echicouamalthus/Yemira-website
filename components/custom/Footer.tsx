import Image from 'next/image';
import React from 'react';
import logo from '@/assets/images/logo.png';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function Footer() {
	return (
		<div className=" space-y-24">
			<div className="grid md:grid-cols-4 md:gap-4 gap-12 max-w-6xl mx-auto md:px-0 px-4">
				<div className="space-y-2">
					<Image
						src={logo}
						alt="Logo représentant une entreprise de nettoyage"
						height={150}
						width={150}
					/>

					<p className="leading-8 text-slate-400">
						Nettoyage en profondeur de logements, hôtels, restaurants,
						entrepôts, centres commerciaux, entre autres.
					</p>

					<p className="text-slate-400 flex flex-col gap-1">
						<span className="Capitalize ">Contact:</span>
						<span>01 11 22 33 44</span>
					</p>
				</div>

				<div className="space-y-8">
					<h1 className="font-button text-xl">Plan du Site</h1>
					<ul className="flex flex-col gap-4">
						<Link href={'#'} className="text-slate-400 capitalize">
							commencer
						</Link>
						<Link href={'#'} className="text-slate-400 capitalize">
							projets
						</Link>
						<Link href={'#'} className="text-slate-400 capitalize">
							contactez-nous
						</Link>
						<Link href={'#'} className="text-slate-400 capitalize">
							citation
						</Link>
					</ul>
				</div>

				<div className="space-y-8">
					<h1 className="font-button text-xl">Suivez-nous</h1>
					<ul className="flex flex-col gap-4">
						<Link href={'#'} className="text-slate-400 capitalize">
							Facebook
						</Link>
						<Link href={'#'} className="text-slate-400 capitalize">
							whatsapp
						</Link>
					</ul>
				</div>

				<div className="space-y-8">
					<h1 className="font-button text-xl">Ecrivez-nous</h1>
					<ul className="flex flex-col gap-4">
						<Button
							asChild
							className="rounded-full cursor-pointer p-6 text-md font-heading text-md w-fit"
						>
							<Link href={'#'} className=" capitalize">
								Whatsapp
							</Link>
						</Button>
					</ul>
				</div>
			</div>

			<div className="bg-primary">
				<div className="text-white max-w-6xl mx-auto py-4">
					<p className="text-sm md:text-left text-center">
						Deep Cleaning Abidjan - {new Date().getFullYear()}
					</p>
				</div>
			</div>
		</div>
	);
}
