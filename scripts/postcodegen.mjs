import { rm } from 'node:fs/promises';

const saelemTsFile = new URL('../generated/ts/saelem.ts', import.meta.url);

const options = { force: true, recursive: true };

await Promise.all([
	rm(saelemTsFile, options) //
]);
