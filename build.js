import * as esbuild from 'esbuild';

const get = async () =>
    await esbuild.build({
        entryPoints: ['src/index.ts'],
        outdir: 'dist',
        minify: true,
        platform:"browser"
 })

          get();