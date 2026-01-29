import { Phone, Mail, MapPin, Send } from "lucide-react";
import toast from "react-hot-toast";
export default function Journey() { 
  const handleSubmit = (e) => {
    e.preventDefault(); 
    toast.success("شكراً على رسالتك! برجاء التواصل معنا على الواتساب لحل المشكلة أسرع.", {
      duration: 6000,
      position: "top-center",
    });

    e.target.reset();
  };

  return (
    <div id="contact" className="pt-24 min-h-screen bg-slate-50 font-['Cairo']" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-black text-[#0B3D91] mb-6">
            يسعدنا تواصلك معنا
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto font-medium">
            فريقنا جاهز للرد على استفساراتك وشكواتك ومساعدتك في اختيار المسار الأنسب لك.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-[#0B3D91] p-10 rounded-[3rem] text-white shadow-2xl">
              <h3 className="text-2xl font-black mb-10">معلومات الاتصال</h3>

              <div className="space-y-8">
                <a href="tel:+201228926378" className="flex gap-6 items-start group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-[#FBBF24] transition-colors">
                    <Phone size={20} className="text-[#FBBF24] group-hover:text-[#0B3D91]" />
                  </div>
                  <div>
                    <div className="text-xs text-blue-100/50 font-bold mb-1">اتصل بنا</div>
                    <div className="font-black group-hover:text-[#FBBF24] transition-colors font-['Arial']">01228926378</div>
                  </div>
                </a>

                <a href="mailto:masaraltafouq@gmail.com" className="flex gap-6 items-start group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-[#FBBF24] transition-colors">
                    <Mail size={20} className="text-[#FBBF24] group-hover:text-[#0B3D91]" />
                  </div>
                  <div>
                    <div className="text-xs text-blue-100/50 font-bold mb-1">البريد الإلكتروني</div>
                    <div className="font-black group-hover:text-[#FBBF24] transition-colors text-sm md:text-base">masaraltafouq@gmail.com</div>
                  </div>
                </a>

                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex gap-6 items-start group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-[#FBBF24] transition-colors">
                    <MapPin size={20} className="text-[#FBBF24] group-hover:text-[#0B3D91]" />
                  </div>
                  <div>
                    <div className="text-xs text-blue-100/50 font-bold mb-1">الموقع</div>
                    <div className="font-black group-hover:text-[#FBBF24] transition-colors">محافظة بني سويف، مصر</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-slate-100">
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-8">
                  <input
                    required
                    type="text"
                    placeholder="الاسم الكامل"
                    className="w-full bg-slate-50 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-[#FBBF24] border border-transparent focus:bg-white transition-all"
                  />
                  <input
                    required
                    type="email"
                    placeholder="البريد الإلكتروني"
                    className="w-full bg-slate-50 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-[#FBBF24] border border-transparent focus:bg-white transition-all"
                  />
                </div>

                <input
                  required
                  type="text"
                  placeholder="الموضوع"
                  className="w-full bg-slate-50 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-[#FBBF24] border border-transparent focus:bg-white transition-all"
                />

                <textarea
                  required
                  rows="5"
                  placeholder="اكتب شكوتك هنا..."
                  className="w-full bg-slate-50 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-[#FBBF24] border border-transparent focus:bg-white transition-all"
                ></textarea>

                <button 
                  type="submit"
                  className="bg-[#0B3D91] text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-[#FBBF24] hover:text-[#0B3D91] transition-all flex items-center gap-3 active:scale-95"
                >
                  إرسال الرسالة <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}