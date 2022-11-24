import 'leaflet/dist/leaflet.css'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from 'react-leaflet'

import icon from './icon'

type mapProps = {
  address: string
}

function Map({ address }: mapProps) {
  return (
    <>
      {address && (
        <div
          className="map"
          style={{ height: '500px', width: '900px' }}
        >
          Map
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={true}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker icon={icon} position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      )}
    </>
  )
}

export default Map
