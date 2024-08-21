import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TOP Apps',
    short_name: 'TOP Apps',
    // description: 'An example of how to use Serwist in Next.js',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/icons/icon-512x512.png',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/android-chrome-384x384.png',
        sizes: '384x384',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
