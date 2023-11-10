import NextCors from 'nextjs-cors'
import { NextApiRequest, NextApiResponse } from 'next'
import supertokens from 'supertokens-node'
import { ALLOWED_CORS_URLS } from './config'

// * 4. Important Capacitor note:
// * This authCors function is created to set up CORS configurations for Next.js API routes.
// * It is essential to call this function at the beginning of every API route.
// * The reason is that Capacitor, unlike traditional browsers, makes requests with different origin addresses.
// * For example, on an iPhone, the origin is "capacitor://localhost", while on an Android, it is "http://localhost".
// *
// * In the "capacitor.config" file, the server object allows you to change the hostname for Capacitor and specify a live-reload URL:
// *
// * server: {
// *   url: 'http://192.168.1.7:2001',
// *   cleartext: true,
// *   hostname: 'yourPRODurl', // Recommended for compatibility with Web APIs that require a secure context
// * },
// *
// * It is recommended to keep the hostname as its default to ensure compatibility with Web APIs that would otherwise
// * require a secure context, such as navigator.geolocation and MediaDevices.getUserMedia.
// *
// * When you add a live-reload URL in the server object, the domain changes accordingly.
// *
// * By specifying and including allowed origins in the ALLOWED_CORS_URLS array, we ensure that our
// * API routes are accessible only from the specified origins, which include Capacitor configurations,
// * local development environments, and deployed apps on various domains.
// * If experiencing CORS isues on Vercel: make sure that your website has no 'www' in the domain name, or change the config to include it.

export const authCors = async (req: NextApiRequest, res: NextApiResponse) => {
  await NextCors(req, res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: ALLOWED_CORS_URLS,
    credentials: true,
    allowedHeaders: ['content-type', ...supertokens.getAllCORSHeaders()],
  })
}
