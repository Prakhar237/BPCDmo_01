'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X, ArrowUpRight } from 'lucide-react';
import SearchModal from '../common/SearchModal';
import ProcurementModal from '../common/ProcurementModal';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [procurementOpen, setProcurementOpen] = useState(false);

  // Keyboard shortcut Cmd+K or Ctrl+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Products', href: '/products' },
    { name: 'Technology', href: '/technology' },
    { name: 'Intelligence', href: '/ai' },
    { name: 'Connect', href: '/connect' },
    { name: 'Solutions', href: '/hospital-solutions' },
    { name: 'Specialties', href: '/specialties' },
    { name: 'Research', href: '/research' },
    { name: 'Company', href: '/company' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="BloodPact Life Home"
            style={{ color: '#0A0A0A' }}
          >
            <span
              className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#B11226] text-[11px] font-semibold tracking-[0.18em] text-white font-[family-name:var(--font-display)]"
              aria-hidden
            >
              BP
            </span>
            <span className="flex items-baseline gap-1.5 leading-none">
              <span className="font-[family-name:var(--font-display)] text-[17px] sm:text-[18px] font-semibold tracking-[-0.02em]" style={{ color: '#0A0A0A' }}>
                BloodPact
              </span>
              <span className="font-serif text-[16px] sm:text-[17px] italic font-normal" style={{ color: 'rgba(10,10,10,0.55)' }}>
                Life
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 sm:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 text-[14px] font-medium transition-precision rounded-md ${
                    isActive
                      ? 'text-[#0A0A0A] font-semibold bg-black/[0.04]'
                      : 'text-[#0A0A0A]/70 hover:text-[#0A0A0A] hover:bg-black/[0.03]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Utilities */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Search Trigger */}
            <button
              onClick={() => setSearchOpen(true)}
              type="button"
              className="flex items-center gap-2 px-3 py-1.5 text-xs text-[#0A0A0A]/60 bg-black/[0.03] hover:bg-black/[0.06] rounded-lg border border-black/[0.06] transition-precision"
              title="Search medical catalog (⌘K)"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="text-[13px]">Search</span>
              <kbd className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-black/[0.06] text-[#0A0A0A]/40">
                ⌘K
              </kbd>
            </button>

            {/* Enterprise Proposal / Contact CTA */}
            <button
              onClick={() => setProcurementOpen(true)}
              className="flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-lg bg-[#0A0A0A] text-white hover:bg-[#B11226] transition-precision shadow-sm"
            >
              <span>Request Proposal</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu & Search triggers */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-[#0A0A0A]/70 hover:text-[#0A0A0A] rounded-lg hover:bg-black/[0.04]"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0A0A0A] rounded-lg hover:bg-black/[0.04]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Full Screen / Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-white border-b border-black/[0.08] px-6 py-6 transition-precision">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-[#0A0A0A]/85 py-2 border-b border-black/[0.04]"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setProcurementOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#B11226] text-white font-medium text-sm"
                >
                  <span>Request Institutional Proposal</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center py-3 px-4 rounded-xl bg-black/5 text-[#0A0A0A] font-medium text-sm text-center"
                >
                  Contact BloodPact Life
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Modals */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <ProcurementModal isOpen={procurementOpen} onClose={() => setProcurementOpen(false)} />
    </>
  );
}
