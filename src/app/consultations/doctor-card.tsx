import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import { ScheduleModal } from './schedule-modal';
import type { doctors } from '@/lib/data';

type Doctor = (typeof doctors)[0];

interface DoctorCardProps {
  doctor: Doctor;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  const placeholder = getPlaceholderImage(doctor.image);

  return (
    <Card className="flex flex-col group hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="items-center">
        {placeholder && (
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-background shadow-md group-hover:scale-105 transition-transform duration-300">
            <Image
              src={placeholder.imageUrl}
              alt={`Portrait of ${doctor.name}`}
              data-ai-hint={placeholder.imageHint}
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>
        )}
      </CardHeader>
      <CardContent className="flex-1 text-center">
        <CardTitle>{doctor.name}</CardTitle>
        <CardDescription>{doctor.specialty}</CardDescription>
      </CardContent>
      <CardFooter>
        <ScheduleModal doctor={doctor} />
      </CardFooter>
    </Card>
  );
}
