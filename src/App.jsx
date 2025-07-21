import "./App.css";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import About from "./Components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar title="Text-utils" />
          <Home />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar title="Text-utils" />
          <Login />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar title="Text-utils" />
          <About />
        </>
      ),
    },
  ]);
  return (
    <>
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
