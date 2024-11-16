import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LocomotiveScroll from "locomotive-scroll";

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Doctor from './pages/Doctor';
import Login from './pages/Login';
import MyProfile from './pages/MyProfile';
import Appointment from './pages/appointment';
import MyAppointments from './pages/MyAppointments';
import Naviagtion from './components/Specifics/Naviagtion';
import Footer from './components/Specifics/Footer';

import PreLoader from './components/Specifics/PreLoader';

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div>
      {loading && <PreLoader />}
      {!loading && (
        <>
          <Naviagtion />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/doctor' element={<Doctor />} />
            <Route path='/doctor/:speciality' element={<Doctor />} />
            <Route path='/login' element={<Login />} />
            <Route path='/my-profile' element={<MyProfile />} />
            <Route path='/appointment/:docID' element={<Appointment />} />
            <Route path='/my-appointment' element={<MyAppointments />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
