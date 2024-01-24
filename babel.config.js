module.exports = function(api) {
	api.cache(true);

	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				require.resolve('babel-plugin-module-resolver'),
				{
					root: ['./src'],
					alias: {
						'@requestum/general': './src/General',
						'@requestum/navigation': './src/Navigation',
						'@requestum/screens': './src/Screens',
						'@requestum/states': './src/General/States',
					},
				},
			],
			'@babel/plugin-proposal-export-namespace-from',
			'react-native-reanimated/plugin',
		],
	};
};
