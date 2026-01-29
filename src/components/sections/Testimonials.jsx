import { GraduationCap } from 'lucide-react';
export default function Testimonials() {
  return (
    <section className="relative py-24 px-6 overflow-hidden ">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-[#0B3D91] rounded-[3rem] p-12 md:p-20 overflow-hidden shadow-2xl shadow-[#0B3D91]/20">
          
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FBBF24] rounded-full blur-[120px]"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white rounded-full blur-[100px]"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-[#FBBF24] rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-[#FBBF24]/20 rotate-3">
              <GraduationCap size={40} className="text-[#0B3D91]" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight max-w-3xl">
              هل أنت مستعد لتبدأ رحلة <span className="text-[#FBBF24]">التفوق</span> الحقيقية؟
            </h2>
            
            <p className="text-blue-100/70 text-lg md:text-xl mb-12 max-w-2xl font-medium">
              انضم الآن إلى آلاف الطلاب الذين غيروا مسار حياتهم الدراسية والأكاديمية من خلال برامجنا المعتمدة؛ في الرياضيات والعلوم والدراسات والإنجليزي والعربي، هذا بالإضافة إلى برامج تطوير الذات.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href="https://www.facebook.com/share/1ARVNrzR9X/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#FBBF24] text-[#0B3D91] px-12 py-5 rounded-2xl font-black text-lg hover:bg-white hover:-translate-y-1 transition-all shadow-xl shadow-[#FBBF24]/30 text-center inline-block"
              >
                انضم إلينا الآن
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

