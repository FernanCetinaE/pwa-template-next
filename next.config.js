/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const OfflinePlugin = require('offline-plugin');

const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    runtimeCaching,
    disable: process.env.NODE_ENV === 'development'
})

const nextConfig = withPWA({
  reactStrictMode: true
})

module.exports = nextConfig