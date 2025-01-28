import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Home from "./components/Home";

import { ToastContainer } from "./utils/ToastHandler";

function App() {
  return (
    <>
      <ToastContainer />

      <div className=" h-[100vh] w-screen overflow-auto">
        <Navbar />
        <Navbar2 />
        {/* <div className="h-8 pt-2"></div> */}
        <Routes>
          {
            <Route path="/" element={<Home />} />
            /*
            <Route path="/about" element={<About />} />
            <Route path="/auth" element={<LoginSignupForm />} />
            <Route index path="*" element={<ErrorPage />} /> */
          }
        </Routes>
      </div>
    </>
  );
}

export default App;
