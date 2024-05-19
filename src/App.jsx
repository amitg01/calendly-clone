import "./App.css";
import BackGround from "./components/Background";
import Navbar from "./components/Navbar";
import Scheduler from "./pages/Scheduler";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <BackGround />
        <Scheduler />
      </main>
    </>
  );
}

export default App;
