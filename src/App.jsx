import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Graphs from "./dataStructures/Graphs/Graphs";
function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/graphs" element={<Graphs />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
