import { MapContainer, TileLayer } from 'react-leaflet'
import MarkerPosition from './MarkerPosition'
import 'leaflet/dist/leaflet.css'
import './Map.css'

type mapProps = {
  address: any
}

function Map({ address }: mapProps) {
  return (
    <div className="map--container">
      {address && (
        <div
          className="map"
          // style={{ height: '500px', width: '900px' }}
        >
          <MapContainer
            center={[address.location.lat, address.location.lng]}
            zoom={13}
            scrollWheelZoom={true}
            zoomControl={false}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerPosition address={address} />
          </MapContainer>
        </div>
      )}
    </div>
  )
}

export default Map
