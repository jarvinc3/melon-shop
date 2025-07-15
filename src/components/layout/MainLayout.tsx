import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

export default function MainLayout () {
   return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100 dark:from-slate-900 dark:to-slate-800">
         <Header />
         <main>
            <Outlet />
         </main>
         <Footer />
      </div>
   );
}; 