//import { Site } from '@/config/site';

/**
 * Return relative path from asset with the proper site slug (i.e. en-uk, en-us, etc)
 * @param file Path to the file from the public folder (i.e. "/images/logo.png") as you would normally add.
 * @returns Provided path with site slug (i.e. "/en-us/images/logo.png")
 */
export function getAssetPath(file: string): string {
	//return `/${Site.slug}${file}`;
	return file;
}
