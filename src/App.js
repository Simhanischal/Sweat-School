import './App.css';
import { Switch, Route } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AboutUs from './Pages/AboutUs/AboutUs';
import Transformations from './Pages/Transformations/Transformations';
import Gallery from './Pages/Gallery/Gallery';
import Home from './Pages/Home/Home';
import WhatsappLink from './Components/WhatsappLink/WhatsappLink';
import Programs from './Pages/Programs/Programs';

function App() {
  return (
    <div className="App">
      <StylesProvider injectFirst>
        <Navbar />
        <Switch>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/trainings/:selectedProgram">
            <Programs />
          </Route>
          <Route path="/transformations">
            <Transformations />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
        <WhatsappLink />
      </StylesProvider>
    </div>
  );
}

export default App;
