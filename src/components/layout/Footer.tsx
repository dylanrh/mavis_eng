import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card/50 py-6 text-center border-t">
      <div className="container mx-auto px-4">
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
          Made with <Heart className="w-4 h-4 text-primary" /> for our special day.
        </p>
        <p className="text-xs text-muted-foreground/80 mt-1">
          &copy; {currentYear} Forever Us. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
