import { Route, Routes } from "react-router";
import "./App.css";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route exact path="/login" element={<SignIn />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}

export default App;
