import Navbar from "./Navbar"
import Pricing from "./pages/Pricing"
import Home from "./pages/Home"
import About from "./pages/About"
import Footbar from "./Footbar"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
      <div className="fix-button">
        <a
          href="https://api.whatsapp.com/send?phone=9352299663"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          <img src="images/whatsapp-icon.png" alt="Contact us" className="whatsapp-icon" />
        </a>
      </div>
      <Footbar />
    </>
  )
}

export default App