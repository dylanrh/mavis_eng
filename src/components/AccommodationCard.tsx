import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import type { Accommodation } from '@/lib/content';

interface AccommodationCardProps {
  accommodation: Accommodation;
}

export function AccommodationCard({ accommodation }: AccommodationCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-48">
        <Image
          src={accommodation.imageUrl}
          alt={accommodation.name}
          layout="fill"
          objectFit="cover"
          data-ai-hint={accommodation.dataAiHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-primary">{accommodation.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{accommodation.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="default" asChild className="w-full">
          <Link href={accommodation.bookingLink} target="_blank" rel="noopener noreferrer">
            Book Now
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
