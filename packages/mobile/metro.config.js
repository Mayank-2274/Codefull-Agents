// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Add additional extensions for resolving
config.resolver.sourceExts = ['js', 'jsx', 'json', 'ts', 'tsx', 'cjs', 'mjs'];

// Watch for changes in src directory
config.watchFolders = [
  path.resolve(__dirname, 'src'),
];

// Set project root
config.projectRoot = __dirname;

// Allow symlinks in node_modules (if any)
config.resolver.resolveRequest = (context, moduleName, platform) => {
  // For debugging if needed
  // console.log(`Resolving: ${moduleName}`);
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;
