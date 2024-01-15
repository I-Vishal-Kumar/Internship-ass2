import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Crouse from "./components/Crouse";

function App() {
  return (
    <Routes>
      <Route path="" element={<Layout />} />
      <Route path="crousel" element={<Crouse />}></Route>
    </Routes>
  );
}

export default App;
