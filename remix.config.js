/** @type {import('@remix-run/dev').AppConfig} */
export default {
  server: './server.ts',
  vite: true, // ensure Remix uses Vite
  serverBuildTarget: 'vercel',
  ignoredRouteFiles: ['**/.*'],
  future: {
    future: {
      v2_dev: true,
      v2_routeConvention: true,
    },
  },
};
