import { Button } from "@/components/ui/button";
import { Search, User, Heart, Library } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-glass backdrop-blur-md border-b border-glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              MusicFlow
            </h1>
            
            <div className="hidden md:flex space-x-6">
              <Button variant="ghost" className="text-foreground hover:text-accent">
                Discover
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-accent">
                Genres
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-accent">
                Artists
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-accent">
                Playlists
              </Button>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search music..."
                className="pl-10 pr-4 py-2 bg-glass border border-glass rounded-full text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
            
            <Button variant="ghost" size="icon">
              <Library className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;