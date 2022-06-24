import { useState } from "react"
import { Link } from "react-router-dom"

export default function Offers() {
  const [items] = useState([
    { id: 35, title: 'Ninja Hoodie', price: 21.99 },
    { id: 65, title: 'Ninja Sneakers', price: 34.99 },
    { id: 983,  title: 'Ninja Tee', price: 12.99 }
  ])

  return (
    <div>
      <h3>Latest Offers</h3>
      <div className="offers">
        {items.map(item => (
          <div key={item.id}>
            <Link to={`/products/${item.id}`}>
              <img src="https://via.placeholder.com/350x200" alt="product" />
              <h4>{item.title}</h4>
              <p>£{item.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
