// api/handler.ts
import { createRequestHandler } from '@remix-run/vercel';
import * as build from '../build/server';

export default createRequestHandler({ build });
