"use client";

import { InlineWidget } from "react-calendly";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface ConsultationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ConsultationForm({ open, onOpenChange }: ConsultationFormProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[900px] p-0">
        <DialogHeader className="p-6">
          <DialogTitle>Schedule a Consultation</DialogTitle>
          <DialogDescription>
            Choose a convenient time for our meeting
          </DialogDescription>
        </DialogHeader>
        <InlineWidget
          url="https://calendly.com/gikra/15min" // Replace with your Calendly URL
          styles={{
            height: '700px'
          }}
        />
      </DialogContent>
    </Dialog>
  );
} 