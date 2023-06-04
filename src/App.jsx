import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Graphs from "./dataStructures/Graphs/Graphs";
import TopologicalSort from "./dataStructures/Graphs/TopologicalSort";
import NumberOfIslands from "./dataStructures/Graphs/NumberOfIslands";
function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/graphs" element={<Graphs />} />
            <Route path="/topoSort" element={<TopologicalSort />} />
            <Route path="/numOfIslands" element={<NumberOfIslands />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
