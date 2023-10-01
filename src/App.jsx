import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AppHome from "./components/AppHome";
import { WebHome } from "./components/WebHome";
import { VideoReady } from "./components/VideoReady";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apphome" element={<AppHome />} />
        <Route path="/webhome" element={<WebHome />} />
        <Route path="/videoready" element={<VideoReady />} />
      </Routes>
    </Router>
  );
}

export default App;
