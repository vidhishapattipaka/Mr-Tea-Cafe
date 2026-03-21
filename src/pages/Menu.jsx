import SectionTitle from '../components/SectionTitle'
import TeaCard from '../components/TeaCard'
import { menuData } from '../data/data'

function MenuSection({ title, items }) {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle title={title} />
        <div className="grid grid-3">
          {items.map((item) => (
            <TeaCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
function Menu() {
  return (
    <div className="page-wrapper">
      <section className="page-banner">
        <div className="container">
          <h1>Our Menu</h1>
          <p>Explore our tea varieties, snacks, and signature cafe favorites.</p>
        </div>
      </section>

      <MenuSection title="Milk Tea" items={menuData.milkTea} />
      <MenuSection title="Green Tea" items={menuData.greenTea} />
      <MenuSection title="Special Tea" items={menuData.specialTea} />
      <MenuSection title="Snacks" items={menuData.snacks} />
    </div>
  )
}

export default Menu