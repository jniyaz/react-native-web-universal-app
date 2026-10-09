/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  transpilePackages: [
    'solito',
    'moti',
    'nativewind',
    'react-native-reanimated',
    'react-native-css-interop',
    'app',
    'react-native',
    'react-native-web',
    '@react-native/assets-registry',
    'expo-modules-core',
    'expo-linking',
    'react-native-svg',
    'react-native-heroicons',
  ],
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native': 'react-native-web',
      'react-native$': 'react-native-web',
      '@react-native/assets-registry/registry$': 'react-native-web/dist/cjs/modules/AssetRegistry',
      '@react-native/assets-registry/registry': 'react-native-web/dist/cjs/modules/AssetRegistry',
      '@react-native/assets-registry': 'react-native-web/dist/cjs/modules/AssetRegistry',
    }
    config.resolve.extensions = [
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      ...(config.resolve.extensions || []),
    ]
    return config
  },
}

module.exports = nextConfig
