# Tarifberater24

Помагаме на българи в Германия да спестяват пари от своите договори за ток, газ и интернет.

## MVP Features

- **Homepage**: Hero section with value proposition and CTA
- **Service Selection**: Choose between Electricity, Gas, or Internet
- **Smart Calculators**: Estimate annual savings based on postal code and current costs
- **Lead Capture**: Collect contact information from interested users
- **Privacy & Legal Pages**: GDPR-compliant privacy policy, terms, and imprint
- **Mobile-First Design**: Responsive, modern interface with premium feel

## Technology Stack

- **Frontend**: Next.js 16, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Supabase PostgreSQL (ready to integrate)
- **Hosting**: Vercel

## Getting Started

### Prerequisites

- Node.js 22.12.0+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── calculator/        # Calculator pages
│   ├── lead-capture/      # Lead capture form
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   ├── imprint/           # Legal imprint
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
├── features/              # Feature components
├── services/              # Business logic
├── types/                 # TypeScript types
└── styles/                # Global styles
```

## Key Features Explained

### Calculator Logic

The calculator uses business rules to estimate potential savings:
- **Electricity**: Based on consumption (kWh) and current rate vs market average
- **Gas**: Based on heating consumption and market rates
- **Internet**: Based on current speed and market rates

### Lead Capture

Users who see their savings estimate can submit contact information to become a qualified lead.

Leads are stored with:
- Personal information (name, email, phone)
- Service type selected
- Calculator inputs
- Estimated savings
- GDPR consent

### API Integration

The `/api/leads` endpoint handles lead submissions. Currently logs to console. Ready to integrate with Supabase.

## Deployment

1. Push to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

## Environment Variables

Required for production:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

## Legal & Compliance

- ✅ GDPR Privacy Policy
- ✅ Terms of Service
- ✅ Legal Imprint (German requirement)
- ✅ GDPR consent checkbox on lead form

## Future Enhancements

- Supabase integration for lead storage
- Email notifications to leads
- Admin dashboard to manage leads
- AI-powered recommendations
- Additional service categories (Insurance, etc.)
- Multi-language support
