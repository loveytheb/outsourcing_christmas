import React from "react";
import Main from "../pages/Main";
import MyPage from "../pages/MyPage";
import Detail from "../pages/Detail";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
