
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/ui/AnimatedSection';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <AnimatedSection className="text-center max-w-lg mx-auto">
            <h1 className="text-7xl font-bold text-primary mb-6">404</h1>
            <h2 className="text-3xl font-bold mb-4">Seite nicht gefunden</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben.
            </p>
            <Button asChild size="lg">
              <Link to="/">
                Zurück zur Startseite
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
