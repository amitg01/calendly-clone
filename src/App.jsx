import { ToastContainer } from "react-toastify";
import BackGround from "./components/Background";
import Navbar from "./components/Navbar";
import Scheduler from "./pages/Scheduler";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <BackGround />
        <Scheduler />
      </main>
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;
