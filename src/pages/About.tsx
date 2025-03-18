
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Über HebammenFinder
              </h1>
              <p className="text-xl text-muted-foreground">
                Unsere Mission ist es, Hebammenstudentinnen mit erfahrenen Praxisanleiterinnen zu verbinden.
              </p>
            </AnimatedSection>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                    alt="Hebamme mit Studentin" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={100} animation="fade-left">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
                  Unsere Geschichte
                </h2>
                <p className="text-muted-foreground mb-4">
                  HebammenFinder entstand aus einem realen Bedürfnis: Hebammenstudentinnen stehen oft vor der Herausforderung, geeignete Praxisanleiterinnen zu finden, die sie während ihrer praktischen Ausbildung begleiten.
                </p>
                <p className="text-muted-foreground mb-4">
                  Gegründet von einem Team aus Hebammen und Entwicklern, setzen wir uns dafür ein, diesen Prozess zu vereinfachen und die Ausbildungsqualität im Hebammenwesen zu verbessern.
                </p>
                <p className="text-muted-foreground">
                  Unser Ziel ist es, eine Brücke zwischen Theorie und Praxis zu schlagen und so die nächste Generation von Hebammen bestmöglich zu unterstützen.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                Unsere Werte
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Diese Grundsätze leiten uns bei unserer täglichen Arbeit
              </p>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection delay={100} className="bg-white p-6 rounded-2xl shadow-md">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Qualität</h3>
                <p className="text-muted-foreground">
                  Wir setzen auf hochwertige Ausbildung und sorgfältige Auswahl unserer Partnerinnen, um den bestmöglichen Lernprozess zu gewährleisten.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={200} className="bg-white p-6 rounded-2xl shadow-md">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Gemeinschaft</h3>
                <p className="text-muted-foreground">
                  Wir glauben an den Wert einer starken Hebammengemeinschaft, in der Wissen geteilt und weitergegeben wird.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={300} className="bg-white p-6 rounded-2xl shadow-md">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  Wir nutzen moderne Technologie, um traditionelles Hebammenwissen zugänglich zu machen und die Ausbildung zu verbessern.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection delay={100} animation="fade-right" className="order-2 md:order-1">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
                  Das Team hinter HebammenFinder
                </h2>
                <p className="text-muted-foreground mb-4">
                  Unser Team besteht aus erfahrenen Hebammen, Hebammenstudentinnen und Entwicklern, die ihre Expertise vereinen, um die bestmögliche Plattform zu schaffen.
                </p>
                <p className="text-muted-foreground mb-6">
                  Wir verstehen die Bedürfnisse beider Seiten und arbeiten kontinuierlich daran, HebammenFinder zu verbessern und auszubauen.
                </p>
                <Button asChild>
                  <Link to="/contact">
                    Kontaktieren Sie uns
                  </Link>
                </Button>
              </AnimatedSection>
              
              <AnimatedSection className="order-1 md:order-2">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                    alt="Das Team" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Werden Sie Teil der Community
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Ob als Hebamme oder Studentin – unterstützen Sie uns dabei, die Hebammenausbildung zu verbessern.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="secondary" size="lg" className="rounded-full px-6" asChild>
                    <Link to="/search">
                      Suche starten
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-full px-6 bg-transparent border-white text-white hover:bg-white/10" asChild>
                    <Link to="/contact">
                      Kontakt aufnehmen
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
