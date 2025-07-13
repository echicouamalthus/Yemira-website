'use client';

// import { EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import React from 'react';
import { usePrevNextButtons } from './EmblaCarouselArrowButton';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const TestimonialsList = [
	{
		content:
			"Le service était excellent et l'équipe très aimable et attentionnée. Je suis très satisfaite du service, merci à toute l'équipe de Deep Cleaning.",
		username: 'sofia kouassi',
		type: 'Résidentiel',
	},
	{
		content:
			'Travail très professionnel, ponctuel et efficace. Je recommande vivement leurs services pour tout nettoyage en profondeur.',
		username: 'jean dupont',
		type: 'Commercial',
	},
	{
		content:
			"J'ai fait appel à Deep Cleaning pour mon entreprise et le résultat a dépassé mes attentes. L'équipe est sérieuse et le suivi client est irréprochable.",
		username: 'marie leroy',
		type: 'Industriel',
	},
	{
		content:
			"Service rapide et de grande qualité. Mon appartement n'a jamais été aussi propre. Merci encore !",
		username: 'luc martin',
		type: 'Résidentiel',
	},
	{
		content:
			"Personnel très sympathique et à l'écoute. Le nettoyage a été fait avec soin et professionnalisme.",
		username: 'emma dubois',
		type: 'Résidentiel',
	},
];

export default function Testimonials() {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: 'center',
		dragFree: false,
		containScroll: undefined,
	});

	const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

	return (
		<div className="bg-primary text-white">
			<div className="py-24 space-y-8">
				<div className="flex flex-col gap-3 items-center max-w-2xl mx-auto">
					<h1 className="text-5xl font-heading text-center md:text-left">
						Ce que disent nos clients
					</h1>
					<p className="text-center md:px-0 px-4 text-lg">
						Pour nous, la satisfaction de nos clients est notre plus grande
						source de joie. Voici quelques-uns de ceux qui nous ont fait sourire
						avec leurs commentaires.
					</p>
				</div>

				<div className="relative">
					<div className="embla" ref={emblaRef}>
						<div className="embla__container">
							{TestimonialsList.map((t, index) => {
								return (
									<div
										className="embla__slide max-w-4xl m-auto p-4"
										key={index}
									>
										<div className=" flex flex-col justify-center items-center h-88 rounded-lg p-12 gap-12 bg-white">
											<p className="text-slate-400 md:text-lg text-center">
												&quot;{t.content}&quot;
											</p>

											<div className="flex gap-2">
												<div className="size-12 rounded-full relative overflow-hidden">
													<Image
														className="absolute size-full object-cover"
														src={
															'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
														}
														alt="resident client"
														width={900}
														height={900}
													/>
												</div>

												<div className="flex flex-col">
													<h1 className="capitalize text-black font-semibold">
														{t.username}
													</h1>
													<p className="text-slate-400">{t.type}</p>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>

					<div className="">
						<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl mx-auto flex flex-row-reverse justify-between items-center h-full">
							<div
								onClick={onNextButtonClick}
								className="bg-white drop-shadow-2xl size-fit rounded-full p-3"
							>
								<ArrowRight className="text-black" />
							</div>
							<div
								onClick={onPrevButtonClick}
								className="bg-white drop-shadow-2xl size-fit rounded-full p-3"
							>
								<ArrowLeft className="text-black" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
