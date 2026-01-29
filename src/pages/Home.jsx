import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Courses from "../components/sections/Courses";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Journey from "../components/sections/Journey";
import Testimonials from "../components/sections/Testimonials";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-white text-[#0B3D91] font-['Cairo'] antialiased selection:bg-[#FBBF24] selection:text-[#0B3D91]"
      dir="rtl"
    >
      <Header />
      <Hero />
      <div id='about'>
      <About />
      </div>
      <div id='tracks'>
      <Courses />
      </div>
      <WhyChooseUs />
      <Journey />
      <Testimonials />
      <div id='contact'>
      <Footer />
      </div>
    </div>
  );
}

