# Osinka Kalaso Onion Farm Project Website

A comprehensive Next.js website for the Osinka Kalaso Onion Farm project in Kenya, focusing on sustainable agriculture, water access, and community development.

## 🌱 Project Overview

The Osinka Kalaso Onion Farm project is dedicated to empowering Kenyan farmers through sustainable onion cultivation and water access. This website serves as a platform to:

- Showcase the onion farming project and its impact
- Highlight the critical water access initiative (borehole drilling)
- Explain the economics of onion farming in Kenya
- Provide donation and support opportunities
- Share stories from local farmers and the community

## 🚀 Features

### Core Pages
- **Homepage**: Hero section, project overview, water project highlights, economics summary
- **About**: Project story, mission & values, team information, impact metrics
- **Water Project**: Detailed borehole project information, technical specifications, timeline
- **Economics**: Comprehensive analysis of onion farming economics, market analysis, profitability
- **Gallery**: Visual showcase of onions, farmers, and farm operations
- **Contact**: Contact form, team information, FAQ section
- **Donate**: Donation form, project progress tracking, impact breakdown

### Key Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Forms, progress bars, donation options
- **SEO Optimized**: Meta tags, structured content, semantic HTML
- **Accessibility**: ARIA labels, keyboard navigation, screen reader friendly

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Emoji icons and custom SVG
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd osinka-kalaso
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── donate/
│   │   └── page.tsx          # Donation page
│   ├── economics/
│   │   └── page.tsx          # Economics page
│   ├── gallery/
│   │   └── page.tsx          # Gallery page
│   ├── water-project/
│   │   └── page.tsx          # Water project page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage
├── components/
│   └── Navigation.tsx        # Navigation component
```

## 🎨 Design System

### Color Palette
- **Primary Green**: `#16a34a` (Green-600)
- **Secondary Blue**: `#2563eb` (Blue-600)
- **Accent Colors**: Various shades of green, blue, and gray
- **Background**: White, light gray, and colored sections

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights with responsive sizing
- **Body Text**: Regular weight with good readability

### Components
- **Cards**: Rounded corners, subtle shadows, hover effects
- **Buttons**: Consistent styling with hover states
- **Forms**: Clean inputs with focus states
- **Navigation**: Fixed header with mobile menu

## 📊 Content Sections

### Water Project Focus
- **Borehole Drilling**: KES 2,500,000
- **Solar Pump System**: KES 800,000
- **Water Storage**: KES 600,000
- **Irrigation System**: KES 500,000
- **Training & Maintenance**: KES 600,000
- **Total Project Cost**: KES 5,000,000

### Economic Analysis
- **Annual Revenue Potential**: KES 3,500,000 per acre
- **Profit Margin**: 89%
- **Multiple Harvests**: 2-3 cycles per year
- **Market Demand**: 500,000 tons annually in Kenya

### Community Impact
- **Families Served**: 100+
- **Farmers Trained**: 50+
- **Acres Under Cultivation**: 25
- **Health Improvements**: 60% reduction in waterborne diseases

## 🔧 Customization

### Adding Real Images
Replace emoji placeholders with actual images:

1. Add images to `public/images/` directory
2. Import and use Next.js `Image` component
3. Update image paths in respective components

### Updating Content
- Edit text content directly in page components
- Update contact information in navigation and contact pages
- Modify donation amounts and project costs as needed

### Styling Changes
- Modify Tailwind classes in components
- Update color scheme in `tailwind.config.js`
- Add custom CSS in `globals.css`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Custom domain configuration available

### Other Platforms
- **Netlify**: Drag and drop build folder
- **AWS S3**: Static website hosting
- **GitHub Pages**: Static site deployment

## 📈 SEO Optimization

- Meta tags for all pages
- Structured data markup
- Semantic HTML elements
- Optimized images and alt text
- Fast loading times
- Mobile-friendly design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for the Osinka Kalaso Onion Farm project. All rights reserved.

## 📞 Support

For questions or support regarding the website:
- Email: info@osinkalaso.website
- Project Website: [Osinka Kalaso](https://osinkakalaso.org)

---

**Built with ❤️ for sustainable agriculture and community development in Kenya**
