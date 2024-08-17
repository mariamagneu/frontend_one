import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes></Routes>
      </main>
    </>
  );
}

export default App;
