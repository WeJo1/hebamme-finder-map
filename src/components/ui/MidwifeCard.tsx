
import { Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from '@/lib/utils';

interface MidwifeCardProps {
  id: string;
  name: string;
  address: string;
  specialties: string[];
  rating: number;
  distance: string;
  className?: string;
}

const MidwifeCard = ({
  id,
  name,
  address,
  specialties,
  rating,
  distance,
  className,
}: MidwifeCardProps) => {
  return (
    <Card 
      className={cn(
        'overflow-hidden transition-all duration-300 hover:shadow-lg',
        className
      )}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-serif">{name}</CardTitle>
          <div className="flex items-center text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  'w-4 h-4',
                  i < Math.floor(rating) ? 'fill-current' : 'fill-none'
                )}
              />
            ))}
            <span className="ml-1 text-xs text-muted-foreground">{rating.toFixed(1)}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-1">{address}</p>
        <p className="text-xs font-medium text-primary">{distance} entfernt</p>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="flex flex-wrap gap-1 mt-2">
          {specialties.map((specialty, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
            >
              {specialty}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-0">
        <Button variant="outline" size="sm" className="w-full sm:w-auto">
          Kontakt
        </Button>
        <Button size="sm" className="w-full mt-2 sm:mt-0 sm:w-auto">
          Profil ansehen
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MidwifeCard;
