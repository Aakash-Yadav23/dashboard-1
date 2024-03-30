import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';


interface NavbarComponent {
  id: number;
  label: string;
  path: string;
}

interface NavItemProps {
  children: React.ReactNode;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ children, className }) => {
  return (
    <li
      className={cn(
        'relative',
        'transition-colors',
        'hover:text-primary',
        'dark:hover:text-primary-foreground',
        className
      )}
    >
      {children}
    </li>
  );
};

const NavbarComponents: NavbarComponent[] = [
  {
    id: 1,
    label: 'Home',
    path: '/',
  },
  {
    id: 2,
    label: 'Projects',
    path: '/projects',
  },
  {
    id: 3,
    label: 'About',
    path: '/about',
  },
  {
    id: 4,
    label: 'Contact',
    path: '/contact',
  },
  {
    id: 5,
    label: 'Notification',
    path: '/notification',
  },
];

const Navbar: React.FC = () => {
  return (
    <nav className="flex gap-4 p-4 bg-gray-800">
      <div className="mx-auto">
        <ul className="flex gap-4">
          {NavbarComponents.map((item) => (
            <NavItem key={item.id}>
              <Link href={item.path} className="text-gray-300 hover:text-gray-100 transition-colors">
                {item.label}
              </Link>
            </NavItem>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;