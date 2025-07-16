import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import bgColor from '@/assets/images/bg-color.png';
import Testimonials from '@/components/custom/Testimonials';
import Photos from '@/components/custom/Photos';
import Image_ from '@/assets/images/hero-image.png';
import Image_1 from '@/assets/images/Image_1.png';
import Image_2 from '@/assets/images/Image_2.png';
import logo from '@/assets/images/logo.png';

const SOLUTION = [
	{
		titre: 'Tapisserie',
		solution: 'Lavage des chambres, des chaises et des matelas',
	},
	{
		titre: 'Moquette',
		solution: "Tapis pour bureaux d'entreprise, hôtels, restaurants et maisons",
	},
	{
		titre: 'Matelas',
		solution: 'Lavage de tapis fins, tapis persans ou tout type de tapis.',
	},
	{
		titre: 'Stores et Rideaux',
		solution:
			'Nettoyage professionnel de stores et rideaux résidentiels ou commerciaux.',
	},
	{
		titre: 'Vitres',
		solution:
			'Lavage de maisons, immeubles, bureaux, commerces, restaurants, hôtels, etc.',
	},
	{
		titre: 'Paroi & cloison',
		solution:
			'Nettoyage professionnel et en profondeur des cloisons de bureaux.',
	},
	{
		titre: 'Stands',
		solution: 'Nettoyage de stand avant et pendant votre salon.',
	},
	{
		titre: 'Planchers',
		solution:
			'Lavage et polissage de sols résidentiels, commerciaux et industriels.',
	},
	{
		titre: 'Nettoyage fin de chantiers',
		solution:
			'Nettoyage fin de bâtiments ou de rénovation, habités ou à habiter.',
	},
	{
		titre: 'Cusines',
		solution:
			'Nettoyage détaillé de cuisine, résidentiel, commercial et industriel.',
	},
	{
		titre: 'Nettoyage Complet',
		solution:
			'Notre spécialité, Le nettoyage en profondeur et détaillé des espaces habités ou inhabités.',
	},
	{
		titre: 'Désinfection',
		solution: "Services d'assainissement résidentiel et commercial.",
	},
];

export default function Home() {
	return (
		<main>
			<div className="flex md:flex-row flex-col md:space-y-0 space-y-16 justify-center items-center md:p-0 p-4 md:h-screen h-[130vh] max-w-6xl mx-auto">
				<div className="flex items-center justify-center">
					<div className="space-y-2">
						<div className="flex justify-center md:hidden">
							<Image
								src={logo}
								alt="Logo représentant une entreprise de nettoyage"
								height={100}
								width={100}
							/>
						</div>
						<h1 className="md:text-6xl text-5xl md:text-left text-center font-heading">
							<span className="text-primary">Nettoyage</span> professionnel et
							en profondeur
						</h1>

						<p className="text-slate-400 text-lg md:text-left text-center md:w-[500px]">
							Nous sommes une entreprise avec 10 ans d&apos;expérience dans le
							nettoyage résidentiel, commercial et industriel en profondeur,
							partout à Abidjan.
						</p>

						<Button
							asChild
							className="rounded-full cursor-pointer p-6 text-md font-heading text-md w-fit relative md:mx-0 mx-auto mt-8 flex justify-center"
						>
							<Link href={'tel:+2250505404866'} className=" ">
								Contactez-nous
							</Link>
						</Button>
					</div>
				</div>
				<div className="flex items-center justify-center">
					<Image
						src={Image_}
						alt="image service description"
						width={1200}
						height={1200}
					/>
				</div>
			</div>

			<div className="max-w-6xl mx-auto md:p-0 p-4 space-y-8">
				<div className="flex flex-col gap-3 items-center max-w-2xl mx-auto">
					<h1 className="text-5xl font-heading text-center md:text-left">
						Des services <span className="text-primary">irréprochables</span>
					</h1>
					<p className="text-center md:px-0 px-4 md:text-lg text-slate-400">
						Nous avons 3 types de services :
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-6">
					<div className="bg-primary/5 hover:outline-1 hover:outline-slate-200 flex items-start gap-4 p-8 rounded-md">
						<Image
							src={
								'https://cdn.prod.website-files.com/5fae1015e2bc5650567ee63f/5fae2f733a0e04bda72435c3_limpieza_profunda_v3.png'
							}
							alt="icons svg"
							width={80}
							height={80}
						/>
						<div>
							<h1 className="font-heading text-2xl capitalize">résidentiel</h1>
							<p className="text-slate-400">
								Services de nettoyage en profondeur et d&apos;entretien pour les
								maisons.
							</p>
						</div>
					</div>
					<div className="bg-primary/5 hover:outline-1 hover:outline-slate-200 flex items-start gap-4 p-8 rounded-md">
						<Image
							src={
								'https://cdn.prod.website-files.com/5fae1015e2bc5650567ee63f/5fae2f733a0e04bda72435c3_limpieza_profunda_v3.png'
							}
							alt="icons svg"
							width={80}
							height={80}
						/>
						<div>
							<h1 className="font-heading text-2xl capitalize">cormmercial</h1>
							<p className="text-slate-400">
								Nous effectuons des nettoyages en profondeur des bureaux aux
								entrepôts industriels.
							</p>
						</div>
					</div>
					<div className="bg-primary/5 hover:outline-1 hover:outline-slate-200 flex items-start gap-4 p-8 rounded-md">
						<Image
							src={
								'https://cdn.prod.website-files.com/5fae1015e2bc5650567ee63f/5fae2f733a0e04bda72435c3_limpieza_profunda_v3.png'
							}
							alt="icons svg"
							width={80}
							height={80}
						/>
						<div>
							<h1 className="font-heading text-2xl capitalize">industriel</h1>
							<p className="text-slate-400">
								Services de nettoyage fin et en profondeur pour bâtiments
								habités et inhabités.
							</p>
						</div>
					</div>
				</div>

				<Button
					asChild
					className="rounded-full cursor-pointer p-6 text-md font-heading text-md w-fit relative mx-auto flex justify-center"
				>
					<Link href={'https://wa.link/wa3emf'} className=" ">
						Demandez un devis
					</Link>
				</Button>
			</div>

			<div className="max-w-6xl mx-auto">
				<div className="grid md:grid-cols-2 gap-4 md:h-[80vh] py-16 md:p-0 p-4">
					<div className="flex items-center justify-center">
						<Image
							src={Image_1}
							alt="image service description"
							width={500}
							height={500}
						/>
					</div>

					<div className="flex items-center justify-center">
						<div className="">
							<h1 className="md:text-5xl text-4xl font-heading">
								Personnel <span className="text-primary">qualité</span>
							</h1>

							<p className="text-slate-400 text-lg md:w-[500px] text-justify">
								Nous formons constamment notre personnel afin de maintenir des
								normes élevées de qualité, de rapidité et d’engagement.
							</p>

							<div className="space-y-4 mt-4">
								<div className="flex items-center gap-4">
									<Image
										src="https://cdn.prod.website-files.com/5fae1015e2bc5650567ee63f/5fae30d5cee6272936d6c80c_Limpieza-profunda-casa.png"
										alt="icon svg"
										width={50}
										height={50}
									/>
									<p className="text-slate-400 text-lg">Formation continue</p>
								</div>
								<div className="flex items-center gap-4">
									<Image
										src="https://cdn.prod.website-files.com/5fae1015e2bc5650567ee63f/5fae30d57f6a0f5afc766fc1_limpieza-profunda-oficina.png"
										alt="icon svg"
										width={50}
										height={50}
									/>
									<p className="text-slate-400 text-lg">Valeurs</p>
								</div>

								{/* <div>
									 <Image
										src=" https://cdn.prod.website-files.com/5fae1015e2bc5650567ee63f/5fae30d5cee6272936d6c80c_Limpieza-profunda-casa.png"
										alt="icon svg"
										width={100}
										height={100}
									/> 
									<p>Valeur</p>
								</div> */}
							</div>
						</div>
					</div>
				</div>
				<div className="grid md:grid-cols-2 gap-8 md:h-[80vh] md:p-0 p-4">
					<div className="flex items-center justify-center">
						<div className="space-y-2">
							<h1 className="md:text-5xl text-4xl font-heading">
								Machines et <span className="text-primary">équipements</span>
							</h1>

							<p className="text-slate-400 text-lg md:w-[500px] text-justify">
								Nous disposons de machines et d&apos;équipements professionnels
								de normes internationales pour différentes utilisations et
								applications, de marques telles que Karcher, Truper, Linhaus,
								Kleenrite, Raven, Ridgid, entre autres.
							</p>

							<Button
								asChild
								className="rounded-full cursor-pointer p-6 text-md font-heading text-md w-fit relative mx-auto mt-8"
							>
								<Link href={'tel:+2250505404866'} className="">
									Contactez-nous
								</Link>
							</Button>
						</div>
					</div>
					<div className="flex items-center justify-center">
						<Image src={Image_2} alt="image service description" />
					</div>
				</div>
			</div>

			<Photos />

			<div className="bg-primary/5 space-y-16 py-24 p-4">
				<div className="flex flex-col gap-3 items-center max-w-2xl mx-auto">
					<h1 className="text-5xl font-heading text-center md:text-left">
						Nos <span className="text-primary">Solutions</span>
					</h1>
					<p className="text-center md:px-0 px-4 md:text-lg text-slate-400">
						Découvrez nos solutions. Vous ne trouvez pas ce que vous cherchez ?
						Contactez-nous et l&apos;un de nos spécialistes pourra vous aider.
					</p>
				</div>

				<div className="max-w-6xl mx-auto">
					<div className="grid md:grid-cols-3 gap-12">
						{SOLUTION.map((s, index) => {
							return (
								<div className="flex flex-col gap-2 items-center" key={index}>
									<h1 className="font-heading text-xl ">{s.titre}</h1>
									<p className="text-slate-400 text-center w-72">
										{s.solution}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			<Testimonials />

			<div className="pt-24 md:px-0 px-4">
				<div className="grid md:grid-cols-3 max-w-6xl mx-auto gap-12">
					<div className="">
						<h1 className="text-5xl font-heading">
							Questions <span className="text-primary">fréquemment posées</span>
						</h1>
					</div>

					<div className="grid md:grid-cols-2 gap-6 col-span-2">
						<div>
							<h1 className="text-lg font-heading">
								Pourriez-vous nettoyer ma voiture ?
							</h1>
							<p className="text-slate-400">
								Oui, nous proposons un service dédié au nettoyage des selleries
								automobiles. Nous utilisons nos machines pour certaines zones et
								lavons les autres à la main, afin de laisser votre voiture
								parfaitement propre, à l&apso;intérieur comme à
								l&apso;extérieur.
							</p>
						</div>
						<div>
							<h1 className="text-lg font-heading">
								Avez-vous la capacité de nettoyer une grande surface ?
							</h1>
							<p className="text-slate-400">
								Oui, car nous disposons de machines de différentes tailles et
								d&apso;un personnel hautement qualifié. Nous effectuons
								d&apso;abord un dimensionnement afin de définir les délais
								idéaux pour atteindre les objectifs fixés.
							</p>
						</div>
						<div>
							<h1 className="text-lg font-heading">
								Quels matériaux dois-je fournir si je souhaite faire appel à vos
								services ?
							</h1>
							<p className="text-slate-400">
								Vous n&apos;aurez rien à apporter : notre équipe vous livrera
								les machines ou le matériel directement le jour du nettoyage en
								profondeur. Nous vous expliquerons tout le processus lors du
								premier appel afin que vous vous familiarisiez avec notre
								approche.
							</p>
						</div>
						<div>
							<h1 className="text-lg font-heading">
								Que se passe-t-il si un sol ou un meuble est endommagé pendant
								le nettoyage ?
							</h1>
							<p className="text-slate-400">
								Nous avons une assurance qui protège votre propriété et vos
								biens à tout moment, vous pouvez donc être assuré que vous êtes
								entre de bonnes mains.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="h-screen flex items-center md:p-0 p-4">
				<div
					className="flex md:flex-row flex-col bg-white md:drop-shadow-2xl drop-shadow-xl
           max-w-6xl mx-auto w-full justify-between items-center gap-16 rounded-lg md:p-24 p-16 relative"
				>
					<Image
						src={bgColor}
						alt="Fond coloré abstrait utilisé pour illustrer la propreté et la fraîcheur, avec des teintes douces et apaisantes."
						className="absolute z-0 top-0 left-0 size-full md:object-auto"
					/>

					<div className="space-y-4 relative">
						<h1 className="md:text-5xl text-3xl  font-heading">
							Contactez-nous!
						</h1>
						<p className="md:w-[34em] text-slate-400 text-lg">
							Nous contacter est très simple, vous pouvez nous appeler ou nous
							écrire au numéro de téléphone portable +225 05 05 40 48 66 ou nous
							envoyer un email à yemira5@yahoo.fr
						</p>
					</div>

					<Button
						asChild
						className="rounded-full cursor-pointer p-6 text-md font-heading text-md md:w-fit w-full relative"
					>
						<Link href={'https://wa.link/wa3emf'} className=" capitalize">
							Whatsapp
						</Link>
					</Button>
				</div>
			</div>
		</main>
	);
}
