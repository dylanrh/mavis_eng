"use client";

import Link from "next/link";
import { Icon, Leaf, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  // { href: "/activities", label: "Local Activities" },
  { href: "/accommodation", label: "Accommodations" },
  // { href: "/theme-advisor", label: "Theme Advisor" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const NavLinkItem = ({
    href,
    label,
    onClick,
  }: {
    href: string;
    label: string;
    onClick?: () => void;
  }) => (
    <Link href={href} passHref>
      <Button
        variant="ghost"
        className={cn(
          "text-foreground hover:bg-primary/20 hover:text-primary-foreground",
          pathname === href ? "font-semibold text-primary" : ""
        )}
        onClick={onClick}
      >
        {label}
      </Button>
    </Link>
  );

  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-primary"
        >
          {/* <Leaf className="h-8 w-8" /> */}
          <img src="../favicon.ico" alt="Dy-Kal Logo" className="h-8 w-8" />
          <span>Dy-Kal</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-2">
          {navLinks.map((link) => (
            <NavLinkItem key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] bg-card p-4">
              <div className="flex justify-between items-center mb-6">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-xl font-bold text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {/* <Leaf className="h-7 w-7" /> */}
                  <img
                    src="../favicon.ico"
                    alt="Dy-Kal Logo"
                    className="h-8 w-8"
                  />
                  <span>Dy-Kal</span>
                </Link>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <NavLinkItem
                    key={link.href}
                    href={link.href}
                    label={link.label}
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
