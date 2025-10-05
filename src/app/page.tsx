import {AIChat} from '@/components/ai-chat';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-8">
      <Card className="overflow-hidden">
        <div className="relative h-64 w-full">
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
            alt="Healthcare professional using a laptop"
            fill
            className="object-cover"
            data-ai-hint="healthcare professional laptop"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-4xl font-bold font-headline text-white drop-shadow-md">
              Welcome to GrameenCare
            </h1>
            <p className="mt-2 text-lg text-primary-foreground/90 max-w-2xl">
              Your trusted partner for accessible healthcare. Get instant AI guidance, schedule tele-consultations, and find nearby health facilities.
            </p>
            <Button asChild className="mt-6">
              <Link href="/consultations">Book an Appointment</Link>
            </Button>
          </div>
        </div>
      </Card>
      <AIChat />
    </div>
  );
}
