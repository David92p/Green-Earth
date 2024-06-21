import { BrowserRouter } from "react-router-dom"

// style 
import "./App.css"

import { Header, Footer } from "./components"
import { Navbar, Router } from "./shared"


const App:React.FC = () => {

  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
