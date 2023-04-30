import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import * as Page from "./components/pages/index";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Page.Home />} />
          <Route path="venues" element={<Page.Venues />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

/*
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="venues" element={<Venues />} />
        </Route>
      </Routes>
    </div>
  );
}
*/
