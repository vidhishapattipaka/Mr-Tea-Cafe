import SectionTitle from '../components/SectionTitle'

function Menu() {
  return (
    <div className="page-wrapper">
      <section className="page-banner">
        <div className="container">
          <h1>Our Menu</h1>
          <p>Explore our tea varieties and signature special blends.</p>
        </div>
      </section>

      <section className="section menu-page-section">
        <div className="container">
          <SectionTitle
            title="Menu Highlights"
            subtitle="Fresh tea, special blends, and comforting flavors in every cup."
          />

          <div className="menu-board-wrapper menu-page-wrapper">
            <div className="menu-board menu-board-page">
              <div className="menu-board-head">
                <p className="menu-board-small">Mr. Tea Cafe</p>
                <h3 className="menu-board-title">MENU</h3>
              </div>

              <div className="menu-board-group">
                <span className="menu-tag">Milk Tea</span>
                <div className="menu-line">
                  <p>Masala Chai</p>
                  <span>₹40</span>
                </div>
                <div className="menu-line">
                  <p>Elaichi Chai</p>
                  <span>₹45</span>
                </div>
                <div className="menu-line">
                  <p>Ginger Chai</p>
                  <span>₹45</span>
                </div>
                <div className="menu-line">
                  <p>Kesar Chai</p>
                  <span>₹60</span>
                </div>
                <div className="menu-line">
                  <p>Chocolate Chai</p>
                  <span>₹70</span>
                </div>
                <div className="menu-line">
                  <p>Kulhad Chai</p>
                  <span>₹50</span>
                </div>
              </div>

              <div className="menu-board-group">
                <span className="menu-tag">Green Tea</span>
                <div className="menu-line">
                  <p>Classic Green Tea</p>
                  <span>₹50</span>
                </div>
                <div className="menu-line">
                  <p>Lemon Green Tea</p>
                  <span>₹55</span>
                </div>
                <div className="menu-line">
                  <p>Mint Green Tea</p>
                  <span>₹55</span>
                </div>
                <div className="menu-line">
                  <p>Honey Green Tea</p>
                  <span>₹60</span>
                </div>
                <div className="menu-line">
                  <p>Tulsi Green Tea</p>
                  <span>₹60</span>
                </div>
              </div>
            </div>

            <div className="menu-board menu-board-page">
              <div className="menu-board-head">
                <p className="menu-board-small">Mr. Tea Cafe</p>
                <h3 className="menu-board-title">MENU</h3>
              </div>

              <div className="menu-board-group">
                <span className="menu-tag">Special Tea</span>
                <div className="menu-line">
                  <p>Kashmiri Kahwa</p>
                  <span>₹80</span>
                </div>
                <div className="menu-line">
                  <p>Butter Tea</p>
                  <span>₹90</span>
                </div>
                <div className="menu-line">
                  <p>Rose Tea</p>
                  <span>₹70</span>
                </div>
                <div className="menu-line">
                  <p>Iced Tea</p>
                  <span>₹80</span>
                </div>
                <div className="menu-line">
                  <p>Peach Iced Tea</p>
                  <span>₹90</span>
                </div>
                <div className="menu-line">
                  <p>Blue Tea</p>
                  <span>₹85</span>
                </div>
                <div className="menu-line">
                  <p>Hibiscus Tea</p>
                  <span>₹85</span>
                </div>
                <div className="menu-line">
                  <p>Matcha Tea</p>
                  <span>₹100</span>
                </div>
              </div>

              <div className="menu-board-group">
                <span className="menu-tag">Signature Blends</span>
                <div className="menu-line">
                  <p>Saffron Delight Tea</p>
                  <span>₹95</span>
                </div>
                <div className="menu-line">
                  <p>Honey Lemon Tea</p>
                  <span>₹75</span>
                </div>
                <div className="menu-line">
                  <p>Rose Milk Tea</p>
                  <span>₹85</span>
                </div>
                <div className="menu-line">
                  <p>Mint Lemon Iced Tea</p>
                  <span>₹90</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Menu
