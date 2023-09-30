import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AppHome from "./components/AppHome";
import { WebHome } from "./components/WebHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appHome" element={<AppHome />} />
        <Route path="/webHome" element={<WebHome />} />
      </Routes>
    </Router>
  );
}

export default App;
