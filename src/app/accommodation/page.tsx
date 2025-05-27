import { accommodationOptionsContent } from '@/lib/content';
import { AccommodationCard } from '@/components/AccommodationCard';
import { PageWrapper } from '@/components/shared/PageWrapper';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { BedDouble } from 'lucide-react';

export default function AccommodationPage() {
  return (
    <PageWrapper>
      <SectionTitle icon={BedDouble}>Places to Stay</SectionTitle>
      <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
        For our out-of-town guests, here are some recommended places to stay. We advise booking in advance!
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {accommodationOptionsContent.map((option) => (
          <AccommodationCard key={option.id} accommodation={option} />
        ))}
      </div>
    </PageWrapper>
  );
}
