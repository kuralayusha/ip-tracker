import arrow from '../images/icon-arrow.svg'
import backGround from '../images/pattern-bg.png'

function Header() {
  return (
    <div className="App">
      <section>
        <div>
          <img src={backGround} alt="" />
        </div>
        <article>
          <h2>IP Address</h2>

          <form>
            <input
              type="text"
              name="ipaddress"
              id="ipadress"
              placeholder="Search for any IP address or domain"
            />
            <button type="submit">
              <img src={arrow} alt="" />
            </button>
          </form>
        </article>
      </section>
    </div>
  )
}

export default Header
