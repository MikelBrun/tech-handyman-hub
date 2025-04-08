
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  details?: string[];
}

const ServiceDetailModal = ({
  isOpen,
  onClose,
  title,
  description,
  details = [],
}: ServiceDetailModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-tech-blue">{title}</DialogTitle>
          <DialogDescription className="text-lg mt-2">{description}</DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          {details.map((detail, index) => (
            <p key={index} className="text-gray-700">{detail}</p>
          ))}
        </div>
        <DialogClose asChild>
          <Button 
            className="absolute right-4 top-4 rounded-full h-8 w-8 p-0" 
            variant="ghost"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailModal;
