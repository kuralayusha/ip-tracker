import { Marker, Popup, useMap } from 'react-leaflet'
import { useEffect } from 'react'

import icon from './icon'

type markerProps = {
  address: any
}

function MarkerPosition({ address }: markerProps) {
  const map = useMap()

  const position: any = [address.location.lat, address.location.lng]
  useEffect(() => {
    map.flyTo(position, 13, {
      animate: true,
    })
  }, [address])
  return (
    <Marker icon={icon} position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  )
}

export default MarkerPosition
