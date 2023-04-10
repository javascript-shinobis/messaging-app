/* eslint-disable @typescript-eslint/no-var-requires */
const { build } = require('esbuild');

build({
  entryPoints: ['server/server.ts'],
  outdir: './server/build/',
  platform: 'node',
  target: 'node16',
  bundle: true,
  sourcemap: true,
}).catch(() => process.exit(1));
