import { useState, useEffect } from 'react'
import Header from './components/header/Header'
import Info from './components/info/Info'
import Map from './components/map/Map'
import './App.css'

function App() {
  // address state is used to store the data from the API
  const [address, setAddress] = useState<any>(null)
  // ip state is used to store the ip address from the input
  const [ipAddress, setIpAddress] = useState('')

  // useEffect is used to get the user's IP address and location when the app loads
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
      // if there is an error, the user will be notified
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
