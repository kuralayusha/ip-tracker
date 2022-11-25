import './Info.css'

type infoProps = {
  address: any
}

function Info({ address }: infoProps) {
  return (
    <>
      {address && (
        <div className="info--container">
          <div className="info one">
            <h2>IP Address</h2>
            <p>{address.ip}</p>
          </div>
          <div className="info two">
            <h2>LOCATION</h2>
            <p>
              {' '}
              {address.location.city}, {address.location.region}
            </p>
          </div>
          <div className="info three">
            <h2>TIMEZONE</h2>
            <p>UTC {address.location.timezone}</p>
          </div>
          <div className="info four">
            <h2>ISP</h2>
            <p>{address.isp}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Info
