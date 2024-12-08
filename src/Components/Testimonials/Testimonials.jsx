import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.jpg'
import user_2 from '../../assets/user-2.jpg'
import user_3 from '../../assets/user-3.jpg'
import user_4 from '../../assets/user-4.jpg'



const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Neeraj Kumar</h3>
                            <span>Delhi, India</span>
                            <div>⭐⭐⭐⭐⭐</div>
                        </div>
                    </div>
                    <p>My trip from Delhi to Goa with Flyanza was pretty smooth overall. I was a bit anxious about the airport rush, but the check-in was surprisingly quick, and the staff were really friendly. I even had time to grab a coffee before boarding, which is rare for me!
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Suhas</h3>
                            <span>Banglore, India</span>
                            <div>⭐⭐⭐⭐⭐</div>
                        </div>
                    </div>
                    <p>I had an amazing experience flying Flyanza from Delhi to Bangalore. I’m usually a bit stressed about flights, but this trip was completely hassle-free. Checking in online was super easy, and I had my boarding pass in my inbox in estimated time—such a relief!
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Saurabh Bhaskar</h3>
                            <span>Chicago, USA</span>
                            <div>⭐⭐⭐⭐⭐</div>
                        </div>
                    </div>
                    <p>I recently flew with Flyanza from Delhi to Chicago, and for a long-haul flight, it was a really solid experience! I was a bit nervous about being cramped for such a long time, but Flyanza exceeded my expectations. The seats were spacious enough.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Aakash Goyal</h3>
                            <span>Dubai</span>
                            <div>⭐⭐⭐⭐⭐</div>
                        </div>
                    </div>
                    <p>Flying from Delhi to Dubai with Flyanza was a great experience! As someone who flies internationally quite often, I have pretty high expectations, and Flyanza almost ticked all the boxes. And we boarded and took off without any delays.
                    </p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}









export default Testimonials


