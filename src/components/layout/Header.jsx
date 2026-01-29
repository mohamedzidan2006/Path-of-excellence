import { GraduationCap } from "lucide-react";
export default function Header() {
  const navLinks = [
    { name: "الرئيسية", href: "#" },
    { name: "عن الأكاديمية", href: "#about" },
    { name: "المسارات", href: "#tracks" },
    { name: "تواصل معنا", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#0B3D91]/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-[#FBBF24] rounded-xl flex items-center justify-center shadow-lg shadow-[#FBBF24]/20 group-hover:rotate-6 transition-transform">
            <GraduationCap size={24} className="text-[#0B3D91]" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-[#0B3D91]">
            مسار التفوق
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10 font-bold text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#0B3D91] hover:text-[#FBBF24] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        <a 
          href="https://www.facebook.com/share/1ARVNrzR9X/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#0B3D91] text-white px-8 py-2.5 rounded-xl font-bold text-sm hover:shadow-xl hover:shadow-[#0B3D91]/20 transition-all active:scale-95 inline-block"
        >
          انضم إلينا
        </a>
      </div>
    </nav>
  );
}
