import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes></Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
