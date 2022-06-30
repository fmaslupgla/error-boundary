import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Case1 from "./views/case1/Case1";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route element={<Case1 />} path="/case1" />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default App;