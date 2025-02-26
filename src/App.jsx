import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import Heropage from "./pages/Hero";
import EditProfile from "./components/EditProfile";
import ShopPage from "./components/Shop";
import CardPayment from "./components/Cardpayment";
import UpiPayment from "./components/Upipayment";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout"
import CustomerReviews from "./components/CustomerReviews";
import AdminDashboard from "./pages/AdminDashboard";
import PaymentStatus from "./pages/PaymentStatus";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     <Router>
     
      <Routes>
     <Route path="/" element={
          <>
          <Navbar/>
       <Heropage />
       <CustomerReviews/>
       <Footer/>
       </>
     }/>
     
     <Route path="contactus" element={
          <>
          <Navbar/>
          <ContactPage />
          <Footer/>
          </>
        }/>


      <Route path="editprofile" element={
          <>
          <Navbar/>
          <EditProfile/>
          <Footer/>
          </>
        }/>
     
     <Route path="shop" element={
          <>
          <Navbar/>
          <ShopPage/>
          <Footer/>
          </>
        }/>

        <Route path="card" element={
          <>
          <Navbar/>
          <CardPayment/>
          <Footer/>
          </>
        }/>

       <Route path="pay" element={
          <>
          <Navbar/>
          <UpiPayment/>
          <Footer/>
          </>
        }/>

        <Route path="cart" element={
          <>
          <Navbar/>
          <CartPage/>
          <Footer/>
          </>
        }/>
     
     <Route path="check" element={
          <>
          <Navbar/>
          <Checkout/>
          <Footer/>
          </>
        }/>

     <Route path="success" element={
          <>
          <Navbar/>
          <PaymentStatus/>
          <Footer/>
          </>
        }/>

<Route path="dash" element={
          <>
          <Navbar/>
          <AdminDashboard/>
          <Footer/>
          </>
        }/>
     

     </Routes>
     </Router>

    </>
  )
}

export default App
