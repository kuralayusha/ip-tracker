import { useState, useEffect } from 'react'

import Header from './components/Header'
import Info from './components/Info'
import Map from './components/Map'
import './App.css'

function App() {
  const [address, setAddress] = useState<any>(null)
  const [ipAddress, setIpAddress] = useState('')
  const [place, setPlace] = useState<any>()

  useEffect(() => {
    // console.log('useEffect')
    try {
      // console.log('try')
      const getInitialData = async () => {
        // console.log('getInitialData')
        const res = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=192.212.174.101`
        )
        const data = await res.json()
        setAddress(data)
        // console.log(data)
      }
      getInitialData()
    } catch (error) {
      console.log(error)
    }
    // console.log('useEffect2')
  }, [])

  let a: any

  useEffect(() => {
    console.log('useEffect')

    if (address) {
      setPlace(address.location)
      let a = address.location.lat
      console.log('a', a)
    }
  }, [address])

  // console.log({ address })
  // console.log({ place })
  // console.log(address.location.lat)

  return (
    <div className="App">
      <Header />
      {address && <Info address={address} place={place} a={a} />}
      <Map address={address} />
    </div>
  )
}

export default App
