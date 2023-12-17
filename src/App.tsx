import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
// Import other pages as needed

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
