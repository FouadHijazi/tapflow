import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/Navbar";
import Sidebar from "./components/sideBar";
import CreateProfileInfo from "./components/createProfile";
import MyProfile from "./components/myProfile";
import Cards from "./components/cards";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Sidebar />
      
      <Routes>
        <Route path={"/"} element={<MyProfile />} />
        <Route path={"/CreateProfile"} element={<CreateProfileInfo />} />
        <Route path={"/Card"} element={<Cards />} />

      </Routes>
    </div>
  );
}

export default App;
