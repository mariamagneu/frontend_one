import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/Login";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
