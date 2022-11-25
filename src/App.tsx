import { useState, useEffect } from 'react'
import Header from './components/Header'
import Info from './components/Info'
import Map from './components/Map'

function App() {
  const [address, setAddress] = useState<any>(null)
  const [ipAddress, setIpAddress] = useState('')

  useEffect(() => {
    try {
      const getInitialData = async () => {
        const res = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}`
        )
        const data = await res.json()
        setAddress(data)
      }
      getInitialData()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <div className="App">
      <Header
        ipAddress={ipAddress}
        setIpAddress={setIpAddress}
        setAddress={setAddress}
      />
      {address && <Info address={address} />}
      {address && <Map address={address} />}
    </div>
  )
}

export default App
