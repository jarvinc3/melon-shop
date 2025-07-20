import NotFound from '@/components/ui/404-error';
import { Loader } from '@/components/ui/loader';
import { ScrollToTop } from '@/lib/scroll-top';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import("@/pages/HomePage"))
const ShopPage = lazy(() => import("@/pages/ShopPage"))
const ProductPage = lazy(() => import("@/pages/ProductPage"))
const ReviewsPage = lazy(() => import("@/pages/ReviewsPage"))
const CartPage = lazy(() => import("@/pages/CartPage"))
const WishlistPage = lazy(() => import("@/pages/WishlistPage"))
const CheckoutPage = lazy(() => import("@/pages/CheckoutPage"))
const SuccessPage = lazy(() => import("@/pages/SuccessPage"))
const CollectionsPage = lazy(() => import("@/pages/CollectionsPage"))
const AboutPage = lazy(() => import("@/pages/AboutPage"))
const LoginPage = lazy(() => import("@/pages/auth/Login"))
const RegisterPage = lazy(() => import("@/pages/auth/Register"))

export const AppRouter = () => {
   return (
      <Suspense fallback={<Loader />}>
         <ScrollToTop />
         <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route index element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </Suspense>
   );
};
