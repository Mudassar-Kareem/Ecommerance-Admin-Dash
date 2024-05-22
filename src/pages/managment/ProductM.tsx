import AdminSlidebar from "../../components/AdminSlidebar"
import { ChangeEvent, FormEvent, useState } from "react"
const img2 = "https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg";
const ProductM = () => {
  const [name,setName] = useState<string>("Macbook");
  const [price,setPrice]=useState<number>(1200);
  const [stock,setStock]=useState<number>(0);
  const [photo,setPhoto]=useState<string>(img2);

  const [updateName,setUpdateName] =useState<string>(name)
  const [updatePrice,setUpdatePrice] =useState<number>(price)
  const [updateStock,setUpdateStock] =useState<number>(stock)
  const [updatePhoto,setUpdatephoto] =useState<string>(photo)
  const changeImageHandle = (e: ChangeEvent<HTMLInputElement>) =>{
    const file:File|undefined = e.target.files?.[0];
    const reader:FileReader= new FileReader();
    if(file){
      reader.readAsDataURL(file);
      reader.onloadend = () =>{
        if(typeof reader.result === "string") setUpdatephoto(reader.result)
      }
    }
  };

  const submit = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    setName(updateName);
    setPrice(updatePrice);
    setStock(updateStock);
    setPhoto(updatePhoto);
  }
  return (
    <div className="AdminContainer">
    <AdminSlidebar/>
    <main className="pcontainer">
      <section>
        <strong>ID_frewdghn</strong>
        <img src={photo} alt="img" />
        <p> {name} </p>
        {stock > 0 ? (
            <span className="green">{stock} Available</span>
          ) : (
            <span className="red">Not Available</span>
          )}
          <h3> ${price} </h3>
      </section>
      <article>
        <form onSubmit={submit}>
          <h2>Manage</h2>
          <div>
            <label >Name</label>
            <input required type="text" placeholder="name" value={updateName} onChange={(e)=>setUpdateName(e.target.value)} />
          </div>
          <div>
            <label >Price</label>
            <input required type="number" placeholder="Price" value={updatePrice} onChange={(e)=>setUpdatePrice(Number(e.target.value))} />
          </div>
          <div>
            <label >Stock</label>
            <input required type="number" placeholder="Stock" value={updateStock} onChange={(e)=>setUpdateStock(Number(e.target.value))} />
          </div>
          <div>
            <label >Photo</label>
            <input type="file" required   onChange={changeImageHandle}/>
          </div>
          {updatePhoto && <img src={updatePhoto} alt="New image"/>}
          <button type="submit"> updata </button>
        </form>
      </article>
    </main>
    </div>
  )
}


export default ProductM