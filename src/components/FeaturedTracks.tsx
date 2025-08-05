import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Heart, MoreHorizontal } from "lucide-react";
import album1 from "@/assets/album-1.jpg";
import album2 from "@/assets/album-2.jpg";
import album3 from "@/assets/album-3.jpg";

const tracks = [
  {
    id: 1,
    title: "Midnight Protocol",
    artist: "Digital Dreams",
    duration: "3:42",
    image: album1,
    plays: "2.1M"
  },
  {
    id: 2,
    title: "Cyber Pulse",
    artist: "Neon Rider",
    duration: "4:15",
    image: album2,
    plays: "1.8M"
  },
  {
    id: 3,
    title: "Quantum Echo",
    artist: "Future Bass Collective",
    duration: "3:28",
    image: album3,
    plays: "3.2M"
  },
  {
    id: 4,
    title: "Synthwave Highway",
    artist: "Retrograde",
    duration: "5:03",
    image: album1,
    plays: "1.5M"
  },
  {
    id: 5,
    title: "Neon Lights",
    artist: "Electric Vibes",
    duration: "3:56",
    image: album2,
    plays: "2.7M"
  }
];

const FeaturedTracks = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-secondary bg-clip-text text-transparent">Tracks</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover the most popular tracks right now
          </p>
        </div>
        
        <div className="space-y-4">
          {tracks.map((track, index) => (
            <Card key={track.id} className="p-4 bg-glass border-glass backdrop-blur-md hover:bg-accent/10 transition-all duration-300 animate-fade-in group" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={track.image}
                    alt={track.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <Button variant="play" size="icon" className="h-8 w-8">
                      <Play className="h-4 w-4 fill-current" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground truncate">
                    {track.title}
                  </h3>
                  <p className="text-muted-foreground truncate">
                    {track.artist}
                  </p>
                </div>
                
                <div className="hidden md:block text-muted-foreground text-sm">
                  {track.plays} plays
                </div>
                
                <div className="text-muted-foreground text-sm">
                  {track.duration}
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTracks;