import { BookOpen, Briefcase, Heart, ChevronLeft } from "lucide-react";
export default function Courses() {
  return (
    <section className="py-32 bg-slate-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-black mb-6">المسارات التعليمية</h2>
            <p className="text-slate-500 text-lg">
              اكتشف تخصصاتنا المصممة بعناية لتلبية تطلعاتك الدراسية والوصول الي اعلي المستويات في كل المواد.
            </p>
          </div>

          <button className="text-[#0B3D91] font-bold flex items-center gap-2 group">
            عرض جميع المسارات
            <ChevronLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
          </button>
        </div>

        {/* Grid Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "التفوق الأكاديمي",
              desc: " برامج متخصصة لطلاب المدارس لضمان أعلى المستويات الدراسية.في جميع المواد ذي العربي والانجليزي والرياضيات والعلوم والدراسات",
              icon: <BookOpen size={32} />,
              dark: false,
            },
            {
              title: "المهارات الدراسية",
              desc: "اكتسب المهارات الدراسية المطلوبة لي اجتياز اصعب الامتحانات في جميع المواد ومن خلالنا تصبح الدراسه اسهل وامتع",
              icon: <Briefcase size={32} />,
              dark: true,
            },
            {
              title: "تطوير الذات",
              desc: "عزز من قدراتك القيادية وذكائك العاطفي لتبني حياة متوازنة وناجحة.",
              icon: <Heart size={32} />,
              dark: false,
            },
          ].map((course, idx) => (
            <div
              key={idx}
              className={`p-12 rounded-[3rem] shadow-xl transition-all hover:-translate-y-2 ${
                course.dark
                  ? "bg-[#0B3D91] text-white"
                  : "bg-white text-[#0B3D91]"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${
                  course.dark
                    ? "bg-[#FBBF24] text-[#0B3D91]"
                    : "bg-[#0B3D91]/5"
                }`}
              >
                {course.icon}
              </div>

              <h3 className="text-2xl font-black mb-4">{course.title}</h3>
              <p
                className={`leading-relaxed mb-10 ${
                  course.dark ? "text-blue-100/70" : "text-slate-500"
                }`}
              >
                {course.desc}
              </p>

              <div
                className={`h-1 w-12 rounded-full ${
                  course.dark ? "bg-[#FBBF24]" : "bg-[#0B3D91]/10"
                }`}
              ></div>
            </div>
          ))}
        </div> 
      </div> 
    </section> 
  );
}
