# YOG SANYOG – Studio & Online Academy Frontend

YOG SANYOG is a modern frontend web application built for a premier yoga studio in West Bengal. It serves online course buyers and offline centre students, alongside a studio admin portal.

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite + TypeScript (Strict Mode)
- **Styling**: Tailwind CSS with custom design tokens (Warm Terracotta, Forest Sage, Linen surface)
- **Routing**: React Router v6 with `React.lazy` route code-splitting
- **Data Fetching**: TanStack Query (v5)
- **Form Management**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Deployment**: Cloudflare Pages (`public/_redirects`)

---

## 📁 Directory Architecture

```
Yog_Sanyog/
├── public/
│   ├── _redirects            # Cloudflare Pages SPA fallback redirect
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ui/               # Custom UI primitives (Button, Input, Card, Dialog, Drawer, DataTable, etc.)
│   │   ├── DevRoleSwitcher.tsx
│   │   └── RequireAuth.tsx   # Role-based route guard
│   ├── content/
│   │   ├── en.ts             # Centralized UI text dictionary (i18n ready)
│   │   └── index.ts
│   ├── hooks/
│   │   ├── usePageMeta.ts    # Per-page <title> and meta description management
│   │   └── useToast.ts       # Accessible notification toast hook
│   ├── layouts/
│   │   ├── PublicLayout.tsx  # Header, nav, footer, mobile drawer
│   │   ├── StudentLayout.tsx # Desktop sidebar + mobile bottom nav
│   │   ├── AdminLayout.tsx   # Admin portal layout
│   │   └── AuthLayout.tsx    # Centered card layout for login/signup
│   ├── lib/
│   │   ├── queryClient.ts    # TanStack Query client configuration
│   │   └── utils.ts          # Utility functions (cn, formatCurrency, formatDate)
│   ├── pages/                # Lazy-loaded page components
│   │   ├── public/           # Home, About, Centre, Courses, Contact, Legal, 404
│   │   ├── auth/             # Login, Signup, Forgot Password, Accept Invite
│   │   ├── checkout/         # Order summary, Payment stub, Success/Failed
│   │   ├── student/          # Overview, Batch, Fees, Payments, Announcements, Profile
│   │   ├── learn/            # My Courses, Course Player
│   │   └── admin/            # Overview, Students, Batches, Fees, Courses, Orders, Announcements, Leads
│   ├── services/             # Typed API service interface layer (stubs)
│   ├── mocks/                # In-memory mock data & simulated latency (for future phases)
│   ├── types/                # Domain TypeScript interfaces
│   ├── App.tsx               # Main router & provider tree
│   ├── index.css             # Tailwind base styles, typography clamp(), focus rings
│   └── main.tsx
├── .eslintrc.cjs
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Installation & Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Type-check & build for production
npm run build

# Run ESLint validation (zero warning policy)
npm run lint
```

---

## 🎭 Dev Role Switcher

In development mode (`VITE_DEV_TOOLS=true`), a floating role pill appears at the bottom-left corner of the screen. You can toggle between:

1. **Visitor**: Previews the public website, course catalog, studio centre info, and checkout stub.
2. **Student**: Previews the student dashboard, batch details, fee summaries, payment receipts, and learner course player.
3. **Admin**: Previews the studio management portal, student roster, batch CRUD, fee tracking, and incoming leads.

> **Production Note**: Setting `VITE_DEV_TOOLS=false` in your environment variables automatically removes the Dev Role Switcher from production builds.

---

## 🔌 Swapping Mock Services for Real Backend

All components access data through typed async functions in `src/services/` (e.g. `courseService.list()`, `studentService.getMyFees()`, `authService.login()`).

To replace mock adapters with a real backend or Supabase/REST API:
1. Keep the interface definitions in `src/types/` unchanged.
2. Create a real implementation file (e.g., `src/services/api/courseService.ts`) making `fetch()` or SDK calls to your backend API.
3. Update the export bindings in `src/services/index.ts` to point to the real API services instead of mock adapters.
