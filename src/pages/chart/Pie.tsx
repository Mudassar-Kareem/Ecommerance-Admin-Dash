import AdminSlidebar from "../../components/AdminSlidebar"
import { DoughnutChart, PieChart } from "../../components/Chart";
import {categerios} from "../../assets/data.json";


const Pie = () => {
  return (
    <div className="AdminContainer">
    <AdminSlidebar/>
    <main className="barcontainer">
        <h1>Pie & Doughnut Charts</h1>
        <section>
            <div>
                <PieChart labels={["Deliverd","Shipped", "Processing"]} data={[23,45,21]} backgroundColor={[ `hsl(110,80%, 80%)`,`hsl(110,80%, 50%)`,`hsl(110,40%, 50%)`]} offset={[0,0,50]}/>
            </div>
        </section>
        <section>
            <div>
                <DoughnutChart legends={false}
                 labels={categerios.map((i)=> i.heading)}
                 data={categerios.map((i)=> i.value)}
                 backgroundColor={categerios.map((i)=> `hsl(${i.value * 5},${i.value}%, 50%)`)} offset={[0,0,0,80]}
                 />
            </div>
            <h2>Product Categerios Ratio</h2>
        </section>

        <section>
            <div>
                <DoughnutChart legends={false} cutout={"70%"} offset={[0,80]} labels={["In Stock", "Out Stock"]} data={[70,30]} backgroundColor={["hsl(269,80%,40%)", "rgb(53, 162, 255)"]} />
            </div>
            <h2>Stock Availability</h2>
        </section>
        <section>
            <div>
                <DoughnutChart
                 labels={[
                    "Marketing Cost",
                    "Discount",
                    "Burnt",
                    "Production Cost",
                    "Net Margin",
                  ]}
                  data={[32, 18, 5, 20, 25]}
                  backgroundColor={[
                    "hsl(110,80%,40%)",
                    "hsl(19,80%,40%)",
                    "hsl(69,80%,40%)",
                    "hsl(300,80%,40%)",
                    "rgb(53, 162, 255)",
                  ]}
                  legends={false}
                  offset={[20, 30, 20, 30, 80]}
                />

            </div>
            <h2>Revenue Distribution</h2>
        </section>
        <section>
            <div>
                <PieChart
                  labels={[
                    "Teenager(Below 20)",
                    "Adult (20-40)",
                    "Older (above 40)",
                  ]}
                  data={[30, 250, 70]}
                  backgroundColor={[
                    `hsl(10, ${80}%, 80%)`,
                    `hsl(10, ${80}%, 50%)`,
                    `hsl(10, ${40}%, 50%)`,
                  ]}
                  offset={[0, 0, 50]}
                />
            </div>
            <h2>Users Age Group</h2>
        </section>

        <section>
            <div>
                <DoughnutChart labels={["Admin", "Customers"]} data={[11,99]} offset={[0,80]} backgroundColor={[`hsl(335, 100%, 38%)`, "hsl(44, 98%, 50%)"]}/>
            </div>
        </section>
    </main>
    </div>
  )
}

export default Pie