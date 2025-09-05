
import Faq from "./components/Faq"
import Herosection from "./components/Herosection"
import Navbar from "./components/Navbar"
import WorkingProcess from "./components/WorkingProcess.tsx"
import Pricing from "./components/Pricing.tsx"
import Location from "./components/Location"
import WorkingHours from "./components/WorkingHours"
import Testimonial from "./components/Testimonial"
import Footersection from "./components/Footersection.tsx"
import Services from "./components/Services"
import WhoWeAre from "./components/WhoWeAre"
function App() {

  return (
    <div>
      <Navbar/>
      <Herosection/>
       <WorkingProcess/>
       <Pricing/>
       <Location/>
       <WorkingHours/>
       <Testimonial/>
       <WhoWeAre/>
       <Faq/>
       <Services/>
       <Footersection/>
    
    </div>
  )
}

export default App
