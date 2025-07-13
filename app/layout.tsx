import type { Metadata } from 'next';
import './globals.css';
import NavBar from '@/components/custom/NavBar';
import Whatsapp from '@/components/custom/Whatsapp';
import Footer from '@/components/custom/Footer';

export const metadata: Metadata = {
	title: 'Nettoyage en Profondeur - Deep Cleaning',
	description:
		'Nous sommes une entreprise spécialisée dans le nettoyage en profondeur avec 10 ans d’expérience. Depuis 2010, nous travaillons sur des projets résidentiels, commerciaux et industriels autour de la Ville de Mexico. Aujourd’hui, nous disposons d’un portefeuille important de clients satisfaits, générant un impact positif dans leur vie. Notre excellence dans le service client, la ponctualité, la qualité de nos machines et de nos produits nous distinguent. Tout cela est possible grâce à notre personnel hautement qualifié.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`antialiased font-body relative`}>
				<NavBar />
				<main className="flex flex-col min-h-screen w-full ">
					<div className="flex flex-col">{children}</div>
				</main>

				<Footer />

				<Whatsapp />
			</body>
		</html>
	);
}