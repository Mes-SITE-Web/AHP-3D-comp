import { Facebook, Instagram, Youtube } from 'lucide-react';

export function SocialLinks() {
  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://www.facebook.com/profile.php?id=61552761924550',
      label: 'Facebook',
      color: 'hover:text-blue-500'
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/ahp.studiovj/',
      label: 'Instagram',
      color: 'hover:text-pink-500'
    },
    {
      icon: Youtube,
      href: '#',
      label: 'Youtube',
      color: 'hover:text-red-500'
    }
  ];


  return (
    <section id="contact" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        
        <div className="flex justify-center gap-8">
          {socialLinks.map(({ icon: Icon, href, label, color }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className={`text-white transition-colors duration-200 ${color}`}
            >
              <Icon size={32} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}