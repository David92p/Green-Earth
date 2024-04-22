import { Navbar, Contact, DataSearch, Header, Main, Footer, Introduction } from "./components"

import "./App.css"


const App:React.FC = () => {

  // useEffect(() => {
  //   fetch("https://api.v2.emissions-api.org/api/v2/carbonmonoxide/statistics.json?country=it&interval=week&end=2024-04-05&limit=1&offset=0")
  //   .then(res => {
  //     const x = res.json()
  //     return x
  //   })
  //   .then(res => {
  //     console.log(res)
  //   })
  // }, [])

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
