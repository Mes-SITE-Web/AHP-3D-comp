import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Logo } from './Logo';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-black/50 backdrop-blur-lg"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <Logo />
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X /> : <Menu />}
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#accueil">Accueil</NavLink>
            <NavLink href="#galerie">Galerie</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="md:hidden bg-black/90 backdrop-blur-lg"
        >
          <div className="px-4 py-4 space-y-4">
            <MobileNavLink href="#accueil" onClick={() => setIsOpen(false)}>
              Accueil
            </MobileNavLink>
            <MobileNavLink href="#galerie" onClick={() => setIsOpen(false)}>
              Galerie
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </MobileNavLink>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-white transition-colors duration-200"
    >
      {children}
    </a>
  );
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block text-gray-300 hover:text-white transition-colors duration-200"
    >
      {children}
    </a>
  );
}