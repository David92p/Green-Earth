import { DataSearch, Header, Main } from "./components"


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
    <div className="flex flex-col bg-firstyellow">
      <Header />
      <DataSearch/>
      <Main/>
    </div>
  )
}

export default App
