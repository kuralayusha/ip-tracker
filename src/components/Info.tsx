type infoProps = {
  address: any
  place: any
  a: any
}

function Info({ address, place, a }: infoProps) {
  console.log(address.ip)
  console.log(address.isp)
  console.log(address.location)

  // console.log(place.lat)
  console.log(address.location.city)
  console.log(address.location.country)
  console.log(address.location.lat)
  console.log(address.location.lng)
  console.log(address.location.postalCode)
  console.log(address.location.region)
  console.log(address.location.timezone)

  return (
    <>
      {address && (
        <div className="info">
          <div>
            <h2>IP Address</h2>
            <p>{address.ip}</p>
          </div>
          <div>
            <h2>LOCATION</h2>
            <p>
              {' '}
              {address.location.city}, {address.location.region}
            </p>
          </div>
          <div>
            <h2>TIMEZONE</h2>
            <p>UTC {address.location.timezone}</p>
          </div>
          <div>
            <h2>ISP</h2>
            <p>{address.isp}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Info
