import { BrowserRouter, Route,Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import Home from "./pages/EcPages/Home";
const StopWatch = lazy(()=>import("./pages/app/StopWatch"))
const Coupen = lazy(()=>import("./pages/app/Coupen"))
const Toss= lazy(()=>import("./pages/app/Toss"))
const LineChart  = lazy(()=>import("./pages/chart/LineChart"))
const Pie = lazy(()=>import("./pages/chart/Pie"))
const Bar = lazy(()=>import("./pages/chart/Bar"))
const NewProduct = lazy(()=>import("./pages/managment/NewProduct"));
const ProductM = lazy(()=>import("./pages/managment/ProductM"));
const TranscationM = lazy(()=>import("./pages/managment/TranscationM"))
const Dashboard =lazy(()=>import("./pages/Dashboard")) ;
const Product =lazy(()=>import("./pages/Product")) ;
const Transcation =lazy(()=>import("./pages/Transcation")) ;
const Customers =lazy(()=>import("./pages/Customers")) ;

// {WEBSITE ROUTE}

const App = () => {
  return (
    <BrowserRouter>
    <Suspense fallback={<Loader/>}>
    <Routes>
      <Route path="/" element={<Home/>}/>



      <Route path="/admin/dashboard" element={<Dashboard/>}/>
      <Route path="/admin/product" element={<Product/>}/>
      <Route path="/admin/transcation" element={<Transcation/>}/>
      <Route path="/admin/customer" element={<Customers/>}/>
        {/* {Chart} */}
      <Route path="/admin/chart/bar" element={<Bar/>}/>
      <Route path="/admin/chart/pie" element={<Pie/>}/>
      <Route path="/admin/chart/line" element={<LineChart/>}/>
       {/* {Apps} */}
       <Route path="/admin/app/stopwatch" element={<StopWatch/>}/>
       <Route path="/admin/app/coupon" element={<Coupen/>}/>
       <Route path="/admin/app/toss" element={<Toss/>}/>

      {/* {Managment} */}
      <Route path="/admin/product/new" element={<NewProduct/>}/>
      <Route path="/admin/product/:id" element={<ProductM/>}/>
      <Route path="/admin/transcation/:id" element={<TranscationM/>}/>
    </Routes>
    </Suspense>
    </BrowserRouter>
  )
}

export default App