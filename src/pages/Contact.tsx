
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Nachricht gesendet",
        description: "Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze bei Ihnen melden.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Kontaktieren Sie uns
              </h1>
              <p className="text-xl text-muted-foreground">
                Haben Sie Fragen oder Anregungen? Wir freuen uns, von Ihnen zu hören.
              </p>
            </AnimatedSection>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <AnimatedSection animation="fade-right">
                <h2 className="text-2xl font-bold tracking-tight mb-6">
                  Schreiben Sie uns
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Ihr Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-medium mb-2">
                      E-Mail
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="ihre-email@beispiel.de"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block font-medium mb-2">
                      Betreff
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Betreff Ihrer Nachricht"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block font-medium mb-2">
                      Nachricht
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Ihre Nachricht an uns"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full min-h-[150px]"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                  </Button>
                </form>
              </AnimatedSection>
              
              <AnimatedSection delay={100} animation="fade-left">
                <h2 className="text-2xl font-bold tracking-tight mb-6">
                  Kontaktinformationen
                </h2>
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                  <div className="flex items-start mb-6">
                    <MapPin className="w-6 h-6 text-primary mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Adresse</h3>
                      <p className="text-muted-foreground">
                        Musterstraße 123<br />
                        10115 Berlin<br />
                        Deutschland
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-6">
                    <Mail className="w-6 h-6 text-primary mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">E-Mail</h3>
                      <p className="text-muted-foreground">
                        info@hebammenfinder.de
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-primary mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Telefon</h3>
                      <p className="text-muted-foreground">
                        +49 (0) 30 123456789
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-2xl overflow-hidden shadow-lg h-[300px]">
                  <iframe
                    title="Standort"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.654302667888!2d13.401959576592823!3d52.51979997981429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBerlin!5e0!3m2!1sde!2sde!4v1657030989010!5m2!1sde!2sde"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
                Häufig gestellte Fragen
              </h2>
              <div className="text-left space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <h3 className="text-lg font-bold mb-2">Wie funktioniert die Hebammensuche?</h3>
                  <p className="text-muted-foreground">
                    Geben Sie einfach Ihre Postleitzahl oder Ihren Ort in das Suchfeld ein und wir zeigen Ihnen alle verfügbaren Hebammen in Ihrer Nähe an.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <h3 className="text-lg font-bold mb-2">Ist die Nutzung der Plattform kostenlos?</h3>
                  <p className="text-muted-foreground">
                    Ja, die Nutzung von HebammenFinder ist für Studentinnen vollständig kostenlos. Hebammen zahlen eine kleine Gebühr für eine Premium-Listung.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <h3 className="text-lg font-bold mb-2">Wie kann ich mich als Hebamme registrieren?</h3>
                  <p className="text-muted-foreground">
                    Senden Sie uns einfach eine Nachricht über unser Kontaktformular oder schreiben Sie eine E-Mail an info@hebammenfinder.de. Wir helfen Ihnen bei der Registrierung.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
