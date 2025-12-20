import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import ProjectDetails from "./pages/ProjectDetails";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Portfolio />
              <Contact />
            </>
          }
        />

        {/* Project detail page */}
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </>
  );
}
