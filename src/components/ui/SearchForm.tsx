
import { useState, FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchFormProps {
  className?: string;
  onSearch: (query: string) => void;
  isSearching?: boolean;
}

const SearchForm = ({ className, onSearch, isSearching = false }: SearchFormProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={cn('w-full max-w-lg', className)}
    >
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <MapPin className="w-5 h-5 text-muted-foreground" />
        </div>
        <Input
          type="text"
          className="w-full pl-10 pr-20 py-6 text-base rounded-full focus:ring-2 focus:ring-primary/50 shadow-md"
          placeholder="PLZ oder Ort eingeben..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          required
        />
        <Button 
          type="submit" 
          className="absolute right-1 top-1 bottom-1 px-4 rounded-full transition-all"
          disabled={isSearching}
        >
          {isSearching ? (
            <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <Search className="w-4 h-4 mr-2" />
              <span>Suchen</span>
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default SearchForm;
