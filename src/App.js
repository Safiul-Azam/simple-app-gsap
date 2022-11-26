import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import MenuLayer from "./component/MenuLayer";

function App() {
  return (
    <div className="h-[100vh]">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuLayer />} />
        
      </Routes>
    </div>
  );
}

export default App;
