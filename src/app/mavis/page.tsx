import { ThemeAdvisorForm } from '@/components/ThemeAdvisorForm';
import { PageWrapper } from '@/components/shared/PageWrapper';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Wand2 } from 'lucide-react';

export default function ThemeAdvisorPage() {
  return (
    <PageWrapper>
      <SectionTitle icon={Wand2}>AI Style Advisor</SectionTitle>
      <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
        Let our AI help you find the perfect accent color for your wedding theme! Just upload three inspirational images and a brief description of your vision.
      </p>
      <ThemeAdvisorForm />
    </PageWrapper>
  );
}
