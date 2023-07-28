import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'


import Navbarheader from './components/Navbar';
import CourseDetails from './components/CourseDetails.js';
import MainBody from './components/mainbody/MainBody';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Navbarheader />
      <CourseDetails />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
library.add(fab, fas, far)