import { useState } from "react"
import AdminSlidebar from "../../components/AdminSlidebar"
import { OrderItemType, OrderType } from "../../types"
import { Link } from "react-router-dom";
const img2 = "https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg";
const orderItems: OrderItemType[] = [
  {
    name: "Puma Shoes",
    photo: img2,
    _id: "asdsaasdas",
    quantity: 4,
    price: 2000,
  },
];

const TranscationM = () => {
  const updateHander =() =>{
    setOrder((prev)=>({
      ...prev,
      status: prev.status === "Shipped" ? "Delivered" :"Shipped"
    }))
  }
  const [order,setOrder] = useState<OrderType>({
    name: "Abhishek Singh",
    address: "77 Black Street",
    city: "Neyword",
    state: "Nevada",
    country: "India",
    pinCode: 2434341,
    status: "Processing",
    subtotal: 4000,
    discount: 1200,
    shippingCharges: 0,
    tax: 200,
    total: 4000 + 200 + 0 - 1200,
    orderItems,
    _id: "asdnasjdhbn",
  });

  const {
    name,
    address,
    city,
    country,
    state,
    pinCode,
    subtotal,
    shippingCharges,
    tax,
    discount,
    total,
    status,
  } = order;
  return (
    <div className="AdminContainer">
    <AdminSlidebar/>
    <main className="pcontainer">
      <section >
        <h2>order Items</h2>
        {order.orderItems.map((i)=>(
          <ProductCard name={i.name} price={i.price} photo={i.photo}  _id={i._id} quantity={i.quantity} />
        ))}
      </section>
      <article className="shipping-info-card ">
        <h2>Order Info</h2>
        <h5>User Info</h5>
        <p>Name: {name}</p>
          <p>
            Address: {`${address}, ${city}, ${state}, ${country} ${pinCode}`}
          </p>

          <h5>Amount Info</h5>
          <p>Subtotal: {subtotal}</p>
          <p>Shipping Charges: {shippingCharges}</p>
          <p>Tax: {tax}</p>
          <p>Discount: {discount}</p>
          <p>Total: {total}</p>

          <h5>Status Info</h5>
          <p>
            <span className={ status === "Delivered" ? "purple" : status === "Processing" ? "green" : "red"}> {status} </span>
          </p>
          <button onClick={updateHander}>Process Status</button>
      </article>
    </main>
    </div>
  )
}
const ProductCard = ({ name, photo, price, quantity, _id }: OrderItemType) => (
  <div className="transaction-product-card">
    <img src={photo} alt={name} />
    <Link to={`/product/${_id}`}>{name}</Link>
    <span>
      ${price} X {quantity} = ${price * quantity}
    </span>
  </div>
);
export default TranscationM