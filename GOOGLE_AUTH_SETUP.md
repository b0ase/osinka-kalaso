# Google OAuth Authentication Setup

This guide will help you set up Google OAuth authentication for the Osinka Kalaso admin panel.

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# Google OAuth Configuration
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here

# NextAuth Configuration
NEXTAUTH_SECRET=your_nextauth_secret_here
NEXTAUTH_URL=https://osinkakalaso.website

# Supabase Configuration (existing)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

## Google Cloud Console Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the following APIs:
   - Gmail API
   - Google Docs API
   - Google Sheets API
   - Google Calendar API
   - Google Drive API
   - Google Analytics API

4. Create OAuth 2.0 credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth 2.0 Client IDs"
   - Choose "Web application"
   - Add authorized redirect URIs:
     - `https://osinkakalaso.website/api/auth/callback/google`
     - `http://localhost:3000/api/auth/callback/google` (for development)

5. Copy the Client ID and Client Secret to your `.env.local` file

## NextAuth Secret

Generate a secure random string for `NEXTAUTH_SECRET`:

```bash
openssl rand -base64 32
```

## Installation

Install the required dependencies:

```bash
npm install
```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Visit `/admin/signin` to access the admin signin page
3. Sign in with `osinkakalaso.website@gmail.com`
4. Access the admin dashboard at `/admin/dashboard`

## Features

- **Secure Authentication**: Only allows access from the specified admin email
- **Google Services Integration**: Direct access to Gmail, Docs, Sheets, Calendar, Drive, and Analytics
- **Protected Routes**: All admin routes are protected by authentication middleware
- **Session Management**: Secure JWT-based session handling

## Security Notes

- The admin email is hardcoded to `osinkakalaso.website@gmail.com`
- All admin routes are protected by middleware
- OAuth tokens are securely stored in JWT
- HTTPS is required in production

## Troubleshooting

1. **"Invalid redirect URI" error**: Ensure your redirect URI exactly matches what's configured in Google Cloud Console
2. **"Access denied" error**: Verify you're using the correct admin email address
3. **API errors**: Ensure all required Google APIs are enabled in your project
