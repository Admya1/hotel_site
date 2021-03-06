import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Content_1 from './components/Content_1'
import Content_2 from './components/Content_2'
import Content_3 from './components/Content_3'
import Content_4 from './components/Content_4'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Gallery from './components/Gallery'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  AOS.init()
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Carousel />
            <Content_1 />
            <Content_2 />
            <Content_3 />
            <Content_4 />
          </Route>
          <Route exact path="/about">
            <AboutUs />
          </Route>
          <Route exact path="/contact">
            <ContactUs />
          </Route>
          <Route exact path="/gallery">
            <Gallery />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
