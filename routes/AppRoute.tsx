import { Route, Routes } from "react-router-dom"
import { ContactPage, HomePage, NomatchPage, ProjectPage } from "../pages"
import AOS from "aos"
import "aos/dist/aos.css";

AOS.init();


const AppRoute = () => {
  return (
    <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="projects" element={<ProjectPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NomatchPage />} />
    </Routes>
  )
}

export default AppRoute;