import { ReactElement, useCallback, useState } from "react";
import AdminSlidebar from "../components/AdminSlidebar"
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";

interface DataType{user:string; amount:number; discount:number; quantity:number; status: ReactElement; action:ReactElement};
const columns:Column<DataType>[]=[
  {
    Header:"User", accessor:"user"
  },
  {
    Header:"Amount", accessor:"amount"
  },
  {
    Header:"Discount", accessor:"discount"
  },
  {
    Header:"Quantity", accessor:"quantity"
  },
  {
    Header:"Status", accessor:"status"
  },
  {
    Header:"Action", accessor:"action"
  }
];
const arr:DataType[] =[
  {
    user: "Charas",
    amount: 4500,
    discount: 400,
    quantity: 3,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transcation/sajknaskd">Manage</Link>,
  },
  {
    user: "Xavirors",
    amount: 6999,
    discount: 400,
    status: <span className="green">Shipped</span>,
    quantity: 6,
    action: <Link to="/admin/transcation/sajknaskd">Manage</Link>,
  },
  {
    user: "Xavirors",
    amount: 6999,
    discount: 400,
    status: <span className="purple">Delivered</span>,
    quantity: 6,
    action: <Link to="/admin/transcation/sajknaskd">Manage</Link>,
  },
  {
    user: "Charas",
    amount: 4500,
    discount: 400,
    quantity: 3,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transcation/sajknaskd">Manage</Link>,
  },
  {
    user: "Xavirors",
    amount: 6999,
    discount: 400,
    status: <span className="green">Shipped</span>,
    quantity: 6,
    action: <Link to="/admin/transcation/sajknaskd">Manage</Link>,
  },
  {
    user: "Xavirors",
    amount: 6999,
    discount: 400,
    status: <span className="purple">Delivered</span>,
    quantity: 6,
    action: <Link to="/admin/transcation/sajknaskd">Manage</Link>,
  },
];

const Transcation = () => {
  const [data] = useState<DataType[]>(arr);
  const Table = useCallback(TableHOC<DataType>(columns,data,"Transcation","transcationtable",true),[])
  return (
    <div className="AdminContainer">
    <AdminSlidebar/>
    <main>
      {Table()}
    </main>
    </div>
  )
}

export default Transcation