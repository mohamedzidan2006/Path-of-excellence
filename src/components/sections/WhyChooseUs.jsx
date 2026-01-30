import { Quote } from "lucide-react";
import Teacher from '../../assets/Teacher.png'
import image2 from '../../assets/img2.jpg'
import image3 from '../../assets/img3.jpg'
export default function WhyChooseUs() {
  const stories = [
    {
      name: "المعلمة ضحي",
      role: "معلمة مادة العلوم",
      text: " تعلم مادة العلوم بأسلوب متميز و بي احدث الطرق وتساعدك علي التقدم المستمر",
      image:image2,
    },
    {
      name: "المعلمة رحاب",
      role: "معلمة اللغة العربية",
      text: " معلمة اللغة العربية هي تدرس بي اتقان شديد واحترافيه عالية",
      image:Teacher,
    },
    {
      name: "المعلمةهناء",
      role: "معلمة الرياضيات",
      text: "تدرس الرياضيات بأسلوب مميز وفريد من نوعه ومن  خلالها التعليم يكون ابسط",
      image:image3,
    },
  ];

  return (
    <div className="pt-5 min-h-screen bg-white " dir="rtl">
      <div className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-[#0B3D91] mb-8">
            لماذا تختار مسار التفوق
          </h1>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto leading-relaxed">
               انضم إلى أكثر من ١٥,٠٠٠ طالب وطالبة غيروا مسار حياتهم الدراسيه
              والاجتماعيه من خلال أكاديمية مسار التفوق.في كل المواد الدراسيه انجليزي,عربي,رياضيات,علوم,دراسات
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {stories.map((story, i) => (
            <div
              key={i}
              className="group bg-white p-10 rounded-[3.5rem] shadow-xl border border-slate-100 relative hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute -top-10 right-10 w-20 h-20 rounded-4xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="pt-10 space-y-8">
                <Quote className="text-[#FBBF24]" size={40} />
                <p className="text-slate-600 text-lg italic leading-relaxed font-medium">
                  "{story.text}"
                </p>

                <div className="pt-8 border-t border-slate-50">
                  <div className="font-black text-[#0B3D91] text-xl mb-1">
                    {story.name}
                  </div>
                  <div className="text-[#FBBF24] font-bold text-sm">
                    {story.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

