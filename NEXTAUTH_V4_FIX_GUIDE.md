# NextAuth v4 Fix Guide

## 🚨 **Problem Description**

The build is currently failing with this error:
```
Type error: This expression is not callable.
Type 'typeof import("next-auth")' has no call signatures.
```

This occurs because:
- **NextAuth v4** has a completely different API than v3
- The current import and usage syntax is incompatible
- The build process cannot resolve the function calls properly

## 🔧 **Solution: Fix NextAuth v4 Compatibility**

### **Step 1: Update the Auth Configuration File**

Replace the content of `src/lib/auth.ts` with this NextAuth v4 compatible version:

```typescript
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: [
            'openid',
            'email',
            'profile',
            'https://www.googleapis.com/auth/gmail.readonly',
            'https://www.googleapis.com/auth/gmail.send',
            'https://www.googleapis.com/auth/gmail.modify',
            'https://www.googleapis.com/auth/documents',
            'https://www.googleapis.com/auth/spreadsheets',
            'https://www.googleapis.com/auth/calendar',
            'https://www.googleapis.com/auth/calendar.events',
            'https://www.googleapis.com/auth/drive',
            'https://www.googleapis.com/auth/drive.file',
            'https://www.googleapis.com/auth/analytics.edit',
            'https://www.googleapis.com/auth/analytics.readonly',
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
          ].join(' ')
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user }) {
      // Only allow specific admin email
      if (user.email === 'osinkakalaso.website@gmail.com') {
        return true
      }
      return false
    },
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
        token.refreshToken = account.refresh_token
        token.expiresAt = account.expires_at
      }
      return token
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider
      session.accessToken = token.accessToken
      session.refreshToken = token.refreshToken
      session.expiresAt = token.expiresAt
      return session
    }
  },
  pages: {
    signIn: '/admin/signin',
    error: '/admin/signin'
  },
  session: {
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
```

### **Step 2: Update Type Definitions**

Replace the content of `src/types/next-auth.d.ts` with:

```typescript
import 'next-auth'

declare module 'next-auth' {
  interface Session {
    accessToken?: string
    refreshToken?: string
    expiresAt?: number
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken?: string
    refreshToken?: string
    expiresAt?: number
  }
}
```

### **Step 3: Clean Build Cache**

Run these commands to clear any cached build artifacts:

```bash
# Stop the dev server
pkill -f "next dev"

# Remove build cache
rm -rf .next

# Clear npm cache (optional)
npm cache clean --force

# Reinstall dependencies
npm install
```

### **Step 4: Test the Build**

```bash
npm run build
```

If successful, you should see:
```
✓ Compiled successfully in 1000ms
```

### **Step 5: Start Development Server**

```bash
npm run dev
```

## 🔍 **Why This Happened**

1. **NextAuth v4 API Changes**: The library underwent significant API changes between v3 and v4
2. **Import Pattern**: The default export pattern changed
3. **Function Signatures**: The way NextAuth is called changed
4. **Type Compatibility**: TypeScript definitions needed updating

## ✅ **What This Fix Accomplishes**

- ✅ **Build Success**: Eliminates the TypeScript compilation error
- ✅ **Proper Imports**: Uses correct NextAuth v4 syntax
- ✅ **Type Safety**: Maintains proper TypeScript support
- ✅ **Functionality**: Preserves all existing OAuth functionality
- ✅ **Admin Access**: Maintains email-based access control

## 🚀 **Alternative: Downgrade to NextAuth v3**

If you prefer to use the older, more stable version:

```bash
npm uninstall next-auth
npm install next-auth@^3.29.0
```

Then use the original v3 syntax in your auth files.

## 📚 **NextAuth v4 Documentation**

For more information on NextAuth v4:
- [Official Migration Guide](https://next-auth.js.org/getting-started/upgrade-v4)
- [API Reference](https://next-auth.js.org/reference)
- [Configuration Options](https://next-auth.js.org/configuration)

## 🆘 **Troubleshooting**

If you still encounter issues:

1. **Check NextAuth Version**: `npm list next-auth`
2. **Verify Environment Variables**: Ensure `.env.local` is properly configured
3. **Clear All Caches**: Remove `.next`, `node_modules`, and reinstall
4. **Check Node Version**: Ensure you're using Node.js 16+ for NextAuth v4

---

**Note**: This fix maintains all your existing Google OAuth functionality while resolving the build compatibility issue.
