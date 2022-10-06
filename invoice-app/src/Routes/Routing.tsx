import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../Pages";
import { NewInvoice } from "../Components";

const Routing = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<NewInvoice />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routing;
