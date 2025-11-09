<<<<<<< HEAD
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
=======
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
>>>>>>> 1863d758f1e54ce64fb47576063f85b1a1e4c00d

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
<<<<<<< HEAD
 * @type {import('metro-config').MetroConfig}
=======
 * @type {import('@react-native/metro-config').MetroConfig}
>>>>>>> 1863d758f1e54ce64fb47576063f85b1a1e4c00d
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
