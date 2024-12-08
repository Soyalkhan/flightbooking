// import React from 'react'
// import './Hero.css'
// import dark_arrow from '../../assets/dark-arrow.png'
// const Hero = () => {
//   return (
//     <div className='hero containers'>
//       <div className="hero-text">
//          <h2>Quick, Easy, and Tailored to You
//         </h2> 
//          <h1>Your Personal Portal to Flights, Getaways, and Adventure</h1> 
//          <p>A fast and responsive website is essential for travelers to find and book flights effortlessly.</p> 
//          <button className='btn'>book flight <img src={dark_arrow} alt="" /></button> 

        
//       </div>
//     </div>
//   )
// }
// export default Hero


// import React, { useRef, useState } from 'react';
// import './Hero.css';
// import next_icon from '../../assets/next-icon.png';
// import back_icon from '../../assets/back-icon.png';
// import dark_arrow from '../../assets/dark-arrow.png'

// const Hero = () => {
//   const slider = useRef();
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const slides = [
//     'https://cdn.shopify.com/s/files/1/0697/3702/1663/files/banner1_Mesadetrabajo1.jpg?v=1725742068',
//     'https://cdn.shopify.com/s/files/1/0697/3702/1663/files/banner1_Mesadetrabajo1.jpg?v=1725742068'
//   ];

//   const slideForward = () => {
//     const newIndex = (currentIndex + 1) % slides.length;
//     setCurrentIndex(newIndex);
//     slider.current.style.transform = `translateX(-${newIndex * 100}%)`;
//   };

//   const slideBackward = () => {
//     const newIndex = (currentIndex - 1 + slides.length) % slides.length;
//     setCurrentIndex(newIndex);
//     slider.current.style.transform = `translateX(-${newIndex * 100}%)`;
//   };

//   const handleDotClick = (index) => {
//     setCurrentIndex(index);
//     slider.current.style.transform = `translateX(-${index * 100}%)`;
//   };

//   return (
//     <div className='hero-wrapper'>
//       <div className='slider-wrapper'>
//         <div className='slides' ref={slider}>
//           {slides.map((slide, index) => (
//             <div className='slide-item' key={index}>
//               <img src={slide} alt={`Slide ${index}`} className='slide-image' />
//             </div>
//           ))}
//         </div>
//         <img src={next_icon} alt="Next" className='next-slide-btn' onClick={slideForward} />
//         <img src={back_icon} alt="Previous" className='prev-slide-btn' onClick={slideBackward} />
//         <div className='dots-container'>
//           {slides.map((_, index) => (
//             <span
//               key={index}
//               className={`dot ${currentIndex === index ? 'active' : ''}`}
//               onClick={() => handleDotClick(index)}
//             ></span>
//           ))}
//         </div>
//       </div>
//       <div className='hero-text'>
//         <h2>Quick, Easy, and Tailored to You</h2>
//         <h1>Your Personal Portal to Flights, Getaways, and Adventure</h1>
//         <p>A fast and responsive website is essential for travelers to find and book flights effortlessly.</p>
//         <button className='btn'>Book Flight <img src={dark_arrow} alt="Arrow" /></button>
//       </div>
//     </div>
//   );
// };

// export default Hero;



import React, { useRef, useState, useEffect } from 'react';
import './Hero.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import dark_arrow from '../../assets/dark-arrow.png';

const Hero = () => {
  const slider = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const desktopSlides = [
    'https://cdn.shopify.com/s/files/1/0697/3702/1663/files/2_web-01.jpg?v=1726314876',
    'https://cdn.shopify.com/s/files/1/0697/3702/1663/files/1_web-01_1.jpg?v=1726314876'
  ];

  const mobileSlides = [
    'https://cdn.shopify.com/s/files/1/0697/3702/1663/files/phone_2-01.jpg?v=1726314876',
    'https://cdn.shopify.com/s/files/1/0697/3702/1663/files/1_phone-01_1.jpg?v=1726314876'
  ];

  const slides = isMobile ? mobileSlides : desktopSlides;

  const slideForward = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
    slider.current.style.transform = `translateX(-${newIndex * 100}%)`;
  };

  const slideBackward = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
    slider.current.style.transform = `translateX(-${newIndex * 100}%)`;
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    slider.current.style.transform = `translateX(-${index * 100}%)`;
  };

  const handleResize = () => {
    const isNowMobile = window.innerWidth <= 768;
    setIsMobile(isNowMobile);
    setCurrentIndex(0); // Reset index
    if (slider.current) {
      slider.current.style.transform = 'translateX(0%)'; // Reset slider position
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Add automatic slide effect every 3 seconds
  useEffect(() => {
    const interval = setInterval(slideForward, 3000); 
    return () => clearInterval(interval); 
  }, [slides, currentIndex]); 
  
  return (
    <div className='hero-wrapper'>
      <div className='slider-wrapper'>
        <div className='slides' ref={slider}>
          {slides.map((slide, index) => (
            <div className='slide-item' key={index}>
              <img src={slide} alt={`Slide ${index}`} className='slide-image' />
            </div>
          ))}
        </div>
        <img src={next_icon} alt="Next" className='next-slide-btn' onClick={slideForward} />
        <img src={back_icon} alt="Previous" className='prev-slide-btn' onClick={slideBackward} />
        <div className='dots-container'>
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Hero;
