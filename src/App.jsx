import { Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Header />

      {/* Routes for other pages */}
      <Routes>
        <Route path="/portfolio" element={
          <div className="homeHeader">
            <img className="portfolioPicture" src="img/portfoliopic.jpg" description="portfolio picture" alt="porfolioHomePicture"></img>
            <h2>Welcome to my portfolio!</h2>
            <p>This is the Home page<br />Use the nav links to view other pages</p>
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
