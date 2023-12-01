
import './App.css';

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import whatsapp from './images/WhatsApp.svg'
function App() {
  return (
   <>
    <Navbar />
    <div id="mySidenav" className="sidenav">

<ul className='navbar-content-mobile'>

<li  className='nav-item-mobile'><a href="">Home</a></li>
<li  className='nav-item-mobile'><a href="">Subscribe</a></li>
<li  className='nav-item-mobile'><a href="">Hostel</a></li>
<li  className='nav-item-mobile'><a href="">List</a></li>

</ul>
<div className='whatsapp'>
<a className='whatsapplink' href="https://wa.me/918305523140"><img src={whatsapp} alt="" />Chat with us</a>
</div>
</div>
    <Hero  />
    <Footer />

   </>
  );
}

export default App;
