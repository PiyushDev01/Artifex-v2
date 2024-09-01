import Nav from "./Components/nav";
import Landingpg from "./Pages/Home/landingpage";
import OrderPrice from "./Pages/Orders/OrderPrice";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import OrderForm from "./Pages/Orders/OrderformSection/OrderForm";

function App() {
  return (
    <>
      <Router>
        <div className=" relative">
          <Nav/>
          <Routes>
            <Route path="/" element={<Landingpg />} />
            
            <Route path="order" element={<OrderPrice />} />
            <Route path="Order-Details" element={<OrderForm />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
