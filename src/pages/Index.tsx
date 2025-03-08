
import React from 'react';
import TTSConverter from '@/components/TTSConverter';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare, Volume2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="pt-20 flex-1 page-transition">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10 -z-10" />
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="inline-block rounded-full px-3 py-1 bg-primary/10 text-primary text-sm font-medium mb-4 animate-slide-down">
                Advanced Text-to-Speech Technology
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-slide-down" style={{ animationDelay: '100ms' }}>
                Transform Your Text Into Natural <span className="text-primary">Speech</span>
              </h1>
              <p className="text-lg text-muted-foreground animate-slide-down" style={{ animationDelay: '200ms' }}>
                Experience premium quality speech synthesis with our cutting-edge AI technology.
                Choose from multiple voices and create natural-sounding audio in seconds.
              </p>
            </div>
          </div>
        </section>

        {/* Converter Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-12">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold">
                  Try Our Text-to-Speech Converter
                </h2>
                <p className="text-muted-foreground mt-2">
                  Transform your written content into natural speech
                </p>
              </div>
              
              <TTSConverter />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-secondary/50">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold">
                Key Features
              </h2>
              <p className="text-muted-foreground mt-2">
                Discover what makes our text-to-speech technology stand out
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background rounded-xl p-6 shadow-sm border border-border/30 transition-all hover:shadow-md animate-fade-in" style={{ animationDelay: '100ms' }}>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <Volume2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Natural Voices</h3>
                <p className="text-muted-foreground">
                  Our AI-powered voices sound remarkably human, with natural intonation and rhythm.
                </p>
              </div>
              
              <div className="bg-background rounded-xl p-6 shadow-sm border border-border/30 transition-all hover:shadow-md animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Multiple Accents</h3>
                <p className="text-muted-foreground">
                  Choose from a variety of voices with different accents and speaking styles.
                </p>
              </div>
              
              <div className="bg-background rounded-xl p-6 shadow-sm border border-border/30 transition-all hover:shadow-md animate-fade-in" style={{ animationDelay: '300ms' }}>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Processing</h3>
                <p className="text-muted-foreground">
                  Generate high-quality audio in seconds, even with longer passages of text.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/about">
                <Button variant="outline" className="group">
                  Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
