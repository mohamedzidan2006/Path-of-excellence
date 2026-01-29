import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./components/sections/Courses";
import About from "./components/sections/About";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Journey from "./components/sections/Journey";
import { Toaster } from "react-hot-toast";
export default function App() {
  return(
  <div >
    <Toaster/>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Home />} />
  <Route path="/courses" element={<Courses />} />
  <Route path="/about" element={<About />} />
  <Route path="/whyChooseUs" element={<WhyChooseUs />} />
   <Route path="/journey" element={<Journey />} />
  </Routes>
   </BrowserRouter>
   </div>
  )
}



