
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SearchForm from '@/components/ui/SearchForm';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent z-0"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fade-down" className="mb-6">
              <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-primary/10 text-primary">
                Für Hebammenstudentinnen
              </span>
            </AnimatedSection>
            
            <AnimatedSection delay={100} className="mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Finden Sie die perfekte <span className="text-primary">Praxisanleiterin</span> für Ihr Studium
              </h1>
              <p className="text-xl text-muted-foreground">
                Verbinden Sie sich mit erfahrenen Hebammen in Ihrer Nähe, die bereit sind, ihr Wissen weiterzugeben.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={200} className="mb-12">
              <SearchForm onSearch={handleSearch} className="mx-auto" />
            </AnimatedSection>
            
            <AnimatedSection delay={300} className="flex flex-wrap gap-4 justify-center">
              <div className="glass-panel px-6 py-4 flex items-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xl">
                  200+
                </div>
                <div className="ml-4 text-left">
                  <p className="text-sm font-medium">Registrierte Hebammen</p>
                  <p className="text-xs text-muted-foreground">In ganz Deutschland</p>
                </div>
              </div>
              
              <div className="glass-panel px-6 py-4 flex items-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xl">
                  98%
                </div>
                <div className="ml-4 text-left">
                  <p className="text-sm font-medium">Zufriedenheit</p>
                  <p className="text-xs text-muted-foreground">Bei Studierenden</p>
                </div>
              </div>
              
              <div className="glass-panel px-6 py-4 flex items-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xl">
                  24h
                </div>
                <div className="ml-4 text-left">
                  <p className="text-sm font-medium">Schnelle Antwort</p>
                  <p className="text-xs text-muted-foreground">Von Praxisanleiterinnen</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              So einfach funktioniert's
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              In nur wenigen Schritten zur passenden Hebamme für Ihre praktische Ausbildung
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <AnimatedSection delay={100} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Ort eingeben</h3>
              <p className="text-muted-foreground">
                Geben Sie Ihre PLZ oder Ihren Ort ein, um Hebammen in Ihrer Nähe zu finden.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={200} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Hebamme auswählen</h3>
              <p className="text-muted-foreground">
                Vergleichen Sie Profile, Bewertungen und Erfahrungen, um die passende Anleiterin zu finden.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={300} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Kontakt aufnehmen</h3>
              <p className="text-muted-foreground">
                Vereinbaren Sie ein erstes Gespräch und starten Sie Ihre praktische Ausbildung.
              </p>
            </AnimatedSection>
          </div>
          
          <AnimatedSection delay={400} className="mt-16 text-center">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/search">
                Jetzt Hebamme finden
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Das sagen unsere Nutzerinnen
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Erfahrungen von Studentinnen und Hebammen mit unserer Plattform
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={100}>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary font-bold">
                    LM
                  </div>
                  <div className="ml-4">
                    <p className="font-bold">Lisa Müller</p>
                    <p className="text-sm text-muted-foreground">Hebammenstudentin, 5. Semester</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Durch HebammenFinder habe ich innerhalb weniger Tage eine wunderbare Praxisanleiterin gefunden. Der gesamte Prozess war unkompliziert und die Betreuung während meines Praktikums ausgezeichnet."
                </p>
                <div className="flex items-center text-amber-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary font-bold">
                    SK
                  </div>
                  <div className="ml-4">
                    <p className="font-bold">Sarah Klein</p>
                    <p className="text-sm text-muted-foreground">Hebamme & Praxisanleiterin</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Als Hebamme freue ich mich, mein Wissen an die nächste Generation weiterzugeben. Die Plattform macht es mir leicht, passende Studentinnen zu finden und meinen Beitrag zur Ausbildung zu leisten."
                </p>
                <div className="flex items-center text-amber-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary font-bold">
                    JH
                  </div>
                  <div className="ml-4">
                    <p className="font-bold">Julia Hartmann</p>
                    <p className="text-sm text-muted-foreground">Hebammenstudentin, 3. Semester</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Nach mehreren erfolglosen Versuchen, eine Praktikumsstelle zu finden, hat mir HebammenFinder endlich geholfen. Die Karte macht es so einfach, Hebammen in der Nähe zu finden und Kontakt aufzunehmen."
                </p>
                <div className="flex items-center text-amber-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Bereit, Ihre Praktikumsstelle zu finden?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Finden Sie noch heute Ihre perfekte Hebamme als Praxisanleiterin.
              </p>
              <Button size="lg" variant="secondary" className="rounded-full px-8">
                <Link to="/search">
                  Jetzt starten
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
