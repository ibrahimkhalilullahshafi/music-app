import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  Shuffle, 
  Repeat,
  Heart,
  Maximize2 
} from "lucide-react";
import { useState } from "react";
import album1 from "@/assets/album-1.jpg";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState([30]);
  const [volume, setVolume] = useState([75]);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-glass backdrop-blur-md border-t border-glass p-4 z-40">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Current Track Info */}
          <div className="flex items-center space-x-4 min-w-0 flex-1">
            <img
              src={album1}
              alt="Current track"
              className="w-14 h-14 rounded-lg object-cover"
            />
            <div className="min-w-0">
              <h4 className="font-semibold text-foreground truncate">
                Midnight Protocol
              </h4>
              <p className="text-muted-foreground text-sm truncate">
                Digital Dreams
              </p>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Heart className="h-4 w-4" />
            </Button>
          </div>

          {/* Player Controls */}
          <div className="flex flex-col items-center space-y-2 flex-1 max-w-md">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Shuffle className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <SkipBack className="h-4 w-4" />
              </Button>
              <Button 
                variant="play" 
                size="play" 
                onClick={() => setIsPlaying(!isPlaying)}
                className="h-10 w-10"
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5 fill-current" />
                ) : (
                  <Play className="h-5 w-5 fill-current" />
                )}
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <SkipForward className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Repeat className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex items-center space-x-2 w-full">
              <span className="text-xs text-muted-foreground">1:23</span>
              <Slider
                value={progress}
                onValueChange={setProgress}
                max={100}
                step={1}
                className="flex-1"
              />
              <span className="text-xs text-muted-foreground">3:42</span>
            </div>
          </div>

          {/* Volume and Extras */}
          <div className="flex items-center space-x-2 flex-1 justify-end">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Maximize2 className="h-4 w-4" />
            </Button>
            <Volume2 className="h-4 w-4 text-muted-foreground" />
            <Slider
              value={volume}
              onValueChange={setVolume}
              max={100}
              step={1}
              className="w-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;