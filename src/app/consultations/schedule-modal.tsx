'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import type { doctors } from '@/lib/data';
import { Video } from 'lucide-react';

type Doctor = (typeof doctors)[0];

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM',
];

export function ScheduleModal({ doctor }: { doctor: Doctor }) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState<string | undefined>();
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleBooking = () => {
    if (date && time) {
      toast({
        title: 'Appointment Scheduled!',
        description: `Your consultation with ${doctor.name} is booked for ${date.toLocaleDateString()} at ${time}.`,
      });
      setIsOpen(false);
    } else {
       toast({
        title: 'Incomplete Information',
        description: 'Please select a date and time for your appointment.',
        variant: 'destructive'
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">
            <Video className="mr-2"/>
            Schedule
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Schedule with {doctor.name}</DialogTitle>
          <DialogDescription>
            Select a date and time for your tele-consultation.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex justify-center">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              disabled={(d) => d < new Date(new Date().setDate(new Date().getDate() - 1))}
            />
          </div>
          <Select onValueChange={setTime} value={time}>
            <SelectTrigger>
              <SelectValue placeholder="Select a time slot" />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((slot) => (
                <SelectItem key={slot} value={slot}>
                  {slot}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
          <Button onClick={handleBooking}>Confirm Booking</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
