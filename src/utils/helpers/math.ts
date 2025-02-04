/**
 * Return the value limited to the min and max numbers
 */
export function clamp(value: number, min: number, max: number): number {
	return value > max ? max : value < min ? min : value;
}
