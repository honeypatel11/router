import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import User from "./pages/User"
import Userdetail from "./pages/Userdetail"


const App = () => {
  return (
    <div>
     <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={  <About/>}></Route>
          <Route path="/Services" element={<Services/>}></Route>
          <Route path="/User" element={<User/>}></Route>
          <Route path="/Userdetail/:id" element={<Userdetail />}></Route>
        
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App