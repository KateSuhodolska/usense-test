import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Modal from "./components/Modal";
import Success from "./components/SuccessPage";
import DevelopmentPage from "./components/DevelopmentPage";
import { FC } from "react";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Modal />} />
        <Route path="/success" element={<Success />} />
        <Route path="/development" element={<DevelopmentPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
