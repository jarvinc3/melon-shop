import { Footer } from './Footer';
import { Header } from './Header';

export default function MainLayout({ children }: { children: React.ReactNode }) {
   return (
      <div className="min-h-screen flex flex-col">
         <Header />
         <main className="flex-1 bg-background pt-16 md:pt-6">
            {children}
         </main>
         <Footer />
      </div>
   );
}; 