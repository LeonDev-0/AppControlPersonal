import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MyRoutes from "./MyRoutes";
import Sidebar from "./Sidebar";

function App() {
  return (
    <>
      <BrowserRouter>
      <div className="flex">
          <Sidebar/>
          <MyRoutes />
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
