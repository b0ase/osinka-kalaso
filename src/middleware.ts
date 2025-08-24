import { withAuth } from 'next-auth/middleware'

export default withAuth(
  function middleware() {
    // Add any additional middleware logic here if needed
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        // Only allow access if user is authenticated and has the correct email
        return token?.email === 'osinkakalaso.website@gmail.com'
      },
    },
  }
)

export const config = {
  matcher: ['/admin/dashboard/:path*']
}
