import arrow from '../../images/icon-arrow.svg'
import backGround from '../../images/pattern-bg.png'
import './Header.css'

type headerProps = {
  setIpAddress: any
  ipAddress: any
  setAddress: any
}

function Header({
  setIpAddress,
  ipAddress,
  setAddress,
}: headerProps) {
  // checkIpAddress function checks if the input is a valid IP address
  const checkIpAddress =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi
  //  or domain name
  const checkDomain =
    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/

  // handleSubmit function handles the submit event
  function handleSubmit(e: any) {
    e.preventDefault()
    getEnteredAddress()
  }

  // gets the IP address or domain name from the input and checks if it is valid or not and then sets the address
  async function getEnteredAddress() {
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${
        process.env.REACT_APP_API_KEY
      }&${
        checkIpAddress.test(ipAddress)
          ? `ipAddress=${ipAddress}`
          : checkDomain.test(ipAddress)
          ? `domain=${ipAddress}`
          : ''
      }`
    )
    const data = await res.json()
    setAddress(data)
  }

  return (
    <div className="header">
      <div className="backGround">
        <img src={backGround} alt="" />
      </div>
      <article>
        <h2>IP Address Tracker</h2>

        <form onSubmit={handleSubmit} autoComplete="off">
          <input
            type="text"
            name="ipaddress"
            id="ipadress"
            placeholder="Search for any IP address or domain"
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
          />
          <button type="submit">
            <img src={arrow} alt="" />
          </button>
        </form>
      </article>
    </div>
  )
}

export default Header
