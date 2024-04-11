import About from "../About/About.jsx";
import Header from "../Header/Header.jsx";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import data from "../../../src/assets/data.json";
import Work from "../Work/Work.jsx";
import Experience from "../Experience/Experience.jsx";
import Education from "../Education/Education.jsx";
import Contact from "../Contact/Contact.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header data={data} />

        <Routes>
          <Route
            element={<About about={data.about} sectionLength={data.about.length} />}
            path="/about"
          />
          <Route element={<Work />} path="/work" />
          <Route
            element={
              <Experience experience={data.experience} sectionLength={data.experience.length} />
            }
            path="/experience"
          />
          <Route
            element={<Education education={data.education} sectionLength={data.education.length} />}
            path="/education"
          />
          <Route
            element={<Contact contact={data.contact} sectionLength={data.contact.length} />}
            path="/contact"
          />
          {
            //<Route element={} path="/resume" />
          }
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
