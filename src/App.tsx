import { useState, useEffect } from 'react'

import Header from './components/Header'
import Info from './components/Info'
import Map from './components/Map'
import './App.css'

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from 'react-leaflet'

// https://geo.ipify.org/api/v2/country,city?apiKey=at_EoVlHExLepBoUY7uq3qXw3ctJKWT2&ipAddress=8.8.8.8

function App() {
  return (
    <div className="App">
      <Header />
      <Info />
      <Map />
    </div>
  )
}

export default App
