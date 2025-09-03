
import Faq from "./components/Faq"
import Herosection from "./components/Herosection"
import Navbar from "./components/Navbar"
import Section2 from "./components/Section2"
import Section3 from "./components/Section3"
import Section4 from "./components/Section4"
import Section5 from "./components/Section5"
import Section6 from "./components/Section6"
import Footersection from "./components/Footersection.tsx"
import Services from "./components/Services"
import Testimony from "./components/Testimony"
function App() {

  return (
    <div>
      <Navbar/>
      <Herosection/>
       <Section2/>
       <Section3/>
       <Section4/>
       <Section5/>
       <Section6/>
       <Testimony/>
       <Faq/>
       <Services/>
       <Footersection/>
    
    </div>
  )
}

export default App
