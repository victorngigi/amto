import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground shadow-inner mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center py-6">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} AMTO. All rights reserved.
        </p>
        <div className="space-x-4 mt-4 md:mt-0">
          <Button variant="ghost" size="sm" asChild>
            <a href="#" className="hover:text-secondary">Facebook</a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="#" className="hover:text-secondary">Twitter</a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="#" className="hover:text-secondary">Instagram</a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
