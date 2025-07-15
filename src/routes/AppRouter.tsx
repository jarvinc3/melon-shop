import { Loader } from '@/components/ui/loader';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const MainLayout = lazy(() => import("@/components/layout/MainLayout"))
const AboutPage = lazy(() => import("@/pages/AboutPage"))
const AdminDashboard = lazy(() => import("@/pages/AdminDashboard"))
const CartPage = lazy(() => import("@/pages/CartPage"))
const CheckoutPage = lazy(() => import("@/pages/CheckoutPage"))
const CollectionsPage = lazy(() => import("@/pages/CollectionsPage"))
const HomePage = lazy(() => import("@/pages/HomePage"))
const ProductsPage = lazy(() => import("@/pages/ProductsPage"))
const ShopPage = lazy(() => import("@/pages/ShopPage"))

export const AppRouter = () => {
   return (
      <Suspense fallback={<Loader />}>
         <Routes>
            <Route path="/" element={<MainLayout />}>
               <Route index element={<HomePage />} />
               <Route path="/shop" element={<ShopPage />} />
               <Route path="/product/:id" element={<ProductsPage />} />
               <Route path="/cart" element={<CartPage />} />
               <Route path="/checkout" element={<CheckoutPage />} />
               <Route path="/collections" element={<CollectionsPage />} />
               <Route path="/about" element={<AboutPage />} />
               <Route path="/admin" element={<AdminDashboard />} />
            </Route>
         </Routes>
      </Suspense>
   );
};
