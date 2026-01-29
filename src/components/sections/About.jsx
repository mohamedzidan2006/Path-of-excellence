import Student from '../../assets/Students.png'
export default function About() {
  return (
    <section className="py-16 md:py-32 bg-white" dir="rtl">
  <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
    <div className="max-w-3xl mx-auto flex flex-col items-center">
      <div className="inline-block bg-[#0B3D91]/5 px-5 py-2 rounded-full mb-6">
        <span className="text-[#0B3D91] font-bold text-xs md:text-sm tracking-widest uppercase">
          من نحن
        </span>
      </div>

      <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
        نحن لا نقدم مجرد دورات، بل نصنع{" "}
        <span className="text-[#FBBF24]">مستقبلاً</span> واعداً
      </h2>

      <p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-10">
        تأسست أكاديمية مسار التفوق لتكون المنارة الأولى في العالم العربي التي
        تجمع بين جودة المحتوى التعليمي وسهولة الوصول الرقمي.
      </p>
      <div className='w-full max-w-125 px-4'>
        <img 
          src={Student} 
          alt="photo" 
          className="w-full h-auto object-contain rounded-2xl" 
        />
      </div>
    </div>
  </div>
</section>
  );
}
