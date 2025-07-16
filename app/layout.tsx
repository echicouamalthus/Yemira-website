import type { Metadata } from 'next';
import './globals.css';
import NavBar from '@/components/custom/NavBar';
import Whatsapp from '@/components/custom/Whatsapp';
import Footer from '@/components/custom/Footer';
import { constructMetada } from '@/lib/utils';

export const metadata = constructMetada;

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
