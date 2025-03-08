
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const TTSConverter = () => {
  const [text, setText] = useState('');
  const [voice, setVoice] = useState('voice-118');
  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { toast } = useToast();

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleVoiceChange = (value: string) => {
    setVoice(value);
  };

  const generateAudio = async () => {
    if (text.length < 9) {
      toast({
        title: "Text too short",
        description: "Please enter text that is at least 9 characters long.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      const apiUrl = 'https://speechma.com/com.api/tts-api.php';
      const data = { text, voice };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const contentType = response.headers.get("content-type");
      
      if (contentType && contentType.includes("application/json")) {
        const jsonData = await response.json();
        if (jsonData.audio_url) {
          setAudioUrl(jsonData.audio_url);
        } else {
          throw new Error("No audio URL in response");
        }
      } else if (contentType && contentType.includes("audio/mpeg")) {
        const blob = await response.blob();
        const audioUrl = URL.createObjectURL(blob);
        setAudioUrl(audioUrl);
      } else {
        const text = await response.text();
        throw new Error(`Unexpected response format: ${text}`);
      }

      toast({
        title: "Success!",
        description: "Your audio has been generated successfully.",
      });
    } catch (error) {
      console.error('Error generating audio:', error);
      toast({
        title: "Error",
        description: "Failed to generate audio. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="shadow-lg border-0 overflow-hidden glass animate-fade-in">
      <CardContent className="p-6 md:p-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Select Voice</label>
            <Select value={voice} onValueChange={handleVoiceChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a voice" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="voice-118">Guy (UK)</SelectItem>
                <SelectItem value="voice-30">Maisie (UK)</SelectItem>
                <SelectItem value="voice-33">Olivia (UK)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Your Text</label>
            <Textarea 
              placeholder="Enter your text here..." 
              className="resize-none min-h-[120px]"
              value={text}
              onChange={handleTextChange}
            />
            <p className="text-xs text-muted-foreground mt-2">
              Minimum 9 characters required
            </p>
          </div>
          
          <Button 
            className="w-full"
            onClick={generateAudio}
            disabled={loading || text.length < 9}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating Audio...
              </>
            ) : (
              <>Generate Audio</>
            )}
          </Button>
          
          {audioUrl && (
            <div className="pt-4 animate-slide-up">
              <audio 
                ref={audioRef}
                controls 
                className="w-full" 
                src={audioUrl}
              />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TTSConverter;
