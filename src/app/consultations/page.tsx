import { doctors } from '@/lib/data';
import { DoctorCard } from './doctor-card';

export default function ConsultationsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Tele-consultations</h1>
        <p className="text-muted-foreground">Schedule a virtual appointment with a healthcare professional.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}
