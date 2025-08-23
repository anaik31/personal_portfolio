import { Routes, Route} from "react-router-dom";
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
        <Route path="/" element={
            <div class = "homeHeader">
              <h2>Welcome to my portfolio!</h2>
              <p>This is the Home page</p>
            </div>
          }
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  )
}

export default App;
