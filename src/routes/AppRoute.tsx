
import { Route, Routes } from "react-router-dom";
import AOS from "aos"
import "aos/dist/aos.css";
import NomatchPage from "../pages/nomatch/NomatchPage";
import { Home } from "../pages/home/HomePage";



AOS.init();


const AppRoute = () => {
  return (
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NomatchPage />} />
    </Routes>
  )
}

export default AppRoute;