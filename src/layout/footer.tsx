'use client';

import Link from 'next/link';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants/navigation';

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-8 py-4">
        <p className="mb-4 text-sm text-center text-muted-foreground sm:mb-0">
          &copy; {new Date().getFullYear()}{' '}
          <Link href="/" className="hover:underline">
            {SITE_CONFIG.name}
          </Link>
        </p>

        <div className="flex justify-center items-center space-x-1">
          {SOCIAL_LINKS.map(({ href, icon: Icon, label, hoverColor }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex justify-center p-2 text-muted-foreground rounded-lg cursor-pointer ${hoverColor} hover:bg-accent`}
            >
              <Icon className="w-5 h-5" />
              <span className="sr-only">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}