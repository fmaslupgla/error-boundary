import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Case1 from "./views/case1/Case1";
import Case2 from "./views/case2/Case2";
import Layout from "./components/layout/Layout";
import Case3 from "./views/case3/Case3";

const App = () => {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route element={<Case1 />} path="/case1" />
            <Route element={<Case2 />} path="/case2" />
            <Route element={<Case3 />} path="/case3" />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
