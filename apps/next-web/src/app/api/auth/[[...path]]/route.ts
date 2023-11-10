import SuperTokens from 'supertokens-node'
import { getAppDirRequestHandler } from 'supertokens-node/nextjs'
import { NextRequest, NextResponse } from 'next/server'
import { ALLOWED_CORS_URLS } from 'lib/utils/config'
import { ensureSuperTokensInit } from '../../../../../config/backendConfig'
import cors, { CorsOptions } from './cors';

ensureSuperTokensInit();

const corsOptions: CorsOptions = {
    origin: ALLOWED_CORS_URLS,
    credentials: true,
    allowedHeaders: ["content-type", ...SuperTokens.getAllCORSHeaders()],
};
const handleCall = getAppDirRequestHandler(NextResponse);
async function handleCallWithCORS(request: NextRequest) {
    const res = await handleCall(request);
    return cors(request, res, corsOptions);
}

export async function OPTIONS(request: NextRequest) {
  return cors(request, new NextResponse(null, { status: 204 }), corsOptions);
}

export async function GET(request: NextRequest) {
  const res = await handleCallWithCORS(request)
  if (!res.headers.has('Cache-Control')) {
    // This is needed for production deployments with Vercel
    res.headers.set(
      'Cache-Control',
      'no-cache, no-store, max-age=0, must-revalidate',
    )
  }
  return res
}

export async function POST(request: NextRequest) {
  return handleCallWithCORS(request)
}

export async function DELETE(request: NextRequest) {
  return handleCallWithCORS(request)
}

export async function PUT(request: NextRequest) {
  return handleCallWithCORS(request)
}

export async function PATCH(request: NextRequest) {
  return handleCallWithCORS(request)
}

export async function HEAD(request: NextRequest) {
  return handleCallWithCORS(request)
}
