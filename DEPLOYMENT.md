# Vercel Deployment Guide

## Fixed Issues

✅ **Vercel Output Directory Error**: Created `vercel.json` configuration file
✅ **NextAuth Setup**: Properly configured NextAuth.js with credentials provider
✅ **Login Flow**: Simplified authentication to use only NextAuth (removed Redux mixing)
✅ **App Router Compatibility**: NextAuth routes properly structured for Next.js 14 App Router
✅ **Build Error Fix**: Removed experimental optimizeCss feature causing critters dependency error
✅ **JavaScript Files Returning HTML**: Fixed Vercel routing configuration that was redirecting static assets

## Files Created/Modified

### New Files:

- `vercel.json` - Vercel deployment configuration
- `.vercelignore` - Files to ignore during deployment
- `DEPLOYMENT.md` - This deployment guide

### Modified Files:

- `next.config.mjs` - Added production optimizations
- `src/app/(auth)/login/page.tsx` - Simplified to use only NextAuth
- `.env.local` - Added NextAuth environment variables

## Vercel Deployment Steps

### 1. Environment Variables Setup

In your Vercel dashboard, add these environment variables:

```env
NEXTAUTH_SECRET=UYHvP0OlwUQ9UMZ8n3ZiNw8L4AZNVUgeHURkFd66+dU=
NEXT_PUBLIC_SERVER_URL=https://api.sarkargroupofcompanies.com/smd/api/v1
CLOUDINARY_CLOUD_NAME=djr5k6pf8
CLOUDINARY_API_KEY=962523899861995
CLOUDINARY_API_SECRET=8MqQ5VqDBHxveS3BYZsxJSRjwdU
CLOUDINARY_FOLDER_NAME=The_Sarkar_Group-SMD
```

**Important**:

- `NEXTAUTH_URL` will be automatically set by Vercel
- Make sure to use your production server URL for `NEXT_PUBLIC_SERVER_URL`

### 2. Build Settings

Vercel should automatically detect your Next.js project. If needed, configure:

- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: Leave empty (auto-detected)
- **Install Command**: `npm install`

### 3. Domain Configuration

After deployment, if using a custom domain:

1. Add your domain in Vercel dashboard
2. Update `NEXTAUTH_URL` environment variable to your production domain

## Authentication Flow

The authentication now works as follows:

1. User enters credentials on `/login`
2. NextAuth calls your Express server at `/user/login`
3. If successful, JWT token is decoded and user info is stored in NextAuth session
4. User is redirected to appropriate dashboard based on role
5. Middleware protects routes using NextAuth session

## Troubleshooting

### Common Issues:

1. **JavaScript Files Returning HTML (Uncaught SyntaxError: Unexpected token '<')**

   - **Cause**: Vercel routing configuration redirecting static assets to root
   - **Solution**: Remove or fix the `routes` section in `vercel.json`
   - **Fixed**: Removed problematic routing that caught all requests including `/_next/static/*`

2. **404 on `/api/auth/session`**

   - Ensure NextAuth routes are in `src/app/api/auth/[...nextauth]/`
   - Check that `route.ts` exports both GET and POST handlers

3. **Environment Variables Not Working**

   - Verify all environment variables are set in Vercel dashboard
   - Redeploy after adding environment variables

4. **Authentication Fails**

   - Check that your Express server is accessible from Vercel
   - Verify CORS settings on your Express server
   - Check server logs for authentication endpoint errors

5. **Redirect Issues**
   - Ensure `NEXTAUTH_URL` matches your deployed domain
   - Check middleware configuration for protected routes

### Testing Locally

Before deploying, test locally:

```bash
npm run build
npm start
```

This will run the production build locally to catch any build-time issues.

## Next Steps

1. Deploy to Vercel
2. Test authentication flow
3. Verify role-based routing works
4. Test all protected routes
5. Monitor for any runtime errors

## Support

If you encounter issues:

1. Check Vercel deployment logs
2. Check browser console for client-side errors
3. Verify Express server is responding correctly
4. Test authentication endpoints directly
