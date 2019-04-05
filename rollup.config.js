import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'
import path from 'path';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
    path.resolve( __dirname, 'src/*.spec.*' )
  ],
plugins: [
    typescript({
      typescript: require('typescript'),
    }),
  ],
}