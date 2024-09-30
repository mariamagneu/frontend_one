import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/Login";
import TestComponent from "./components/testcomponent";
import SignUpPage from "./pages/Signup";
import Projects from "./pages/Projects";
import PrivateRoute from "./components/PrivateRoute";
import About from "./pages/About";
import Tech from "./pages/Tech";
import AboutDashboard from "./pages/AboutDashboard";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/about" element={<AboutDashboard />}></Route>
          <Route path="/test" element={<TestComponent />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
          <Route
            path="/projects"
            element={
              <PrivateRoute>
                <Projects />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/tech"
            element={
              <PrivateRoute>
                <Tech />{" "}
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
