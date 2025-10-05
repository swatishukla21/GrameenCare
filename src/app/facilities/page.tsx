import { ScrollArea } from '@/components/ui/scroll-area';
import { facilities } from '@/lib/data';
import { FacilityCard } from './facility-card';
import { FacilityMap } from './facility-map';

export default function FacilitiesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Find Health Facilities</h1>
        <p className="text-muted-foreground">Locate nearby government hospitals, clinics, and health camps.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[65vh]">
        <div className="lg:col-span-1">
          <h2 className="text-xl font-semibold mb-4">Nearby Facilities</h2>
          <ScrollArea className="h-full pr-4">
            <div className="space-y-4">
              {facilities.map((facility) => (
                <FacilityCard key={facility.id} facility={facility} />
              ))}
            </div>
          </ScrollArea>
        </div>
        <div className="lg:col-span-2 h-full min-h-[40vh]">
            <FacilityMap />
        </div>
      </div>
    </div>
  );
}
