import Student from '../../assets/Students.png'
export default function About() {
  return (
    <section className="py-32 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-block bg-[#0B3D91]/5 px-5 py-2 rounded-full mb-8">
            <span className="text-[#0B3D91] font-bold text-sm tracking-widest uppercase">
              من نحن
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">
            نحن لا نقدم مجرد دورات، بل نصنع{" "}
            <span className="text-[#FBBF24]">مستقبلاً</span> واعداً
          </h2>

          <p className="text-slate-500 text-xl leading-relaxed mb-12">
            تأسست أكاديمية مسار التفوق لتكون المنارة الأولى في العالم العربي التي
            تجمع بين جودة المحتوى التعليمي وسهولة الوصول الرقمي.
          </p>
          <div className=' w-125   object-contain'>
            <img src={Student} alt=" photo"  />
          </div>
        </div>
      </div>
    </section>
  );
}
