import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Heart } from 'lucide-react';
import { ourStoryContent } from '@/lib/content';
import { PageWrapper } from '@/components/shared/PageWrapper';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Separator } from '@/components/ui/separator';

export default function OurStoryPage() {
  const { coupleName1, coupleName2, bio1, bio2, howWeMet, imageUrl, dataAiHint } = ourStoryContent;

  return (
    <PageWrapper>
      <SectionTitle icon={Heart}>Our Story</SectionTitle>
      
      <Card className="shadow-xl overflow-hidden">
        <div className="relative w-full h-56 md:h-72">
          <Image
            src={imageUrl}
            alt={`A picture of ${coupleName1} and ${coupleName2}`}
            layout="fill"
            objectFit="cover"
            data-ai-hint={dataAiHint}
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-primary">
            {coupleName1} & {coupleName2}
          </CardTitle>
          <CardDescription className="text-md text-muted-foreground italic">
            Two hearts, one journey.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-8 p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-secondary-foreground flex items-center gap-2">
                <Users className="w-5 h-5 text-accent" />
                About {coupleName1}
              </h3>
              <p className="text-foreground/80 leading-relaxed">{bio1}</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-secondary-foreground flex items-center gap-2">
                <Users className="w-5 h-5 text-accent" />
                About {coupleName2}
              </h3>
              <p className="text-foreground/80 leading-relaxed">{bio2}</p>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-2xl font-semibold text-primary mb-3 text-center">How We Met</h3>
            <p className="text-foreground/80 leading-relaxed text-center md:text-left whitespace-pre-line">
              {howWeMet}
            </p>
          </div>
        </CardContent>
      </Card>
    </PageWrapper>
  );
}
