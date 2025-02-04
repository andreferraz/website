/**
 * Remove HTML tags from a string
 * @param text Original text with HTML tags
 */
export function stripHtmlTags(text: string): string {
	return text.replace(/(<([^>]+)>)/gi, '');
}

/**
 * Returns a path without the leading and trailing escaped slashes
 * @param path URL path
 */
export function trimPathSlashes(path: string): string {
	return path.replace(/(^\\?\/)|(\\?\/$)/g, '');
}
