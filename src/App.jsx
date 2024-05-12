import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CreateOutfit from "./pages/CreateOutfit.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/create-outfit" element={<CreateOutfit />} />
      </Routes>
    </Router>
  );
}

export default App;
