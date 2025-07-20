# Melon Shop - Modern E-commerce

A modern e-commerce application built with React, TypeScript, Tailwind CSS, and Zustand for state management.

## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design with dark/light theme support
- **Product Management**: Browse, search, and filter products
- **Shopping Cart**: Add/remove items, update quantities, persistent storage
- **Wishlist**: Save favorite products for later
- **Checkout Flow**: Complete purchase process with order summary
- **State Management**: Zustand for client-side state, React Query for server state
- **Type Safety**: Full TypeScript support with comprehensive type definitions

## 📁 Project Structure

```text
src/
├── components/          # React components
│   ├── features/        # Feature-specific components
│   │   ├── about/       # About page components
│   │   ├── auth/        # Authentication components
│   │   ├── cart/        # Shopping cart components
│   │   ├── checkout/    # Checkout flow components
│   │   ├── collections/ # Collection/category components
│   │   ├── home/        # Home page components
│   │   ├── product/     # Product detail components
│   │   ├── shop/        # Shop/product listing components
│   │   └── wishlist/    # Wishlist components
│   ├── layout/          # Layout components (Header, Footer, etc.)
│   └── ui/              # Reusable UI components
├── data/                # Mock data
│   ├── products.ts      # Product data
│   ├── categories.ts    # Category data
│   ├── banners.ts       # Banner data
│   ├── testimonials.ts  # Testimonial data
│   └── orders.ts        # Order data
├── hooks/               # Custom React hooks
│   ├── use-products.ts  # Product-related queries
│   ├── use-ui-data.ts   # UI data queries
│   ├── use-cart.tsx     # Cart hook (legacy)
│   ├── use-mobile.ts    # Mobile detection hook
│   └── index.ts         # Hook exports
├── lib/                 # Utilities and stores
│   ├── cart-store.ts    # Zustand cart store
│   ├── wishlist-store.ts # Zustand wishlist store
│   ├── cart-provider.tsx # Legacy cart provider
│   ├── theme-provider.tsx # Theme provider
│   ├── theme-toggle.tsx # Theme toggle component
│   ├── scroll-top.tsx   # Scroll to top component
│   ├── utils.ts         # Utility functions
│   └── index.ts         # Library exports
├── pages/               # Page components
├── routes/              # Routing configuration
├── services/            # API services
│   └── api.ts           # Mock API functions
└── types/               # TypeScript type definitions
    ├── product.types.ts # Product-related types
    ├── cart.types.ts    # Cart-related types
    ├── wishlist.types.ts # Wishlist-related types
    ├── order.types.ts   # Order-related types
    ├── user.types.ts    # User-related types
    ├── checkout.types.ts # Checkout-related types
    ├── ui.types.ts      # UI component types
    └── api.types.ts     # API response types
```

## 🛠 Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS 4, CSS Variables
- **State Management**: Zustand, React Query (TanStack Query)
- **UI Components**: Radix UI primitives, custom components
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Notifications**: Sonner

## 📦 State Management

### Zustand Stores

- **Cart Store** (`src/lib/cart-store.ts`): Manages shopping cart state
  - Add/remove items
  - Update quantities
  - Calculate totals
  - Persistent storage

- **Wishlist Store** (`src/lib/wishlist-store.ts`): Manages wishlist state
  - Add/remove items
  - Check if item is in wishlist
  - Persistent storage

### React Query Hooks

- **useProducts**: Fetch and paginate products
- **useProduct**: Fetch single product details
- **useProductsByCategory**: Filter products by category
- **useSearchProducts**: Search products
- **useBanners**: Fetch banner data
- **useTestimonials**: Fetch testimonial data
- **useCategories**: Fetch category data

## 🎯 Key Features Implementation

### Shopping Cart Flow

1. **Add to Cart**: Products can be added from product cards or detail pages
2. **Cart Management**: View, update quantities, remove items
3. **Checkout Process**: Address, payment, order summary
4. **Order Confirmation**: Success page with order details

### Wishlist Management

1. **Add to Wishlist**: Heart icon on product cards
2. **Wishlist Page**: View all saved items
3. **Move to Cart**: Convert wishlist items to cart items

### Product Management

1. **Product Listing**: Grid/list views with pagination
2. **Product Details**: Full product information with gallery
3. **Search & Filter**: Find products by category, price, etc.
4. **Related Products**: Suggestions based on current product

## 🔧 Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## 📝 Data Structure

### Products

```typescript
interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  badge?: string
  description: string
  features: string[]
  sizes: string[]
  colors: string[]
  category?: string
  inStock: boolean
  sku?: string
  weight?: number
  dimensions?: {
    length: number
    width: number
    height: number
  }
  tags?: string[]
  createdAt?: string
  updatedAt?: string
}
```

## Cart Items

```typescript
interface CartItem {
  id: string
  productId: number
  name: string
  price: number
  image: string
  quantity: number
  size: string
  color: string
  sku?: string
}
```

### Wishlist Items

```typescript
interface WishlistItem {
  id: number
  productId: number
  name: string
  price: number
  image: string
  inStock: boolean
  addedAt: string
  product?: {
    rating: number
    reviews: number
    badge?: string
    originalPrice?: number
  }
}
```

## 🔄 API Integration

The application is designed to easily switch from mock data to real API endpoints. All data fetching is abstracted through React Query hooks, making it simple to replace mock functions with actual API calls.

### Mock API Structure

- `productsApi`: Product-related operations
- `categoriesApi`: Category management
- `uiApi`: UI data (banners, testimonials)
- `ordersApi`: Order processing
- `cartApi`: Cart persistence
- `wishlistApi`: Wishlist persistence

## 🎨 Theming

The application supports both light and dark themes using CSS variables and Tailwind CSS. Theme switching is handled by the `ThemeProvider` component.

## 📱 Responsive Design

The application is fully responsive and optimized for:

- Mobile devices
- Tablets
- Desktop computers

## 🚀 Future Enhancements

- [ ] User authentication and profiles
- [ ] Real API integration
- [ ] Payment processing
- [ ] Order tracking
- [ ] Product reviews and ratings
- [ ] Advanced filtering and search
- [ ] Inventory management
- [ ] Admin dashboard

## 📄 License

This project is licensed under the MIT License.
