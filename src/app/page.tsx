import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, MapPin, Clock } from 'lucide-react';
import { engagementDetailsContent } from '@/lib/content';
import { PageWrapper } from '@/components/shared/PageWrapper';
import { SectionTitle } from '@/components/shared/SectionTitle';

export default function HomePage() {
  const { date, time, venueName, venueAddress, description, imageUrl, dataAiHint } = engagementDetailsContent;

  return (
    <PageWrapper>
      <SectionTitle icon={CalendarDays}>You're Invited!</SectionTitle>
      
      <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <div className="relative w-full h-64 md:h-96">
          <Image
            src={imageUrl}
            alt="Engagement Party Illustration"
            layout="fill"
            objectFit="cover"
            data-ai-hint={dataAiHint}
            className="transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
           <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2 shadow-sm">Our Engagement Celebration</h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 shadow-sm">{date}</p>
          </div>
        </div>
        
        <CardHeader className="pt-6">
          <CardTitle className="text-2xl text-primary flex items-center gap-2">
            <CalendarDays className="w-6 h-6" />
            {date}
          </CardTitle>
          <CardDescription className="text-lg flex items-center gap-2">
            <Clock className="w-5 h-5 text-muted-foreground" />
            {time}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-lg">{venueName}</p>
              <p className="text-muted-foreground">{venueAddress}</p>
            </div>
          </div>
          <p className="text-foreground/80 leading-relaxed pt-2">
            {description}
          </p>
        </CardContent>
        <CardFooter>
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venueAddress)}`} target="_blank" rel="noopener noreferrer">
              Get Directions
              <MapPin className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </PageWrapper>
  );
}
