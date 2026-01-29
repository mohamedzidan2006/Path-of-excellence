import { GraduationCap } from "lucide-react";
export default function Hero() {
  return (
    <section className="relative pt-48 pb-32 bg-[#0B3D91] overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-[#0B3D91] via-[#093175] to-[#06214d]" />

      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FBBF24] rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center gap-3">
        <div className="mb-10">
          <div className="w-24 h-24 bg-[#FBBF24] rounded-4xl flex items-center justify-center shadow-2xl shadow-[#FBBF24]/30 mb-6 mx-auto">
            <GraduationCap size={48} className="text-[#0B3D91]" />
          </div>
          <span className="text-[#FBBF24] font-bold text-lg tracking-widest uppercase">
            Path of Excellence
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
          طريقك نحو <span className="text-[#FBBF24]">التميز</span> الأكاديمي
        </h1>

        <p className="text-blue-100/80 text-xl max-w-2xl mb-12">
          أكاديمية تعليمية رائدة تمزج بين الابتكار والقيم الأصيلة.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mb-16">
          <a 
            href="https://www.facebook.com/share/1ARVNrzR9X/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#FBBF24] text-[#0B3D91] px-12 py-5 rounded-2xl font-black hover:bg-white transition-all text-center"
          >
            ابدأ رحلتك الآن
          </a>
          <a 
            href="#tracks" 
            className="bg-white/5 border border-white/20 text-white px-12 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all text-center"
          >
            تصفح المسارات
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full pt-12 border-t border-white/10">
          {[
            { label: "طالب ناجح", value: "+١٥,٠٠٠" },
            { label: "دورة تدريبية", value: "+٢٥٠" },
            { label: "خبير متخصص", value: "+٨٠" },
            { label: "نسبة الرضا", value: "٩٨٪" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-black text-white mb-2">
                {stat.value}
              </div>
              <div className="text-blue-100/50 text-sm font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
