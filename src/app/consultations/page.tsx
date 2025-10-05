import { doctors } from '@/lib/data';
import { DoctorCard } from './doctor-card';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

export default function ConsultationsPage() {
  return (
    <div className="space-y-8">
      <Card className="relative flex flex-col md:flex-row items-center overflow-hidden">
        <div className="p-8 flex-1 z-10">
          <h1 className="text-4xl font-bold font-headline text-primary">Tele-consultations</h1>
          <p className="text-muted-foreground mt-2 max-w-prose">
            Connect with experienced healthcare professionals from the comfort of your home. Schedule a virtual appointment today for personalized medical advice.
          </p>
        </div>
        <div className="relative w-full md:w-1/3 h-48 md:h-auto self-stretch">
           <Image 
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop"
            alt="Doctor on a video call"
            fill
            className="object-cover"
            data-ai-hint="doctor video call"
          />
        </div>
      </Card>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}
