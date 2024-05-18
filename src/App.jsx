import "./App.css";
import Navbar from "./components/Navbar";
import Scheduler from "./pages/Scheduler";

const BackGround = () => {
  return (
    <div className="background">
      <div className="right-boxes">
        <div className="box-1 bg-box"></div>
        <div className="box-2 bg-box"></div>
        <div className="box-3 bg-box"></div>
      </div>
      <div className="left-boxes">
        <div className="box-1 bg-box"></div>
        <div className="box-2 bg-box"></div>
      </div>
    </div>
  );
};

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
