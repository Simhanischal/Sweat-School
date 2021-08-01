import './App.css';
import { StylesProvider } from '@material-ui/core/styles';
import ProgramDetails from './Pages/Programs/Components/ProgramDetails';
import Calisthenics from './Images/Calisthenics.png';
import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';
// import Carousel from './Components/Carousel';
// import AboutUs from './Pages/AboutUs/AboutUs';
// import Transformations from './Pages/Transformations/Transformations';
// import TransformationCarousel from './Pages/Home/Components/TransformationCarousel';
// import { HomeTransformation } from './Data/TransformationData';
// import HomeGallery from './Pages/Home/Components/HomeGallery';
// import { HomeGalleryData } from './Data/GalleryData';
// import Gallery from './Pages/Gallery/Gallery';
// import TrainingPrograms from './Pages/Home/Components/TrainingPrograms';
// import UniqueFeatures from './Pages/Home/Components/UniqueFeatures';
// import WhatsappLink from './Components/WhatsappLink/WhatsappLink';

function App() {
  return (
    <div className="App">
      <StylesProvider injectFirst>
      <Navbar />
      {/* <WhatsappLink />
        <Footer />
        <UniqueFeatures />
        <TrainingPrograms /> */}
        {/* <ProgramDetails image={Calisthenics} name="Calsithenics" description="calsithenics description here" /> */}
        {/* <TransformationCarousel homeTransformation={HomeTransformation} />*/}
        {/* <HomeGallery homeGalleryData={HomeGalleryData} />  */}
        {/* <Gallery /> */}
        {/* <Carousel /> */}
        {/* <AboutUs /> */}
        {/* <Transformations /> */}
        {/* <TransformationCarousel homeTransformation={HomeTransformation} /> */}
        {/* <GalleryCarousel homeGallery={HomeGallery} /> */}
      </StylesProvider>
    </div>
  );
}

export default App;
