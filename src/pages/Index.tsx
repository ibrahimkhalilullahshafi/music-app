import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedTracks from "@/components/FeaturedTracks";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 pb-24">
        <Hero />
        <FeaturedTracks />
      </main>
      <MusicPlayer />
    </div>
  );
};

export default Index;
