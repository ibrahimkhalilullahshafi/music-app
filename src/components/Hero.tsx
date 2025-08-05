import { Button } from "@/components/ui/button";
import { Play, Heart, MoreHorizontal } from "lucide-react";
import heroAlbum from "@/assets/hero-album.jpg";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] bg-gradient-hero flex items-center">
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-accent font-medium tracking-wide uppercase text-sm">
                Now Playing
              </p>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Neon
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Waves
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                by Synthcore Collective
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Experience the future of electronic music with immersive soundscapes 
              and pulsating rhythms that transport you to another dimension.
            </p>
            
            <div className="flex gap-4 pt-4">
              <Button variant="play" size="play" className="animate-pulse-glow">
                <Play className="h-6 w-6 fill-current" />
              </Button>
              <Button variant="glass" size="lg">
                <Heart className="h-5 w-5" />
                Add to Favorites
              </Button>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <img
                src={heroAlbum}
                alt="Neon Waves Album Cover"
                className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;