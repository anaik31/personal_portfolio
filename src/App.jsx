import { Routes, Route, useLocation } from "react-router-dom";
import Header from './components/Header'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {

  const location = useLocation();

  return (
    <div>
       <Header key={location.pathname} />

      {/* Routes for other pages */}
      <Routes>
        <Route path="/portfolio" element={
          <div className="homeHeader slideDown delay-1">
            <img className="portfolioPicture slideDown delay-2" src="img/portfoliopic.jpg" alt="portfolioHomePicture" />
            <h2 className="slideDown delay-3">Welcome to my portfolio!</h2>
            <p className="slideDown delay-4">
              Visit the other pages to learn more about me!<br/> Recruiters can reach
              out by filling out the contact form.
            </p>
          </div>

        }
        />
        <Route path="portfolio/about" element={<About />} />
        <Route path="portfolio/projects" element={<Projects />} />
        <Route path="portfolio/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App;
