import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import Flight from './Components/Flight/Flight'; // Import corrected to match your file structure

function App() {
  const [playState, setPlayState] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false);

  // Function to toggle display of login page
  const toggleLoginPage = () => {
    setShowLoginPage(!showLoginPage);
  };

  return (  
    <div>
      <Navbar />
      <Hero />
      {/* <div className="App"> */}
        <Flight />
      {/* </div> */}
      <div className="container">
        {/* <Title subTitle="Flyanza Services" title="Comprehensive Travel Solutions" />  */}
        <div style={{ textAlign: 'center' }}>
      <Title 
        subTitle="" 
        title="" 
      />
      <img 
        src="https://cdn.shopify.com/s/files/1/0697/3702/1663/files/2-01_1.png?v=1727764953" 
        alt="Comprehensive Travel Solutions" 
        style={{ 
          display: 'block', 
          margin: '5px auto 50px', // Reduced space between title and image
          maxWidth: '100%' 
        }} 
      />
    </div>
  
        

        <Programs />
      </div>
      <div>
        <About setPlayState={setPlayState} />
      </div>
      <div>
         {/* <Title subTitle="" title="Why Choose Us?" />  */}
         <div style={{ textAlign: 'center' }}>
      <Title 
        subTitle="" 
        title="" 
      />
      <img 
        src="https://cdn.shopify.com/s/files/1/0697/3702/1663/files/why_choose_us-01.png?v=1727765809" 
        alt="Comprehensive Travel Solutions" 
        style={{ 
          display: 'block', 
          margin: '5px auto 50px', // Reduced space between title and image
          maxWidth: '100%' 
        }} 
      />
    </div>
        
        <Campus />
      </div>
     
      <div>
        {/* <Title subTitle="TESTIMONIALS" title="Flyanza Reviews" />  */}
  

        <div style={{ textAlign: 'center' }}>
      <Title 
        subTitle="" 
        title="" 
      />
      <img 
        src="https://cdn.shopify.com/s/files/1/0697/3702/1663/files/flyanza_reviews-01.png?v=1727765809" 
        alt="Comprehensive Travel Solutions" 
        style={{ 
          display: 'block', 
          margin: '5px auto 50px', // Reduced space between title and image
          maxWidth: '100%' 
        }} 
      />
    </div>



        <Testimonials />
      </div>
      <div>
         {/* <Title subTitle="Contact Us" title="Get in Touch" />   */}
         <div style={{ textAlign: 'center' }}>
      <Title 
        subTitle="" 
        title="" 
      />
      <img 
        src="https://cdn.shopify.com/s/files/1/0697/3702/1663/files/1-01.png?v=1727764954" 
        alt="Comprehensive Travel Solutions" 
        style={{ 
          display: 'block', 
          margin: '5px auto 36px', // Reduced space between title and image
          maxWidth: '64%',
          marginbottom: '-46px !important'
        }} 
      />
    </div>
  


        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
}

export default App;
