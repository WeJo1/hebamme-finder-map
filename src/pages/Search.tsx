
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SearchForm from '@/components/ui/SearchForm';
import MapView from '@/components/ui/MapView';
import MidwifeCard from '@/components/ui/MidwifeCard';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Separator } from '@/components/ui/separator';

// For demonstration, these would be fetched from an API
interface Midwife {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  rating: number;
  specialties: string[];
  distance: string;
}

const DUMMY_MIDWIVES: Midwife[] = [
  {
    id: "1",
    name: "Maria Schmidt",
    address: "Hauptstraße 23, 10115 Berlin",
    lat: 52.52315,
    lng: 13.41053,
    rating: 4.8,
    specialties: ["Hausgeburt", "Wassergeburt", "Stillberatung"],
    distance: "1.2 km"
  },
  {
    id: "2",
    name: "Laura Weber",
    address: "Schulstraße 45, 10115 Berlin",
    lat: 52.52846,
    lng: 13.39623,
    rating: 4.9,
    specialties: ["Geburtsvorbereitung", "Wochenbettbetreuung"],
    distance: "1.8 km"
  },
  {
    id: "3",
    name: "Sophie Müller",
    address: "Friedrichstraße 102, 10117 Berlin",
    lat: 52.51701,
    lng: 13.38720,
    rating: 4.7,
    specialties: ["Klinikgeburt", "Rückbildung", "Akupunktur"],
    distance: "2.3 km"
  },
  {
    id: "4",
    name: "Hannah König",
    address: "Kastanienallee 17, 10119 Berlin",
    lat: 52.53238,
    lng: 13.40937,
    rating: 4.6,
    specialties: ["Beckenbodentraining", "Schwangerschaftsbegleitung"],
    distance: "2.7 km"
  },
  {
    id: "5",
    name: "Emma Bauer",
    address: "Torstraße 164, 10115 Berlin",
    lat: 52.52948,
    lng: 13.39784,
    rating: 4.5,
    specialties: ["Geburtshaus", "Nachsorge", "Beikostberatung"],
    distance: "3.1 km"
  }
];

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialQuery = searchParams.get('q') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [isSearching, setIsSearching] = useState(false);
  const [midwives, setMidwives] = useState<Midwife[]>([]);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number }>({ lat: 52.520008, lng: 13.404954 });
  const [selectedMidwife, setSelectedMidwife] = useState<Midwife | null>(null);
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setIsSearching(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      // In a real app, we would fetch midwives based on the search query
      setMidwives(DUMMY_MIDWIVES);
      setIsSearching(false);
    }, 1000);
  };
  
  useEffect(() => {
    if (initialQuery) {
      handleSearch(initialQuery);
    }
  }, [initialQuery]);
  
  const handleMarkerClick = (midwife: Midwife) => {
    setSelectedMidwife(midwife);
    // Find the midwife card element and scroll to it
    const element = document.getElementById(`midwife-${midwife.id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        <section className="py-8 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center max-w-2xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Finden Sie eine Hebamme in Ihrer Nähe
              </h1>
              <SearchForm 
                onSearch={handleSearch} 
                isSearching={isSearching} 
                className="mx-auto"
              />
            </AnimatedSection>
          </div>
        </section>
        
        {midwives.length > 0 && (
          <section className="py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <AnimatedSection className="mb-6">
                <h2 className="text-2xl font-bold tracking-tight">
                  Hebammen in {searchQuery}
                </h2>
                <p className="text-muted-foreground">
                  {midwives.length} Ergebnisse gefunden
                </p>
              </AnimatedSection>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 space-y-6">
                  <AnimatedSection className="space-y-4">
                    {midwives.map((midwife) => (
                      <div
                        key={midwife.id}
                        id={`midwife-${midwife.id}`}
                        onClick={() => setSelectedMidwife(midwife)}
                        className={`cursor-pointer transition-all duration-300 ${
                          selectedMidwife?.id === midwife.id
                            ? 'ring-2 ring-primary'
                            : ''
                        }`}
                      >
                        <MidwifeCard {...midwife} />
                      </div>
                    ))}
                  </AnimatedSection>
                </div>
                
                <div className="lg:col-span-2">
                  <AnimatedSection className="sticky top-24">
                    <MapView 
                      location={userLocation}
                      midwives={midwives}
                      onMarkerClick={handleMarkerClick}
                      className="h-[600px] rounded-2xl shadow-lg"
                    />
                    
                    {selectedMidwife && (
                      <div className="mt-4 p-4 bg-white rounded-xl shadow-md lg:hidden">
                        <h3 className="font-bold text-lg">{selectedMidwife.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{selectedMidwife.address}</p>
                        <Separator className="my-2" />
                        <div className="flex flex-wrap gap-1 mt-2">
                          {selectedMidwife.specialties.map((specialty, index) => (
                            <span
                              key={index}
                              className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {!isSearching && midwives.length === 0 && searchQuery && (
          <section className="py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <AnimatedSection>
                <h2 className="text-2xl font-bold tracking-tight mb-4">
                  Keine Ergebnisse gefunden
                </h2>
                <p className="text-muted-foreground mb-8">
                  Versuchen Sie es mit einer anderen PLZ oder einem anderen Ort.
                </p>
              </AnimatedSection>
            </div>
          </section>
        )}
        
        {!searchQuery && (
          <section className="py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <AnimatedSection>
                <h2 className="text-2xl font-bold tracking-tight mb-4">
                  Geben Sie eine PLZ oder einen Ort ein
                </h2>
                <p className="text-muted-foreground mb-8">
                  Um Hebammen in Ihrer Nähe zu finden.
                </p>
              </AnimatedSection>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Search;
