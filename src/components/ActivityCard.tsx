import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import type { Activity } from '@/lib/content';

interface ActivityCardProps {
  activity: Activity;
}

export function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-48">
        <Image
          src={activity.imageUrl}
          alt={activity.name}
          layout="fill"
          objectFit="cover"
          data-ai-hint={activity.dataAiHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-primary">{activity.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{activity.description}</CardDescription>
      </CardContent>
      {activity.link && (
        <CardFooter>
          <Button variant="outline" asChild className="w-full">
            <Link href={activity.link} target="_blank" rel="noopener noreferrer">
              Learn More
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
