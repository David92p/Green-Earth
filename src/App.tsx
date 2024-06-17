import { BrowserRouter } from "react-router-dom"
import { Router, Navbar, Header, Footer } from "./components"

import "./App.css"


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
