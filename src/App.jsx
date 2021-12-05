import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages1/HomePage";
import AllUsers from "./pages1/AllUsers";
import User1 from "./pages1/User1";
import User2 from "./pages1/User2";
import User3 from "./pages1/User3";
import User4 from "./pages1/User4";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<HomePage />}></Route>
        <Route path="/all-users" element={<AllUsers />}></Route>
        <Route path="/user/1" element={<User1 />}></Route>
        <Route path="/user/2" element={<User2 />}></Route>
        <Route path="/user/3" element={<User3 />}></Route>
        <Route path="/user/4" element={<User4 />}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
