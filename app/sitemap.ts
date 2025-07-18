import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	return [
		{
			url: 'https://yemira-website.vercel.app',
			lastModified: new Date(),
		},
	];
}
