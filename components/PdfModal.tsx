"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

interface ContentItem {
  type: 'pdf' | 'image' | 'text';
  url?: string;
  alt?: string;
  text?: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: ContentItem[];
  title?: string;
  pdfUrl?: string;
}

export default function Modal({ isOpen, onClose, content, title }: ModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[80vh]">
        <DialogHeader>
          <DialogTitle>{title || "Content Viewer"}</DialogTitle>
          <DialogDescription>
            This modal displays documents, images, and text based on selected content.
          </DialogDescription>
        </DialogHeader>
        <div className="flex-1 w-full h-full overflow-auto">
          {content.map((item, index) => {
            if (item.type === 'pdf' && item.url) {
              return (
                <div key={index} className="w-full h-[70vh]">
                  <embed
                    src={item.url}
                    type="application/pdf"
                    className="w-full h-full rounded-lg"
                  />
                </div>
              );
            }

            if (item.type === 'image' && item.url) {
              return (
                <div key={index} className="w-full h-full flex justify-center items-center">
                  <img
                    src={item.url}
                    alt={item.alt || "Image"}
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                </div>
              );
            }

            if (item.type === 'text' && item.text) {
              return (
                <div key={index} className="w-full h-full p-4">
                  <p>{item.text}</p>
                </div>
              );
            }

            return null;
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
