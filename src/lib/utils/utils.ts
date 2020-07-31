/**
 * @license MIT
 * @copyright Copyright (c) 2017-2020 BDISTIN. All rights reserved. MIT license.
 * @source {@link https://github.com/dirigeants/utils}
 */
const TOTITLECASE = /[A-Za-zÀ-ÖØ-öø-ÿ]\S*/g;

/**
 * Converts a string to Title Case
 * @param str The string to title case
 * @license MIT
 * @copyright Copyright (c) 2017-2020 BDISTIN. All rights reserved. MIT license.
 * @source {@link https://github.com/dirigeants/utils}
 */
export function toTitleCase(str: string): string {
	return str.replace(TOTITLECASE, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
