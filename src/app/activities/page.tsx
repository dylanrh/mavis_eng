import { localActivitiesContent } from "@/lib/content";
import { ActivityCard } from "@/components/ActivityCard";
import { PageWrapper } from "@/components/shared/PageWrapper";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Smile } from "lucide-react";

export default function ActivitiesPage() {
  return (
    <PageWrapper>
      <SectionTitle icon={Smile}>Dy-Kal's Recommendations</SectionTitle>
      <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
        Explore some of our favorite spots and activities in and around town.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {localActivitiesContent.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </PageWrapper>
  );
}
