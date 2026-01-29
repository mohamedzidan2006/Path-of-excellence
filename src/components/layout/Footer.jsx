// import { 
//   GraduationCap, 
//   Mail, 
//   Phone, 
//   MapPin, 
//   Twitter, 
//   Facebook, 
//   Instagram, 
//   Heart 
// } from 'lucide-react';

// export default function Footer() {
//   const socialLinks = [
//     { Icon: Facebook, link: "https://www.facebook.com/share/1ARVNrzR9X/", color: "hover:text-blue-500" },
//     { Icon: Twitter, link: "https://twitter.com/your_username", color: "hover:text-sky-400" },
//     { Icon: Instagram, link: "https://instagram.com/your_username", color: "hover:text-pink-500" },
//   ];

//   // مصفوفة الروابط السريعة مع الـ href المناسب لكل سكشن
//   const quickLinks = [
//     { name: 'جميع المسارات', href: '#tracks' },
//     { name: 'عن الأكاديمية', href: '#about' },
//     { name: 'الصفحه الرئيسيه', href: '#' }, // يمكنك إضافة id لسكشن الأسئلة لاحقاً
//   ];

//   return (
//     <footer className="bg-[#0B3D91] pt-24 pb-12 text-white border-t border-white/5" dir="rtl">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
//           {/* Brand Column */}
//           <div className="space-y-8">
//             <div className="flex items-center gap-3">
//               <div className="w-12 h-12 bg-[#FBBF24] rounded-2xl flex items-center justify-center shadow-lg shadow-[#FBBF24]/10">
//                 <GraduationCap size={28} className="text-[#0B3D91]" />
//               </div>
//               <span className="text-3xl font-black tracking-tighter">مسار التفوق</span>
//             </div>
//             <p className="text-blue-100/60 leading-relaxed text-sm font-medium">
//               أكاديمية رائدة تهدف إلى تمكين الكوادر العربية من خلال تعليم عصري ومبتكر يواكب تطلعات المستقبل ويصنع قادة الغد.
//             </p>
//             <div className="flex gap-4">
//               {socialLinks.map((social, i) => (
//                 <a 
//                   key={i} 
//                   href={social.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={`w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-white ${social.color} hover:-translate-y-1 transition-all`}
//                 >
//                   <social.Icon size={20} />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links - تم تعديله ليدعم التنقل الداخلي */}
//           <div>
//             <h5 className="font-black text-xl mb-8 relative inline-block">
//               روابط سريعة
//               <span className="absolute -bottom-2 right-0 w-8 h-1 bg-[#FBBF24] rounded-full"></span>
//             </h5>
//             <ul className="space-y-4 text-blue-100/60 text-sm font-bold">
//               {quickLinks.map((link) => (
//                 <li key={link.name}>
//                   <a href={link.href} className="hover:text-[#FBBF24] transition-colors flex items-center gap-2 group">
//                     <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24] opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h5 className="font-black text-xl mb-8 relative inline-block">
//               تواصل معنا
//               <span className="absolute -bottom-2 right-0 w-8 h-1 bg-[#FBBF24] rounded-full"></span>
//             </h5>
//             <ul className="space-y-6 text-blue-100/60 text-sm font-bold">
//               <li className="flex items-start gap-4">
//                 <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 text-[#FBBF24]">
//                   <Mail size={18} />
//                 </div>
//                 <div className="pt-1">
//                   <div className="text-[10px] uppercase tracking-widest text-blue-100/30 mb-1">البريد الإلكتروني</div>
//                   <a href="mailto:masaraltafouq@gmail.com" className="text-white hover:text-[#FBBF24] transition-colors">
//                     masaraltafouq@gmail.com
//                   </a>
//                 </div>
//               </li>
//               <li className="flex items-start gap-4">
//                 <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 text-[#FBBF24]">
//                   <Phone size={18} />
//                 </div>
//                 <div className="pt-1">
//                   <div className="text-[10px] uppercase tracking-widest text-blue-100/30 mb-1">رقم الهاتف</div>
//                   <a href="tel:+201228926378" className="text-white hover:text-[#FBBF24] transition-colors" dir="ltr">
//                     01228926378
//                   </a>
//                 </div>
//               </li>
//               <li className="flex items-start gap-4">
//                 <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 text-[#FBBF24]">
//                   <MapPin size={18} />
//                 </div>
//                 <div className="pt-1">
//                   <div className="text-[10px] uppercase tracking-widest text-blue-100/30 mb-1">المقر الرئيسي</div>
//                   <a 
//                     href="https://maps.google.com" 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="text-white leading-relaxed hover:text-[#FBBF24] transition-colors"
//                   >
//                     محافظة بني سويف، مصر
//                   </a>
//                 </div>
//               </li>
//             </ul>
//           </div>

//           {/* Newsletter Section */}
//           <div>
//             <h5 className="font-black text-xl mb-8 relative inline-block">
//               النشرة البريدية
//               <span className="absolute -bottom-2 right-0 w-8 h-1 bg-[#FBBF24] rounded-full"></span>
//             </h5>
//             <p className="text-blue-100/50 text-sm mb-6 leading-relaxed font-medium">
//               اشترك لتصلك أحدث الدورات والخصومات الحصرية من خلال التواصل معنا على وسائل التواصل الاجتماعي أو الواتساب.
//             </p>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
//           <div className="text-blue-100/30 text-sm font-bold order-2 md:order-1">
//             © ٢٠٢٦ أكاديمية مسار التفوق. جميع الحقوق محفوظة.
//           </div>
          
//           <div className="flex items-center gap-2 order-1 md:order-2">
//             <span className="text-blue-100/30 text-sm font-bold">صُنع بكل</span>
//             <Heart size={16} className="text-[#FBBF24] fill-[#FBBF24] animate-pulse" />
//             <span className="text-blue-100/30 text-sm font-bold">للمستقبل العربي</span>
//           </div>

//           <div className="flex gap-8 order-3">
//             <a href="#" className="text-blue-100/30 text-sm font-bold hover:text-[#FBBF24] transition-colors">سياسة الخصوصية</a>
//             <a href="#" className="text-blue-100/30 text-sm font-bold hover:text-[#FBBF24] transition-colors">شروط الاستخدام</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
import { 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Heart 
} from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { Icon: Facebook, link: "https://www.facebook.com/share/1ARVNrzR9X/", color: "hover:text-blue-500" },
    { Icon: Twitter, link: "https://twitter.com/your_username", color: "hover:text-sky-400" },
    { Icon: Instagram, link: "https://instagram.com/your_username", color: "hover:text-pink-500" },
  ];
  const quickLinks = [
    { name: 'جميع المسارات', href: '#tracks' },
    { name: 'عن الأكاديمية', href: '#about' },
    { name: 'الصفحة الرئيسية', href: '#' },
  ];

  return (
    <footer className="bg-[#0B3D91] pt-24 pb-12 text-white border-t border-white/5" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#FBBF24] rounded-2xl flex items-center justify-center shadow-lg shadow-[#FBBF24]/10">
                <GraduationCap size={28} className="text-[#0B3D91]" />
              </div>
              <span className="text-3xl font-black tracking-tighter">مسار التفوق</span>
            </div>
            <p className="text-blue-100/60 leading-relaxed text-sm font-medium">
              أكاديمية رائدة تهدف إلى تمكين الكوادر العربية من خلال تعليم عصري ومبتكر يواكب تطلعات المستقبل ويصنع قادة الغد.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-white ${social.color} hover:-translate-y-1 transition-all`}
                >
                  <social.Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h5 className="font-black text-xl mb-8 relative inline-block">
              روابط سريعة
              <span className="absolute -bottom-2 right-0 w-8 h-1 bg-[#FBBF24] rounded-full"></span>
            </h5>
            <ul className="space-y-4 text-blue-100/60 text-sm font-bold">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-[#FBBF24] transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-black text-xl mb-8 relative inline-block">
              تواصل معنا
              <span className="absolute -bottom-2 right-0 w-8 h-1 bg-[#FBBF24] rounded-full"></span>
            </h5>
            <ul className="space-y-6 text-blue-100/60 text-sm font-bold">
              <li>
                <a href="mailto:masaraltafouq@gmail.com" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 text-[#FBBF24] group-hover:bg-[#FBBF24] group-hover:text-[#0B3D91] transition-all">
                    <Mail size={18} />
                  </div>
                  <div className="pt-1">
                    <div className="text-[10px] uppercase tracking-widest text-blue-100/30 mb-1">البريد الإلكتروني</div>
                    <div className="text-white group-hover:text-[#FBBF24] transition-colors">
                      masaraltafouq@gmail.com
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:+201228926378" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 text-[#FBBF24] group-hover:bg-[#FBBF24] group-hover:text-[#0B3D91] transition-all">
                    <Phone size={18} />
                  </div>
                  <div className="pt-1">
                    <div className="text-[10px] uppercase tracking-widest text-blue-100/30 mb-1">رقم الهاتف</div>
                    <div className="text-white group-hover:text-[#FBBF24] transition-colors" dir="ltr">
                      01228926378
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 text-[#FBBF24] group-hover:bg-[#FBBF24] group-hover:text-[#0B3D91] transition-all">
                    <MapPin size={18} />
                  </div>
                  <div className="pt-1">
                    <div className="text-[10px] uppercase tracking-widest text-blue-100/30 mb-1">المقر الرئيسي</div>
                    <div className="text-white leading-relaxed group-hover:text-[#FBBF24] transition-colors">
                      محافظة بني سويف، مصر
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-black text-xl mb-8 relative inline-block">
           الاشتراك
              <span className="absolute -bottom-2 right-0 w-8 h-1 bg-[#FBBF24] rounded-full"></span>
            </h5>
            <p className="text-blue-100/50 text-sm mb-6 leading-relaxed font-medium">
              اشترك لتصلك أحدث الدورات والخصومات الحصرية من خلال التواصل معنا على وسائل التواصل الاجتماعي فيس بوك ,انستجرام ,تويتر أو الواتساب.
            </p>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-blue-100/30 text-sm font-bold order-2 md:order-1">
            © ٢٠٢٦ أكاديمية مسار التفوق. جميع الحقوق محفوظة.
          </div>
          
          <div className="flex items-center gap-2 order-1 md:order-2">
            <span className="text-blue-100/30 text-sm font-bold">صُنع بكل</span>
            <Heart size={16} className="text-[#FBBF24] fill-[#FBBF24] animate-pulse" />
            <span className="text-blue-100/30 text-sm font-bold">للمستقبل العربي</span>
          </div>

          <div className="flex gap-8 order-3">
            <a href="#" className="text-blue-100/30 text-sm font-bold hover:text-[#FBBF24] transition-colors">سياسة الخصوصية</a>
            <a href="#" className="text-blue-100/30 text-sm font-bold hover:text-[#FBBF24] transition-colors">شروط الاستخدام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}