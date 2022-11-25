type infoProps = {
  address: any
}

function Info({ address }: infoProps) {
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
