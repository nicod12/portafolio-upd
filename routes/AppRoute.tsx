import { Route, Routes } from "react-router-dom"
import {  HomePage, NomatchPage } from "../pages"
import AOS from "aos"
import "aos/dist/aos.css";

AOS.init();


const AppRoute = () => {
  return (
    <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NomatchPage />} />
    </Routes>
  )
}

export default AppRoute;