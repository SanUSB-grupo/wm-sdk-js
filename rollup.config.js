import buble from 'rollup-plugin-buble';
import nodeResolve from 'rollup-plugin-node-resolve';
import istanbul from 'rollup-plugin-istanbul';

let pkg = require('./package.json');
var external = process.env.DEPS ? Object.keys(pkg.dependencies) : null;
var format = process.env.DEPS ? 'umd' : process.env.ES ? 'es' : 'cjs';

const plugins = [
	buble({ exclude: 'node_modules/**' }),
	nodeResolve({ jsnext: true, externals: external }),
]

if (process.env.BUILD !== 'production') {
  plugins.push(istanbul({
    exclude: ['test/**/*', 'node_modules/**/*']
  }));
}

export default {
	entry: 'src/index.js',
	dest: 'dist/wireless-monitor.' + format + '.js',
	format: format,
	exports: process.env.ES ? 'named' : 'default',
	plugins: plugins,
	moduleName: 'Monitor',
	external: external,
	sourceMap: true
};
