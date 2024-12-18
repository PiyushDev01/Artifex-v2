import Nav from "./Components/nav";
import Landingpg from "./Pages/Home/landingpage";
import OrderPrice from "./Pages/Orders/OrderPrice";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OrderForm from "./Pages/Orders/OrderformSection/OrderForm";
import OrderList from "./Pages/Orders/Orderlisting/OrderList";
import OrderTrack from "./Pages/Orders/Orderlisting/OrderTrack";
import Footer from './Components/footer.jsx';
import PoliciesPage from "./Components/PoliciesPage";
import AboutUs from './Pages/AboutUs/AboutUs';
import AdminDash from './Adminlayouts/AdminDash';

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
            <Route path="Your-Orders" element={<OrderList />} />
            <Route path="Your-Orders/Details" element={<OrderTrack />} />
            <Route path="policies" element={<PoliciesPage />} />
            <Route path="aboutus" element={<AboutUs/>} />
            <Route path="/admin" element={<AdminDash/>} />
           </Routes>
          <Footer/>
        </div>
      </Router>
    </>
  );
}

export default App;
