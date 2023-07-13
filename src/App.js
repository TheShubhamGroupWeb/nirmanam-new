import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap'
import Cards from './Components/Cards/Cards';
import CardContainer from './Components/CardContainer/CardContainer';
import MidBannerContainer from './Components/Mid-banner/MidBannerContainer';
import styled from 'styled-components';
import NavBarComponent from './Components/Navbar/NavBarComponent';
// import ReaalEstateTrading from './Components/services/RealEstatePropertyTrading';
// import ServicesContainer from './Components/services/ServicesContainer';
import About from './Components/About/About';
import Home from './Components/HomePage/Home';
import Footer from './Components/Footer/Footer';
import Slidder from './Components/Slidder/Slidder';
import Contact from './Components/Contact/Contact';
import { Route, Routes } from 'react-router';
import RealEstateTrading from './Components/services/RealEstateTrading';
import PropertyExachange from './Components/services/PropertyExchange';
// import WhyChooseUs from './WhyChooseUs/WhyChooseUs';

const ServiceWrapper = styled.div`
  background-color: #f5f6f7;

`

function App() {
  return (
    <>
    {/* <NavBarComponent></NavBarComponent>
    <Slidder/>
    <About/>
    
    <ServiceWrapper className='padding'>
    <div className="container">
      <div className="col-12">
      <h3 class="main-heading mb-4">OUR SERVICES</h3>
      </div>
      <div className="row justify-content-center align-items-center" style={{gap: "1.5rem"}}>
      <CardContainer/>

      </div>
    </div>
    </ServiceWrapper>

      <MidBannerContainer/>

      <Footer/>
    <ServicesContainer/>
    <Contact/> */}


    <NavBarComponent/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/real-estate-property-trading' element={<RealEstateTrading/>} ></Route>
      <Route path='/real-estate-property-exchange' element={<PropertyExachange/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    
    <Footer/>

    </>
  );
}

export default App;
