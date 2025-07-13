'use client';

import React from 'react';
import Image from 'next/image';
// import PhotoAlbum from 'react-photo-album';
import Masonry from 'react-masonry-css';
import { Button } from '../ui/button';
import Link from 'next/link';

const breakpointColumnsObj = {
	default: 3,
	1100: 2,
	700: 2,
};

export default function Photos() {
	const images = [
		'https://images.pexels.com/photos/713297/pexels-photo-713297.jpeg',
		'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg',
		'https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg',
		'https://images.pexels.com/photos/245219/pexels-photo-245219.jpeg',
		'https://images.pexels.com/photos/3616746/pexels-photo-3616746.jpeg',
		'https://images.pexels.com/photos/358592/pexels-photo-358592.jpeg',
		'https://images.pexels.com/photos/4239145/pexels-photo-4239145.jpeg',
		'https://images.pexels.com/photos/4099468/pexels-photo-4099468.jpeg',
		'https://images.pexels.com/photos/271631/pexels-photo-271631.jpeg',
		'https://images.pexels.com/photos/4099260/pexels-photo-4099260.jpeg',
	];

	return (
		<div className="py-28 space-y-16">
			<div className="flex flex-col gap-3 items-center max-w-2xl mx-auto">
				<h1 className="text-5xl font-heading text-center md:text-left">
					Des Projets <span className="text-primary"> irréprochables</span>
				</h1>
				<p className="text-center md:px-0 px-4 md:text-lg text-slate-400">
					Un travail de qualité se doit d&apso;être démontré. Nos clients sont
					témoins de notre engagement. La preuve : la propreté est notre art.  
				</p>
			</div>

			<div className="p-4">
				<Masonry
					breakpointCols={breakpointColumnsObj}
					className="my-masonry-grid"
					columnClassName="my-masonry-grid_column"
				>
					{images.map((src, i) => (
						<Image
							key={i}
							src={src}
							alt={`image ${i}`}
							className="mb-4 w-full"
							width={900}
							height={900}
						/>
					))}
				</Masonry>
			</div>

			<Button
				asChild
				className="rounded-full cursor-pointer p-6 text-md font-heading text-md w-fit relative mx-auto flex justify-center"
			>
				<Link href={'#'} className="">
					Contactez-nous
				</Link>
			</Button>
		</div>
	);
}
