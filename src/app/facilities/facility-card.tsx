import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { facilities } from '@/lib/data';
import { Hospital, Stethoscope } from 'lucide-react';

type Facility = (typeof facilities)[0];

interface FacilityCardProps {
  facility: Facility;
}

export function FacilityCard({ facility }: FacilityCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
         <CardTitle className="text-lg">{facility.name}</CardTitle>
         {facility.type.includes('Hospital') ? <Hospital className="w-5 h-5 text-muted-foreground" /> : <Stethoscope className="w-5 h-5 text-muted-foreground" />}
      </CardHeader>
      <CardContent>
        <CardDescription>{facility.type}</CardDescription>
        <p className="text-sm text-muted-foreground mt-2">{facility.address}</p>
      </CardContent>
    </Card>
  );
}
