import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Metadata } from 'next';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function constructMetada({
	title = "YEMIRA Service Nettoyage - 10 ans d'expertise et d'éfficacité",
	description = "Yemira Services Nettoyages est une entreprise spécialisée dans le nettoyage en profondeur, forte de 10 ans d'expérience. Nous proposons des services de qualité pour les secteurs résidentiel, commercial et industriel, en mettant l'accent sur la satisfaction de nos clients et le professionnalisme de notre équipe.",
	icons = '/favicon.ico',
	image = '/YEMIRA Service nettoyage og.png',
}: {
	title?: string;
	description?: string;
	icons: string;
	image: string;
}): Metadata {
	return {
		title,
		description,
		icons,
		metadataBase: new URL('https://yemira-website.vercel.app'),
		openGraph: {
			title,
			description,
			url: 'https://yemira-website.vercel.app',
			siteName: 'YEMIRA service',
			images: [
				{
					url: image,
					// width: 1200,
					// height: 630,
					alt: 'Image illustrant un service de nettoyage professionnel, mettant en avant propreté et efficacité',
				},
			],
			locale: 'fr_FR',
			type: 'website',
		},
		twitter: {
			card: 'summary_large_image',
			creator: '@echicouamalthus',
			title,
			description,
			images: [image],
		},
		alternates: {
			canonical: 'https://yemira-website.vercel.app/',
		},
	};
}

// export function constructMetadata({
// 	title = 'CaseGadget - coques de téléphone personnalisées de haute qualité',
// 	description = 'Créez des coques de téléphone personnalisées de haute qualité en quelques secondes',
// 	icons = '/favicon.ico',
// 	image = '/image descriptif du site .png',
// }: {
// 	title?: string;
// 	description?: string;
// 	image: string;
// 	icons: string;
// }): Metadata {
// 	return {
// 		title,
// 		description,
// 		openGraph: {
// 			title,
// 			description,
// 			images: [{ url: image }],
// 		},
// 		twitter: {
// 			card: 'summary_large_image',
// 			title,
// 			description,
// 			images: [image],
// 			creator: '@echicouamalthus',
// 		},
// 		icons,
// 		metadataBase: new URL('https://casegadgetdev.vercel.app/'),
// 	};
// }
