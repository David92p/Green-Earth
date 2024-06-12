import { Navbar, Contact, DataSearch, Header, Main, Footer, Introduction } from "./components"

import "./App.css"


const App:React.FC = () => {

  return (
    <div className="container">
      <Navbar />
      <Header />
      <Introduction/>
      <DataSearch/>
      <Main/>
      <Contact/>
      <Footer />
    </div>
  )
}

export default App
