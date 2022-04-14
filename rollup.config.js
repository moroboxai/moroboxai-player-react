import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

const packageJson = require('./package.json');

const commonPlugins = (tsconfig) => [
  external(),
  resolve,
  commonjs(),
  typescript({tsconfig: './tsconfig.json', ...tsconfig}),
  terser(),
];

export default [
  {
    input: 'src/index.ts',
    output: {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    plugins: commonPlugins({}),
  },
  {
    input: 'src/index.ts',
    output: {
        dir: 'lib/es',
      format: 'es',
      preserveModules: true,
      sourcemap: true,
    },
    plugins: commonPlugins({
      declaration: true,
      declarationDir: 'lib/es'
    }),
  }
];